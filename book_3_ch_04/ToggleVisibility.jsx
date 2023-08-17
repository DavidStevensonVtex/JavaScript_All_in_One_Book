// Listing 4-4. Binding Class Methods Before Passing Them As Attributes

import React from 'react' ;

class ToggleVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: true } ;
    }

    setVisibility() {
        this.setState( { visible: ! this.state.visible }) ;
    }

    render() {
        return (
            <div>
                { this.state.visible ? this.props.children : '' }
                <button onClick={this.setVisibility.bind(this) }>
                    Show/Hide
                </button>
            </div>
        )
    }
}