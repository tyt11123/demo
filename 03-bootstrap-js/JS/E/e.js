function maya(num) {
    // check number condition
    if ( (Number.isInteger(num)) && (num >= 10) && (num <= 999999)) {
        let temp = num.toString();
        let ans = '';
        for (let i = 0; i < temp.length; i++) {
          switch (temp[i]) {
            case '0':
            ans += 'o';
            break;
            case '1':
            ans += 'b';
            break;
            case '2':
            ans += 'l';
            break;
            case '3':
            ans += 'i';
            break;
            case '4':
            ans += 'e';
            break;
            case '5':
            ans += 't';
            break;
            case '6':
            ans += 'a';
            break;
            case '7':
            ans += 'd';
            break;
            case '8':
            ans += 'n';
            break;
            case '9':
            ans += 'm';
            break;
//“a” - 6 “b” - 1 “d” - 7 “e” - 4 “i” - 3 “l” - 2 “m” - 9 “n” - 8 “o” - 0 “t” - 5            
          }
        }
        return ans;
      } else {
          return 'Invalid Number!';
          }
}

console.log(maya(1572368));
console.log(maya(15728));