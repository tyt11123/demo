let reverse = function (num) {
    let a = [];
    let b = num.toString();
    for (let c = b.length - 1; c >= 0; c--) {
        a.push(b[c]);
    }
    return a;
}

console.log(reverse(54321));