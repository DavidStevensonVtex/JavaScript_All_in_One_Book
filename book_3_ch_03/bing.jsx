// Listing 3-1. A High-Level View of Bing.com

export default function Bing() {
    return (
        <Homepage>
            <TopNav />
            <SearchBox />
            <NewsImageScroller />
            <div>
                <div class="leftColumn">
                    <TopStories />
                </div>
                <div class="rightColumn">
                    <Weather postalCode="97103" />
                    <Sports />
                </div>
            </div>
        </Homepage>
    )
}