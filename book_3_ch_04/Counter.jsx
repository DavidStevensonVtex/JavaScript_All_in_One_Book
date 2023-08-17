// Listing 4-2. Defining a Named Event Handler Function

import { useState } from "react" ;

function Count(props) {
    const [counter, setCounter] = useState(0);
    function increment(incrementBy = 1) {
        setCounter(counter + incrementBy);
    }
    // To pass arguments (other than the event object) to an event handler, you can
    // define an arrow function that invokes an inner function.
    return <button onClick={() => increment(2)}>Add 2 - {counter}</button>
}

export default Counter ;