// Listing 2-7: Using Multiple Conditions with &&

import WelcomeMessage from './WelcomeMessage' ;

function Welcome ( { loggedIn, isHuman } ) {
    return (
        <div>
            { loggedIn && isHuman && <WelcomeMessage /> }
            Note: If you don't see the welcome message, you're
            not logged in or your a bot.
        </div>
    )
}