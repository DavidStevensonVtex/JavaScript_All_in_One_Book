// Listing 3-5. Using State in a Function Component

// Meet your first Hook 

// In React, useState, as well as any other function starting with ”use”, is called a Hook.

// Hooks are special functions that are only available while React is rendering (which we’ll 
//     get into in more detail on the next page). They let you “hook into” different React 
//     features.

// State is just one of those features, but you will meet the other Hooks later.

// https://www.w3schools.com/react/react_usestate.asp
// https://react.dev/learn/state-a-components-memory
// https://react.dev/reference/react/useState

import { useState } from 'react' ;

function Counter() {
    const [currentCount, setCurrentCount] = useState(0) ;

    function incrementCount() {
        const newCount = currentCount + 1;
        setCurrentCount(newCount);
    }

    return <button onClick={incrementCount}>{currentCount}</button>
}

export default Counter ;