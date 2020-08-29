let win_combination = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
let a = [[],[]];
let winner = -1;    // change to 0 or 1 for indication when there is a winner 
let count = 0;      // always halt when playing turn reaches 9
let s = ['<i class="fas fa-times fa-5x"></i>', '<i class="fas fa-circle-notch fa-4x"></i>'];
// ^ s[0] is the cross, while s[1] is the circle

function check(arr) {       // check if the input array has any one of the combinations
    let flag = false;       // in the win_combination array
    win_combination.forEach(x => {
        let count2 = 0;
        x.forEach(y => {
            if (arr.includes(y)) {count2 += 1};
        })
        if (count2 === 3) {flag = true;};
    })
    return flag;
}

function player1(arr) {
    let weights = [];       // assign a weight for each win combinations
    win_combination.forEach( x => {
        let mark = 0;
        x.forEach( y => {
            if ( arr[0].includes(y) ) {mark -= 1};
            if ( arr[1].includes(y) ) {mark += 1};
        });
        weights.push(mark);
    });
    let i = weights.indexOf(2);
    if ( i === -1) { i = weights.indexOf(-2);}
    if ( i === -1) { i = weights.indexOf(Math.max(...weights));}
    let answer = -1;
    win_combination[i].forEach( y => {
        if ( (!(arr[0].includes(y))) && (!(arr[1].includes(y))) ) {
            answer = y;
        }
    });
    if (answer === -1) {
        for (let y = 0; y < 9; y++) {
            if ( (!(arr[0].includes(y))) && (!(arr[1].includes(y))) ) {
                answer = y;
            }
        }
    }
    return answer;
}

$('h1').text(`Player ${count%2}'s turn`);
$(document).ready( function() {
    $('.column').click(function () {
        if (winner === -1) {
            if ($(this).children().length === 0) {
                let i = $('.column').index(this);
                a[count%2].push(i);
                a[count%2].sort( (a,b) => a - b );
                $(this).append(s[count%2]);             // append the cross to DOM
                $(this.children[0]).fadeOut(200);       // jQuery animation
                $(this.children[0]).fadeIn(200);
                count += 1;

                a.forEach( (b,i) => {                   // check if player 0 wins
                    if (check(b)) {winner = i};
                })

                if ( (count%2 === 1) && (winner === -1) && (count != 9)) {  // computer's turn
                    let index = player1(a);
                    a[count%2].push(index);
                    a[count%2].sort( (a,b) => a - b );
                    $('.column').eq(index).append(s[count%2]);             // append the circle to DOM
                    $('.column').eq(index).children().fadeOut(1000);       // jQuery animation
                    $('.column').eq(index).children().fadeIn(1000);
                    count += 1;
                }

                a.forEach( (b,i) => {                   // check if player 1 (computer) wins
                    if (check(b)) {winner = i};
                })

                if (winner === -1) {
                    if (count === 9) {
                        $('h1').text(`Draw`);
                    } else {
                        $('h1').text(`Player ${count%2}'s turn`);
                    }
                } else {
                    $('h1').text(`Player ${winner} wins`);
                }
            };
        }
    });
});
