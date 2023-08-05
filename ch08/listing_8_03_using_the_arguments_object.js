function makeNumberedList() {
    let numberedList = '<ol>' ;
    for ( let i = 0 ; i < arguments.length ; i++ ) {
        numberedList += `<li>${arguments[i]}</li>`;
    }
    numberedList += '</ol>' ;
    return numberedList ;
}

let numberedList = makeNumberedList('James', 'Robert', 'John', 'Michael', 'David', 'William') ;
console.log(numberedList);

{/* <ol><li>James</li><li>Robert</li><li>John</li><li>Michael</li><li>David</li><li>William</li></ol> */}