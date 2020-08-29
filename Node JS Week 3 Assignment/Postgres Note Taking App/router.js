const express = require("express");
const router = express.Router();
let notesArray = [];
const {
    readNotesFromDB,
    addNotes,
    putNotes,
    deleteNotes
} = require("./notes");

router.route('/')
.all( (req, res, next) => {                                                   // initialization
    let promise1 = readNotesFromDB(req.auth.user);
    promise1.then((stuff) => {
        notesArray = stuff;
        next() // pass control to the next handler
    });
}).get( (req, res) => {                                                       // get - render the handlebars
    let renderObj = createRenderObj(notesArray, req.auth.user);
    res.render("index", renderObj);
}).post( (req, res) => {                                                      // post - add new notes
    let promise1 = addNotes(notesArray, req.auth.user, Object.values(req.body)[0]);
    promise1.then((stuff) => {
        notesArray = stuff;
        let renderObj = createRenderObj(notesArray, req.auth.user);
        res.render("index", renderObj);
    });
}).put( (req, res) => {                                                       // put - edit notes
    let promise1 = putNotes(notesArray, req.auth.user, notesArray[Object.keys(req.body)[0]].id, Object.values(req.body)[0]);
    promise1.then((stuff) => {
        notesArray = stuff;
        let renderObj = createRenderObj(notesArray, req.auth.user);
        res.render("index", renderObj);
    });
}).delete( (req, res) => {                                                    // delete - delete notes
    let promise1 = deleteNotes(notesArray, req.auth.user, notesArray[Object.values(req.body)[0]].id);
    promise1.then((stuff) => {
        notesArray = stuff;
        let renderObj = createRenderObj(notesArray, req.auth.user);
        res.render("index", renderObj);
    });
});

function createRenderObj (notesArray, who) {     // render object: the name and the notes
    let renderObj = {                          // to pass to the handlebars
        who: "",
        notes: []
    };
    renderObj.who = who;
    renderObj.notes = notesArray.map(x => x.note);
    return renderObj;
}

module.exports = router;