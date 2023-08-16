// Listing 3-21: Wrapping Components Around Other Components

import { Blink, SolidBorderBox } from './Blink' ;

function App() {
    return (
        <SolidBorderBox>
            <Blink delay={1000}>
                <p>Important Message</p>
            </Blink>
        </SolidBorderBox>
    ) ;
}

export default App ;