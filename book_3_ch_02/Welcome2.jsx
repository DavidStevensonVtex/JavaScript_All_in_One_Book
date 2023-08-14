// Listing 2-8: Conditional Rendering with the Conditional Operator

import WelcomeMessage from './WelcomeMessage' ;
import Login from './Login' ;

function Welcome2 ( { loggedIn } ) {
    return (
        <div>
            { loggedIn ? <WelcomeMessage /> : <Login /> }
        </div>
    ) ;
}

export default Welcome2 ;