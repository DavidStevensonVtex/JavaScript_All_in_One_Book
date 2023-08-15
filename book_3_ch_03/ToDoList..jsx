// Listing 3-6. A Class Component
// Class components are created by extending the React.Component base class.

// https://www.w3schools.com/react/react_components.asp
// https://legacy.reactjs.org/docs/react-component.html

// https://react.dev/reference/react/Component
// We recommend defining components as functions instead of classes. See how to migrate.
// Reading this.context in class components is equivalent to useContext in function components.

import React from 'react' ;

class ToDoList extends React.Component {
    render() {
        return this.props.todos.map( (todo, index) => <li key={index}>{todo}</li>) ;
    }
}

export default ToDoList ;