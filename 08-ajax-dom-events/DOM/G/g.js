function removeAllChildrenFromId(str) {
    let x = document.getElementById(str);
    let y = x.children.length;
    for (let i = 0; i < y; i++) {
        x.removeChild(x.lastChild);
      }
}
