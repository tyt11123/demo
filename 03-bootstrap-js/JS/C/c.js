for ( let i = 1; i <= 30 ; i ++ ) {
    // set up string and flag
    let str = '';
    let flag = false;
    if (i % 3 === 0) {
        str += 'Hong ';
        flag = true;
        }
    if (i % 5 === 0) {
        str += 'Kong';
        flag = true;
        }
    if (flag) {
        console.log(str);
        } else {
            console.log(i);
            }
}