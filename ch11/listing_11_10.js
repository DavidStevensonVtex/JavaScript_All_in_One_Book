async function fetchTheData(url) {
    try
    {
        const response = await fetch ( url ) ;
        if ( response.status >= 200 && response.status <= 299 ) {
            return response.json() ;
        }
        else
        {
            throw new Error(response.statusText);
        }
    }
    catch ( error ) {
        console.log("Error occurred");
        console.log(error);
    }
}

let booksPromise = fetchTheData('http://127.0.0.1:5500/ch11/books.json');
booksPromise.then ( data => console.log(data) ) ;
