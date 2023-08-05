function makeUnorderedList(array) {
    let listItems = array.map(function(element) {
        return `<li>${element}</li>` ;
    }) ;

    console.log("listItems: ", listItems);
    return `<ul>${listItems.join('')}</ul>` ;
}

let unorderedList = makeUnorderedList(['James', 'Robert', 'John', 'Michael', 'David', 'William']) ;
console.log(unorderedList);

// listItems:  [
//     '<li>James</li>',
//     '<li>Robert</li>',
//     '<li>John</li>',
//     '<li>Michael</li>',
//     '<li>David</li>',
//     '<li>William</li>'
//   ]
//   <ul><li>James</li><li>Robert</li><li>John</li><li>Michael</li><li>David</li><li>William</li></ul>