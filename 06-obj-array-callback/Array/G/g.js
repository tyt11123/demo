let middle = function (arr) {
    let d = Math.max(arr[0], arr[1], arr[2]);
    let e = Math.min(arr[0], arr[1], arr[2]);
    let f = arr.indexOf(d);
    let g = arr.indexOf(e);
    let h = 3 - f - g;
    return `${h} -> ${arr[h]} lies between ${d} and ${e}`;
  }
  
  console.log(middle([2,3,1])); // 0 -> 2 at index 0 lies between 3 and 1
  console.log(middle([88, 7, 55 ])); // 2 -> 55 lies between 7 and 88