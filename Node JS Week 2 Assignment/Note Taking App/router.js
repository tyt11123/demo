const express = require("express");
const router = express.Router();
let notesObj = {};
const {
    readNotesFromJSON,
    writeNotesToJSON,
    addNotes,
    putNotes,
    deleteNotes
} = require("./notes");

router.route('/')
.all( (req, res, next) => {                                                   // initialization
    notesObj = readNotesFromJSON('./notes.json');
    if (notesObj[req.auth.user] == null) {
        notesObj[req.auth.user] = [];
    }
    next() // pass control to the next handler
}).get( (req, res) => {                                                       // get - render the handlebars
    let renderObj = createRenderObj(notesObj, req.auth.user);
    res.render("index", renderObj);
}).post( (req, res) => {                                                      // post - add new notes
    addNotes(notesObj, req.auth.user, Object.values(req.body)[0]);
    writeNotesToJSON(notesObj, './notes.json');
    let renderObj = createRenderObj(notesObj, req.auth.user);
    res.render("index", renderObj);
}).put( (req, res) => {                                                       // put - edit notes
    putNotes(notesObj, req.auth.user, Object.keys(req.body)[0], Object.values(req.body)[0]);
    writeNotesToJSON(notesObj, './notes.json');
    res.status(200).send(true);
}).delete( (req, res) => {                                                    // delete - delete notes
    notesObj = deleteNotes(notesObj, req.auth.user, Object.values(req.body)[0]);
    writeNotesToJSON(notesObj, './notes.json');
    res.status(200).send(true);
});

function createRenderObj (notesObj, who) {     // render object: the name and the notes
    let renderObj = {                          // to pass to the handlebars
        who: "",
        notes: []
    };
    renderObj.who = who;
    if (notesObj[who] == null) {
        renderObj.notes = [];
    } else {
        renderObj.notes = notesObj[who];
    }
    return renderObj;
}

module.exports = router;