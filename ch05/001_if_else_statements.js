let country = "TimBukTu" ;

function DetermineTemperature(country, temperature)
{
    if ( country === "United States" || country == "Liberia" )
    {
        temperature = temperature + "°F" ;
    }
    else
    {
        temperature = ((temperature - 32) * 5 / 9).toFixed(1) + "°C" ;
    }

    return temperature ;
}

let countries = [ "TimBukTu", "United States", "Liberia" ] ;
let temperature ;

for ( country of countries )
{
    let temperature = DetermineTemperature ( country, 100 ) ;
    console.log(country, temperature ) ;
}

// TimBukTu 37.8°C
// United States 100°F
// Liberia 100°F