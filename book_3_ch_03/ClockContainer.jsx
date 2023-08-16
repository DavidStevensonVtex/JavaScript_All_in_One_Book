// Listing 3-16. A Function Component with a Timer

import { useState, useEffect } from 'react' ;

function ClockContainer(props) {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setVisible(!visible) }>Toggle Clock Visibility</button>
            { visible && <Clock /> }
        </div>
    ) ;
}

function Clock(props) {
    const [date, setDate] = useState(new Date()) ;
    useEffect( () =>{
        const timer = setInterval( () => getNewTime(), 1000);
        return () => {
            console.log('stopping the timer...');
            clearInterval(timer) ;
        };
    }, []);

    function getNewTime() {
        this.setState( {date: new Date() });
    }

    return (
        <h1>
            The current time is {date.toLocaleTimeString()}
        </h1>
    );
}

export default ClockContainer ;