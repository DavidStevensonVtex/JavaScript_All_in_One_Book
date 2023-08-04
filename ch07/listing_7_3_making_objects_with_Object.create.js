// The Object.create method makes a new object and uses an existing object 
// as the new object's prototype.

const computer = { memory: '16GB', HD: '8TB' } ;

const laptop = Object.create(computer) ;
console.log("laptop", laptop);      // laptop {}



const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  console.log("me", me);    // me {}
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  console.log("me", me);        // me { name: 'Matthew', isHuman: true }

  me.printIntroduction();
  // Expected output: "My name is Matthew. Am I human? true"