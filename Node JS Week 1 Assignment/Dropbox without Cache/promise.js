const fs = require('fs');

function pipeStreams(readableStream, writeableStream) {
    return new Promise((resolve, reject) => {
        readableStream.pipe(writeableStream);
        writeableStream.on("finish", () => resolve());
        readableStream.on("error", error => reject(error));
        writeableStream.on("error", error => reject(error));
    });
}

module.exports = pipeStreams;