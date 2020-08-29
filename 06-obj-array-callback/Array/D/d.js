var marks = [
    { mark: 99 }, { mark: 80 }, { mark: 60 }, { mark: 70 }, { mark: 50 },
    { mark: 67.6 }, { mark: 62.4 }, { mark: 87.5 }, { mark: 55 }
]

function a(arr) {
    let a1 = arr.map(elem => elem.mark);
    let a2 = a1.length;
    let a3 = a1.reduce((prev, curr) => prev + curr);
    let a4 = Math.round(a3 / a2);
    return a4;
}

console.log(a(marks));