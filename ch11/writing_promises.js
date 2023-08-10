function someAsynchronousFunction( f )
{
    setTimeout( f, 5000);
}

let myPromise = new Promise( (resolve, reject) => {
    someAsynchronousFunction( function() {
        resolve("Success!");
    }) ;
});

myPromise.then( (result) => {
    console.log(result) ;
});