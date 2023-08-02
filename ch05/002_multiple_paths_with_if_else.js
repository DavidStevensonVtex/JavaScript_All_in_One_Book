function Greeting(pet) {
    let greeting;

    if (pet === "cat") {
        greeting = "Good kitty";
    } else if (pet === "dog") {
        greeting = "Who's a good boy or girl?";
    } else if (pet === "parrot") {
        greeting = "Wanna cracker?";
    } else {
        greeting = "Hi";
    }

    return greeting;
}

let pets = ["cat", "dog", "parrot", "goldfish"];

for (pet of pets) {
    console.log(pet, Greeting(pet));
}

// cat Good kitty
// dog Who's a good boy or girl?
// parrot Wanna cracker?
// goldfish Hi