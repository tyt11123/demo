let num = require('./number');
let letter = require('./numberToLetter');

function randomSentence(a) {
    let ans = '';
    for ( let i = 0; i < a; i++ ) {
        ans += letter(num());
    }
    return ans;
}

module.exports = randomSentence;