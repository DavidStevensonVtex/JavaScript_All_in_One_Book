// Listing 3-9: Rendering with State Data

// The return value of the render method is usually described using JSX,
// although it may be a string, a number, an array, null, or undefined.

import React from 'react' ;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            location: 'Chicago',
            current_condition: {
                temp_C: 0,
                windspeedKmph: 0,
                precipMM: 0,
            },
        };
    }

    render() {
        return (
            <div>
                <h1>Today's weather for {this.state.location}</h1>
                <ul>
                    <li>temperature: {this.state.current_condition.temp_C} °C</li>
                    <li>wind speed: {this.state.current_condition.windspeedKmph} km/h</li>
                    <li>precipitation amount: {this.state.current_condition.precipMM} mm</li>
                </ul>
            </div>
        ) ;
    }
}

export default App ;