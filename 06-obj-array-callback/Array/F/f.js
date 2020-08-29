function transform(str) {
    let str2 = [];
    for (let i = 0; i < str.length; i++) {
        switch (str.charAt(i)) {
            case '1':
                str2.push('a');
                break;
            case '2':
                str2.push('b');
                break;
            case '3':
                str2.push('c');
                break;
            case '4':
                str2.push('d');
                break;
            case '5':
                str2.push('e');
                break;
            case '6':
                str2.push('f');
                break;
            case '7':
                str2.push('g');
                break;
            case '8':
                str2.push('h');
                break;
            case '9':
                str2.push('i');
                break;
            case '0':
                str2.push('j');
                break;
        }
    }
    str2.sort();
    return str2.join("");
}
console.log(transform('213')); // abc