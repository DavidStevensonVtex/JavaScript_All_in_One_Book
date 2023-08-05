function sortList ( orderBy, ...items )
{
    console.log("sortList: orderBy: ", orderBy);
    for ( item of items )
    {
        console.log("sortList: item: ", item);
    }
    // sort not implemented.
}

sortList('alphabetical', 'James', 'Robert', 'John', 'Michael', 'David', 'William' ) ;

// sortList: orderBy:  alphabetical
// sortList: item:  James
// sortList: item:  Robert
// sortList: item:  John
// sortList: item:  Michael
// sortList: item:  David
// sortList: item:  William