// Listing 2-2. Compiled JSX

React.createElement(
    'form',
    null,
    React.createElement(
        'label',
        { htmlFor: 'searchterm' },
        'Search For:',
        React.createElement('input', { 
            type: 'text',
            id: 'searchTerm'
        })
    ),
    React.createElement('button', null, 'Search' ) ;
)