const {
    readNotesFromDB,
    addNotes,
    putNotes,
    deleteNotes
} = require("./notes");

let notesArray;
let who;
let index;
let note;

beforeAll(() => {
    notesArray = readNotesFromDB(who);
});

describe("Test on functions related to notes", () => {
    test("read notes from DB returns a promise object", () => {
        expect(readNotesFromDB(who)).toMatchObject({});
    });
    test("add note works", () => {
        expect(addNotes(notesArray, who, note)).toBeDefined();
    });
    test("edit note works", () => {
        expect(putNotes(notesArray, who, index, note)).toBeDefined();
    });
    test("delete note works", () => {
        expect(deleteNotes(notesArray, who, index)).toBeDefined();
    });
})