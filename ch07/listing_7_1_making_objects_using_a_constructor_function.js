function Cat(name, type) {
    this.name = name ;
    this.type = type ;
}

const ourCat = new Cat('Murray', 'domestic short hair' ) ;
console.log(ourCat) ;
// Cat { name: 'Murray', type: 'domestic short hair' }