// Listing 3-11. Extending React.PureComponent

// If yo uknow that yoru class component always returns the same output when
// given the same props, you can create the component by extending the 
// React.PureComponent class

class Message extends React.PureComponent {
    render() {
        return <h1>Hi, {this.props.firstName}</h1> ;
    }
}