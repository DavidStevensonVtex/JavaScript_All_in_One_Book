class Cat {
    constructor(name, type)
    {
        this.name = name;
        this.type = type;
    }
}

let ourCat = new Cat ( 'Fuzzy', 'orange tabby');
let secondCat = new Cat ( 'Bootsie', 'calico');
console.log(ourCat);
console.log(secondCat);

// Cat { name: 'Fuzzy', type: 'orange tabby' }
// Cat { name: 'Bootsie', type: 'calico' }