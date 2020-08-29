const fs = require('fs');

function readNotesFromJSON (path) {
    let temp1 = fs.readFileSync(path, 'utf-8', async (err, data) => {
        if (err) {
            throw err
        }
        return await data
    });
    let notesObj = JSON.parse(temp1);
    return notesObj;
}

function writeNotesToJSON (notesObj, path) {
    let temp2 = JSON.stringify(notesObj);
    fs.writeFileSync(path, temp2, 'utf-8');
}

function addNotes(notesObj, who, note) {
    notesObj[who].unshift(note);
    return notesObj;
}

function putNotes(notesObj, who, index, note) {
    notesObj[who].splice(index, 1, note);
    return notesObj;
}

function deleteNotes(notesObj, who, index) {
    notesObj[who].splice(index, 1);
    return notesObj;
}

module.exports = {
    readNotesFromJSON,
    writeNotesToJSON,
    addNotes,
    putNotes,
    deleteNotes
}