// Listing 2-3: Specifying an Attribute Value Using an Expression

function Message( { messageType, message } ) {
    function getMessageClass() {
        if ( messageType === 'error' ) {
            return 'errorStyle' ;
        }
        else
        {
            return 'messageStyle' ;
        }
    }

    return <p className={getMessageClass()}>{message}</p>
}