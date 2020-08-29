const express = require('express');
const fileUpload = require('express-fileupload');
const serveIndex = require('serve-index');  // https://github.com/expressjs/serve-index
// a package to show all files in a directory

const fs = require('fs');
const pipeStreams = require('./promise');   // write my own readstream pipe to work with promise

const path = require('path');
const app = express();

app.use(fileUpload({        // https://openbase.io/js/express-fileupload
    useTempFiles : true,    // use temp files instead of memory buffer
    tempFileDir : '/tmp/'   // to avoid memory issues when uploading large files
}));

app.use('/storage', express.static('storage'), serveIndex('storage', {'icons': true})); // serves directory
app.use(express.static('public'));      // Serving entry page

app.post('/upload', (req, res) => {
    if (req.files === null) {     // case 1: if no file is selected
        res.status(400);
        res.send("400 Bad Request");
        return false;
    }
    if (req.files["file[]"].length > 1) {   // case 2: if more than 1 file is selected
        let readable = [];
        let writeable = [];
        let p = [];         // an array of promises
        req.files["file[]"].forEach((element, i) => {
            readable.push(fs.createReadStream(element.tempFilePath, { highWaterMark: 32*1024 }));
            writeable.push(fs.createWriteStream(`storage${path.sep}${element.name}`));
            p.push(pipeStreams(readable[i], writeable[i]));
        })
        Promise.all(p)
        .then( () => {
            console.log("All files accessible.");
            res.send("All files received.<br><a href='./storage'>Storage</a>");
        })
        .catch(err => res.send(err))
    } else {        // case 3: if only 1 file is selected
        let readable = fs.createReadStream(req.files["file[]"].tempFilePath, { highWaterMark: 32*1024 });
        let writeable = fs.createWriteStream(`storage${path.sep}${req.files["file[]"].name}`);
        pipeStreams(readable, writeable)
        .then( () => {
            console.log("File accessible.");
            res.send("File received.<br><a href='./storage'>Storage</a>");
        })
        .catch(err => res.send(err))
    }
})

app.get('/storage/:name', function(req, res) {
    console.log(req.params);
});

app.get('/upload', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8080);