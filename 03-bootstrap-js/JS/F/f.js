function countChar(str, chr) {
    let res = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < res.length; i++) {
      if (res[i] == chr.toLowerCase()) {
        count += 1;
        }
    }
    return count;
}
  
console.log(countChar("fizzbuzz","z"));
console.log(countChar("Fancy fifth fly aloof","f"));