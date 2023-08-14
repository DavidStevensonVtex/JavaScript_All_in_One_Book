// Listing 2-8: Conditional Rendering with the Conditional Operator

import WelcomeMessage from './WelcomeMessage' ;
import Login from './Login' ;

function Welcome ( { loggedIn, isHuman } ) {
    return (
        <div>
            { loggedIn && isHuman && <WelcomeMessage /> }
            Note: If you don't see the welcome message, you're
            not logged in or your a bot.
        </div>
    )
}