function copy(str) {
    let fs = require('fs');
    let path = require('path');
    let readable = fs.createReadStream(__dirname + path.sep + str);
    let index = str.lastIndexOf(path.sep);      // see if the input string contains the path separator
    let dir = (index === -1) ? `${__dirname}${path.sep}anotherFolder${path.sep}` : __dirname + path.sep + str.substring(0,index) + path.sep + "anotherFolder" + path.sep;
    let file = str.substring(index + 1);    // to separate the destination directory and file name
    if (!fs.existsSync(dir)){     // if the directory does not exist
        fs.mkdirSync(dir);        // create the directory
    }
    let writeable = fs.createWriteStream(dir + file);
    readable.pipe(writeable);
}

copy('path/to/file.txt');