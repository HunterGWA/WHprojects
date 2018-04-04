// function getUserName(){
//     var username = prompt('What is your full name?').split(" ");
//     // var splitUsername = username.split(" ");
//     // console.log(username)
//     outputUsername(username);
    
// }

// getUserName();



// function outputUserName(nameArray){
//     // document.getElementById('firstname').innerHTML = nameArray[0]
//     // // nameArray ['Hunter', 'Ford'].length = 2 - 1
//     // document.getElementById('lastname').innerHTML = nameArray[nameArray.length - 1];
//     for(var i = 0; i < nameArray.length; i++){
//         if(i == 0 || i == nameArray.length - 1){
//                 document.getElementById('firstname').innerhtml += nameArray[i] + " ";
//         }

//     }
    
// }
// var stuff = ["Nissan", "Subaru", "Honda"];
// console.log(stuff[1]);
// console.log(stuff.length);
// stuff.push("bmw");
// console.log(stuff)
// stuff.pop();
// console.log(stuff);

// var removedCar = stuff.pop();
// console.log(stuff);
// console.log(removedCar);

// stuff.unshift("chevy", "chrysler");
// console.log(stuff);
// stuff.shift();
// console.log(stuff)



// stuff.splice(1, 1, "red", "green");
// console.log(stuff);


// stuff.splice(1, 1, "grape", "kiwi", "apple", "carrot");
// console.log(stuff);

// stuff.splice(2,1);
// console.log(stuff)



// stuff.slice(4);
// var removed = stuff.slice(2,6);
// console.log(stuff);
// console.log(removed);


// var movies = ["Tenacious D", "Black Panther", "Justice League","The Interview", "Silent Hill"];
// console.log(movies)
// movies.unshift("Die Hard");
// console.log(movies);
// movies.splice(2, 1, "Godfather I");
// movies.splice(3, 1, "Godfather II");
// console.log(movies);
// movies.push("Guardians of the Galaxy")
// console.log(movies);


// var movies2 = ["Tenacious D", "Black Panther", "Justice League","The Interview", "Silent Hill"];
// console.log(movies2)
// movies2.splice(0, 1,);
// console.log(movies2);
// var removedMovie = movies2.slice(2,3);
// console.log(removedMovie);

// function getUserAge(){
//     var userage = parseInt(prompt('how old are you?'));
//         if(userage < 21){
//             console.log('NOT OLD ENOUGH');

//     }else if(userage == 21){
//         console.log('GOOD TO GO');
//     }else{
//         console.log('plenty old');
//     }

// }
// getUserAge();

// function getAge(){
//     var age = prompt('whats my age again?');
//     (age >= 21) ? console.log('true') : console.log 
//     ('false');
// }
// getAge();







function getUserAge(){
    var userage = parseInt(prompt('Are you a boy ar girl?'));
        if(userage == boy){
            console.log('boy');

    }else if(userage == 21){
        console.log('GOOD TO GO');
    }else{
        console.log('plenty old');
    }

}
getUserAge();

function getAge(){
    var age = prompt('whats my age again?');
    (age >= 21) ? console.log('true') : console.log 
    ('false');
}
getAge();