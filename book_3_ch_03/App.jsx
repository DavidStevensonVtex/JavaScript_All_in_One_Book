// Listing 3-8: Setting State in the Constructor

// The constructor is the only place ina React class component where you can modify 
// the state object directly. This is for a very good reason: The constructor() method 
// runs before the render() method.

import React from 'react' ;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                coords: { lat: 0, long: 0 },
            },
            temperature: 0,
            windSpeed: 0,
            precipitation: 0,
        };
    }

    render() {
        return <div>Widget Goes Here</div> ;
    }
}