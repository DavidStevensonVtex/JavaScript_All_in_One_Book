function doSomething(callback) 
{
    callback() ;
}

doSomething(function() {
    console.log('done.');
}) ;