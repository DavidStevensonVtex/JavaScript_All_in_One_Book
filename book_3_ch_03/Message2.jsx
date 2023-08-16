// Listing 3-18. Using Props to Create a More Reusable Component

function Message(props) {
    return (
        <div className={props.messageType}>
            <h1>{props.messageText}</h1>
        </div>
    )
}

export default Message;