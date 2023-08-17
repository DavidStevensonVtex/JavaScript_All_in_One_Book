// Listing 4-2. Defining a Named Event Handler Function

import { useState } from "react" ;

function Count(props) {
    const [counter, setCounter] = useState(0);
    function increment(incrementBy = 1) {
        setCounter(counter + incrementBy);
    }
    return <button onClick={increment}>{counter}</button>
}