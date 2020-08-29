function multiplyNumber(num) {
    // check positive integer
    if ( (Number.isInteger(num)) && (Math.sign(num) === 1) ) {
        let ans = num;
        while ( ans < 1000000 ) {
            ans *= 10;
        }
        return ans;
      } else {
          return 'ERROR';
          }
}

console.log(multiplyNumber('Hello'));
console.log(multiplyNumber(10));
console.log(multiplyNumber(66));