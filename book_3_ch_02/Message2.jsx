// Listing 2-15. Importing and using CSS Modules

import styles from './Message.module.css' ;

function Message(props) {
    return <p className={styles.redParagraph}>This text is red.</p>
}

export default Message ;