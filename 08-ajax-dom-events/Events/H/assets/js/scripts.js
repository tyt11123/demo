let x = document.getElementsByClassName('col box');
let arr = Array.from(x);
let y = [];
arr.map( e => y.push(e.children[0]) );
for (let i = 0; i < y.length; i++) {
    y[i].addEventListener('mouseover', e => {
        y[i].style.height = '140px';
        y[i].style.width = '140px';
    })
    y[i].addEventListener('mouseleave', e => {
        y[i].style.height = '100px';
        y[i].style.width = '100px';
    })
}

let elem = document.getElementById('more');
let elem2 = document.getElementById('flowershop');
let elem3 = document.getElementsByTagName('h1')[0];
x = document.getElementsByClassName('col product');
arr = Array.from(x);
let elem4 = [];
arr.map( e => elem4.push(e) );

function change() {
    elem2.style.filter = 'brightness(100%)';
    elem3.innerHTML = 'welcome to my flower shop';
    elem3.style.color = '#fff';
    elem3.style.backgroundColor = '#00f';
    elem.innerHTML = 'buy flowers';
    elem.style.backgroundColor = '#f00';
    elem4.forEach( e => { e.style.display = 'flex'; });
}

let click = 0;
elem.onclick = function() {
    click += 1;
    if (click % 2) { change(); } else { window.location.reload(); }
};
