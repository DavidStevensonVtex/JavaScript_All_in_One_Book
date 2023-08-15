// Listing 3-4. A Function Component Example
// Functions are stateless

function toDoList(props) {
    return props.todos.map( (todo, index) => <li key={index}>{todo}</li>) ;
}
