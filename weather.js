navigator.geolocation.watchPosition(gotPosition)
var currentWeather;

function gotPosition(position) 
{   
    getTheWeather(position)
}

var APIKey = 'a120aa36dac8f8043805f63a51019310'

function getTheWeather(position)
{
    var URL = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&APPID=' + APIKey
    console.log(URL)

    $.ajax(
    {
        dataType: "jsonp",
        url: URL,
        success: handleData
    })
}

function handleData(json)
{
    console.log(json)

    var weather = json.weather[0]
        
    var weatherid = weather.id
    //    new Number(weatherid)  
    console.log(weatherid)

    console.log(currentWeather)
switch(weatherid) {
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
        case 711:
        case 731:
        case 771:
        case 751:
        case 761:
        case 762:
        case 771:
        case 781:
        case 900:
        case 901:
        case 902:
        case 957:
        case 958:
        case 959:
        case 960:
        case 961:
        case 962:
            console.log ("Stormy");
            currentWeather = 'storm' 
            break;
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 522:
        case 531:
        case 701:
        case 906:
            console.log ("Raining");
            currentWeather = 'rain' 
            break;
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            console.log ("Snowy");
            currentWeather = 'snow' 
            break;
        case 800:
        case 801:
        case 951:
        case 952:
        case 953:
        case 954:
        case 955:
        case 956:
        case 721:
            console.log ("Sunny");
            currentWeather = 'sun' 
            break;
        case 300:
        case 741:
        case 802:
        case 803:
        case 804:
        case 521:
            console.log ("Cloudy");
            currentWeather = 'cloud'
            break;
        case 904:
            console.log ("Hot day");
            currentWeather = 'hot_day'
            break;
        case 903:
        case 905:
            console.log ("Cold day");
            currentWeather = 'cold_day'
            
}}
