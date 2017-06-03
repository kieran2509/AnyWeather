navigator.geolocation.watchPosition(gotPosition)

var APIKey = 'ea549adf416040caa38e5e62cacbf798'

function gotPosition(position) 
{   
    getTheWeather(position)
}

function getTheWeather(position)
{
    var URL = 'https://api.darksky.net/forecast/'+APIKey+'/'+position.coords.latitude+','+position.coords.longitude
    console.log(URL)

    $.ajax(
    {
        dataType: "jsonp",
        url: URL,
        success: handleData
    })
}

var currentWeather = 'rain';
var weather;
var weatherid;
function handleData(json)
{
    console.log(json)

    weather = json.currently.icon
    console.log(weather)    

    window.weatherid = weather
    //    new Number(weatherid)  
    console.log(weatherid)

console.log(weatherid)

switch(weatherid) {
        case 'hail':
        case 'tornado':
        case 'thunderstorm':
        case 'wind':
            console.log ("Stormy");
            currentWeather = 'storm' 
            break;
        case 'rain':
            console.log ("Raining");
            currentWeather = 'rain' 
            break;
        case 'snow':
        case 'sleet':
            console.log ("Snowy");
            currentWeather = 'snow' 
            break;
        case 'clear-day':
        case 'clear-night':
            console.log ("Sunny");
            currentWeather = 'sun';
            console.log(currentWeather)
            break;
        case 'fog':
        case 'cloudy':
        case 'partly-cloudy-day':
        case 'partly-cloudy-night':
            console.log ("Cloudy");
            currentWeather = 'cloud'
            break;
}
var event = new Event('weatherLoaded');
    window.dispatchEvent(event);
}

