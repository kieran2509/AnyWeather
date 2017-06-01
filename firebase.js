// Set the configuration for your app
var config = {
    apiKey: "AIzaSyBfE5qZxZAHkIWhH74stHtEeAWhxRI5kpE",
    authDomain: "anyweather-1488361407151.firebaseapp.com",
    databaseURL: "https://anyweather-1488361407151.firebaseio.com",
    storageBucket: "anyweather-1488361407151.appspot.com",
    messagingSenderId: "245633944947"
};
firebase.initializeApp(config);

// Get a reference to the database service
database = firebase.database();

// create an array to store all the locations
var locations = [];

var ref = database.ref('people');
ref.once('value', function(list) 
{
  list.forEach(function(listItem) 
  {
    var location = listItem.val();
    // push the location to the locations array
    locations.push(location);
  });
}).then(function()       
{
    console.log('locations loaded on firebase.js!')
    var event = new Event('locationsLoaded');
    window.dispatchEvent(event);
});