// Listing 3-19: Composing an ErrorMessage Component

import Message from './Message2' ;

function ErrorMessage(props) {
    return <Message messageType="error" messageText={props.ErrorMessage} />
}

export default ErrorMessage;