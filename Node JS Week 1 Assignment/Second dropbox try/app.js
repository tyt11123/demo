const express = require("express");
const {
    readFile,
    writeFile,
    readdir,
    stat
} = require("./promise");
const path = require("path");
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('storage'));
app.use(express.static('public'));
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));

const cache = {};

app.post("/upload", (req, res) => {
    if (req.files === null) {     // case 1: if no file is selected
        res.status(400);
        res.send("400 Bad Request");
        return false;
    }
    if (req.files["file[]"].length > 1) {       // case 2: more than 1 file
        let p = [];         // an array of promises
        req.files["file[]"].forEach((element, i) => {
            cache[element.name] = element.data;
            p.push(writeFile(`storage${path.sep}${element.name}`, element.data));
        })
        Promise.all(p)
        .then( () => {
            let text = "All files received.<br><br>List of all files uploaded:<br>";
            readdir('./storage')
            .then((files) => {
                files.forEach((file) => {
                    if (file !== ".gitignore") {        // that .gitignore should not be shown
                        text += `<a href='./storage/${file}'>${file}</a><br>`;
                    }
                })
                res.send(text);
            })
            .catch(err => res.send(err));
        })
        .catch(err => res.send(err))
    } else {                                // case 3: only 1 file
        cache[req.files["file[]"].name] = req.files["file[]"].data;
        writeFile(`storage${path.sep}${req.files["file[]"].name}`, req.files["file[]"].name.data)
        .then(() => {
            let text = "File received.<br><br>List of all files uploaded:<br>";
            readdir('./storage')
            .then((files) => {
                files.forEach((file) => {
                    if (file !== ".gitignore") {    // that .gitignore should not be shown
                        text += `<a href='./storage/${file}'>${file}</a><br>`;
                    }
                })
                res.send(text);
            })
            .catch(err => res.send(err));
        })
        .catch(err => res.send(err));
    }
});

app.get("/storage/:name", (req, res) => {
    if (cache[req.params.name] == null) {       // cache[req.params.name] is the data itself
        readFile(`storage${path.sep}${req.params.name}`)
        .then((data)=>{
            cache[req.params.name] = data;
            res.send(cache[req.params.name]);
        })
        .catch(err => res.send(err));
    } else {
        res.send(cache[req.params.name]);
    }
});

app.listen(8080);