const {
    readNotesFromJSON,
    writeNotesToJSON,
    addNotes,
    putNotes,
    deleteNotes
} = require("./notes");

let path;
let notesObj;
let who;
let index;
let note;

beforeAll(() => {
    notesObj = readNotesFromJSON("./notes.json");
    who = Object.keys(notesObj)[0];
});

describe("Test on functions related to notes", () => {
    test("read notes from JSON works", () => {
        expect(readNotesFromJSON("./notes.json")).toMatchObject({});
    });
    test("write notes to JSON works", () => {
        expect(writeNotesToJSON({},"./notes.test.json")).toBeUndefined();
    });
    test("add note works", () => {
        expect(addNotes(notesObj, who, note)).toBeDefined();
    });
    test("edit note works", () => {
        expect(putNotes(notesObj, who, index, note)).toBeDefined();
    });
    test("delete note works", () => {
        expect(deleteNotes(notesObj, who, index)).toBeDefined();
    });
})