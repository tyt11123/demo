let {
    readdir,
    stat
} = require("./promise");
const path2 = require('path');  // for path separator

function determine(path) {
    stat(path)
    .then((a) => {
        if (a.isDirectory()) {
            console.log(`${path} is a directory`);
            readdir(path)
            .then((arr) => {    // arr is a list of folders / files under the directory
                arr.forEach((subpath) => {
                    determine(`${path}${path2.sep}${subpath}`);
                })
            })
            .catch((err) => console.log(err));
        } else {
            console.log(`${path} is a file`);
        }
    })
    .catch((err) => console.log(err));
}

determine('.');