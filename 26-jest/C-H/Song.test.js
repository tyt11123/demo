let Song = require('./Song');

let name;
let album;
let author;
let options;
let song;
let othersong;

beforeEach(() => {
    expect.extend({
        toBeInTheSameAlbumAs(song, othersong) {
            const verified = (song.album === othersong.album);
            if (verified) {
                return {
                    message: ()=> `Both from the same album '${song.album}`,
                    pass: true
                }
            } else {
                return {
                    message: ()=> `${song.name} and ${othersong.name} are from different albums`,
                    pass: false
                }
            }
        }
    });
    expect.extend({
        everythingToBeTheSame(song,othersong) {
            const verified = (
                (song.name === othersong.name) &&
                (song.album === othersong.album) &&
                (song.author === othersong.author)
            );
            if (verified) {
                return {
                    message: ()=> `Every attribute is the same`,
                    pass: true
                }
            } else {
                return {
                    message: ()=> `Something is different`,
                    pass: false
                }
            }
        }
    });
})

describe("Description of songs should be correct", () => {
    beforeEach(() => {
        options = {
            name: name,
            album: album,
            author: author
        }
        song = new Song(options);
        othersong = new Song(options);
    });
    test("should be able to assign name", () => {
        expect(song.name).toEqual(name);
    });
    test("should be able to assign album", () => {
        expect(song.album).toEqual(album);
    });
    test("should be able to assign author", () => {
        expect(song.author).toEqual(author);
    });
    test("should be able to get description", () => {
        expect(song.getDescription())
        .toEqual(`The name of this song is ${name} and it is from the album ${album}. It is written by ${author}`);
    });
    test("should be able to compare album", () => {
        expect(song.isInSameAlbum(othersong)).toBeTruthy();
    });
    test("should be able to compare album with custom matcher", () => {
        expect(song).toBeInTheSameAlbumAs(othersong);
    });
    test('name, album and author should be the same', ()=> {
        expect(song).everythingToBeTheSame(othersong);
    });
    test('should be 2 different song objects even everything are the same', ()=> {
        expect(song).not.toBe(othersong);
        expect(song).not.toEqual(othersong);
    });
})
