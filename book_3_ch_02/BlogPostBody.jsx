// Listing 2-11. Using the Style Attribute

function BlogPostBody ( { blogBodyText } ) {
    return (
        <p style={{ fontSize: '100%', marginBottom: '2.2rem', color: '#171717' }}>
            {blogBodyText}
        </p>
    ) ;
}