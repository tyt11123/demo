function numToChar(num) {
    let map = 'abcdefghijklmnopqrstuvwxyz';
    return map[num - 1];
}

module.exports = numToChar;