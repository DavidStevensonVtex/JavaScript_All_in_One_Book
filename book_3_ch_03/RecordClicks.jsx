// Listing 3-14. Using useEffect to Perform Side Effects

import { useEffect, useState } from "react" ;

function RecordClicks(props) {
    const [count, setCount] = useState(0);
    useEffect( () => {
        localStorage.setItem('currentCount', count) ;
    });

    function incrementCount() {
        const incremented = count + 1 ;
        setCount(incremented);
    }

    return <button onClick={incrementCount}>Increment and Store: {count}</button>
}