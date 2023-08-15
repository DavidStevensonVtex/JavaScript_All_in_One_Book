// Listing 3-12. Using React.memo() to Optimize Rendering of Function Components

// In function components, you can accomplish the same thing as React.PureComponent
// by using React.memo(). React.memo() caches the return value of a function 
// component and returns the cached value if the inputs to the component are
// the same as the last time it was rendered.

const Message = React.memo(function Message(props) {
    return <h1>Hi, {props.firstName}</h1> ;
})