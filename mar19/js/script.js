document.getElementById('btn2').style.color = "red";

// console.log("Here is my first comsole message");
// console.info("This is info");
// console.warn("Danger Will Robinson");
// console.error("Uh Uh Uh Uh. You didnt say the magic word");

// Browser Alert Box
// alert('Here is my popup.');

// Browser Confirm boX
// var userResult = confirm("Did you remember to lock your car?");
// console.log(userResult)


// Broswer Prompt Box
// var userName = prompt("What is your name?");
// console.log(userName);


/* 
variables
    Must start with a lowercase
    Must start with a letter.
    Can contain uncerscore.
    May use camelCasing.
    */

var username;
var user_name;
var room1;
var userName;
var theUsersFirstNameOnly;


var age = 21;
var decade = 10;
var double = 2;
var divide = 4;
var newAge = ( (age + decade) * double) / divide;

// PEMDAS matters!


console.log(newAge);

// Concatination
// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// alert(firstName + " " + lastName)

/* String Interpolation
`${ variable}`
*/
// alert(`${firstName} ${lastName}`);

// Prompt user for
// the make of a vehicle
// the year
// the color
// alert the result

// 3 new variables
// formating: color, year make.


function getUserVehicle(){
    var make = prompt("What make is your car?");
    var year = prompt("What year is your car?");
    var color = prompt("What color is your car?");
    var result = color + ", " + year + " " +
    make + ". ";
    alert(result);
}

function primaryUser(){
var first = prompt("What is yor first name");
var last = prompt("What is your last name");
var place = prompt("Where were you born?");


document.getElementById('primaryUser').innerHTML = first + " " + last + ", born in " + place;




}
function secondaryUser(){
    var drink = prompt("Whatis your favorite drink?");
    var food = prompt("What is your favorite food?");
    var place = prompt("Where is your favorite place?");
    
    
    document.getElementById('secondaryUser').innerHTML = drink + " " + food + " " + place;
    
    
    
    
    }
    function thirdUser(){
        var team = prompt("What is yor favorite sports team?");
        var number = prompt("What is your favorite number?");
        var sport = prompt("What is your favorite sport?");
        
        
        document.getElementById('thirdUser').innerHTML = team + " " + number + " " + sport;
        
        
        
        
        }
function fourthUser(){
    var fastfood = prompt("Favorite fast food place?");
    var last = prompt("Last time you had it?");
    var money = prompt("Are you broke?");
    
    
    document.getElementById('fourthUser').innerHTML = fastfood + " " + last + " " + money;
    
    }