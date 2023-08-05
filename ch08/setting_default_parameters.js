function greetUser ( firstName = 'Valued', lastName = 'Customer' ) {
    console.log(`Hello, ${firstName} ${lastName}`);
}

greetUser() ;
greetUser('David');
greetUser(undefined, 'My Last Name');

// Hello, Valued Customer
// Hello, David Customer
// Hello, Valued My Last Name