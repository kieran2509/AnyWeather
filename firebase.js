var database = firebase.database();
var placesDatabase = database.ref('places');
var placesList = [];
on('child_added', doSomething);
placesDatabase.on('child_added', function( firebaseObject ) 
{
    var place = firebaseObject.val(); 
    placesList.push(person);
    // "push" is JavaScript's lingo for "add to a list"
})

console.log("placeslist")