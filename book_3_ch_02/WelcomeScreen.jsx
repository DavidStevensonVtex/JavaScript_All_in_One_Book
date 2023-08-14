// Listing 2-4: Using Element Variables

import Message from './Message' ;

function WelcomeScreen() {
    const header = (
        <h1>
            <Message message="Welcome!" messageType="header" />
        </h1>
    ) ;

    return { header } ;
}

export default WelcomeScreen ;