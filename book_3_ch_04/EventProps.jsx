// Listing 4-1. Viewing the Properties of the SyntheticBaseEvent Object

function EventProps() {
    const logClick = (e) => {
        console.dir(e);
    };
    return <button onClick={logClick}>Click Me</button>
}

export default EventProps ;