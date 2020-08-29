class Song{
    constructor(options) {
        this.name = options.name;
        this.album = options.album;
        this.author = options.author;
    }
    persistFavoriteStatus = function(value){
        throw new Error("Not Yet Implemented. ")
    };
    getDescription() {
        return `The name of this song is ${this.name} and it is from the album ${this.album}. It is written by ${this.author}`
    }
    isInSameAlbum(otherSong) {
        return (this.album === otherSong.album)
    }
};
module.exports = Song;