var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

let move = function (str) {
    let ans = '';
    for (let i = 0; i < str.length; i++) {
        let ind = (letterArray.indexOf(str[i]) + 10) % 26;
        ans += letterArray[ind];
      }
    return ans;
}

console.log(move('dog')); // the result should be 'nyq' as 'd' -> 'n' and so forth
