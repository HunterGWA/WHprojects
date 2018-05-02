// /**
//  * MATH OBJECT
//  */

//  //INTEGERS - WHOLE NUMBERS
//  //FLOATS - DECIMALS

//  var wha = (.1 * .2);
// //  //0.0200000004
//  var rounded = Math.round(wha);
// // //.49 && below rounds down
// // //.5 && up rounds up

// // //Math.ceil();
// var roundedUp = Math.ceil(0.000000000000001);

// // //Math.floor();
// var roundedDown = Math.floor(0.9999999999999);

// // //Math.PI();
// var pi = Math.PI;

// //Math.pow();
// console.log(Math.pow(8,2) );

// //Math.sqrt();
// console.log(Math.sqrt(64));

// //MAth.random();
// console.log(Math.random() );

//  console.log('.round():'+rounded, 'ceil():'+roundedUp, '.foor():'+roundedDown, 'PI:'+pi);

/**
 * RANDOM NUMBER GENERATOR
 */


//  var rand = Math.random();
//  rand = Math.floor(rand * 11);
//  console.log( rand );

//  function pickANum(){
//      var userNum = prompt('Guess a number between 0 and 10');
//      checkNum(userNum);
//      }
//  pickANum();

//  function pickAnotherNum(){
//     var userNum = prompt('Guess again');
//     checkNum(userNum);
//  }

//  function checkNum(num){
//     if(num < rand){
//         alert(num + ' is too low. Pick again ');
//         pickAnotherNum();1
    

//     }else if(num > rand){
//         alert(num + ' is too high. Pick again ');
//     }
//     else {
//         alert(num + ' is the right number!! You win! ');
//     }
//  }

var userPick = document.getElementById('userPick');
var submitBtn = document.getElementById('submit');
var resetBtn = document.getElementById('reset');
var userPickRes = document.querySelector('h1');


submitBtn.addEventListener('click', getUserPick);
resetBtn.addEventListener('click', getRandNum);

// GLOBAL VARIABLE
var rand;
var attempts = 3;
// var rand = Math.random();
//  rand = Math.floor(rand * 11);


function getRandNum(){
    attempts = 3;
    userPickRes.innerHTML = '';
    userPick.value = '';
    rand = Math.random();
    rand = Math.floor(rand * 11);
 console.log(rand);
 
}
getRandNum();

function getUserPick(){
    attempts = attempts -1;
   var userNum = parseInt(userPick.value);
   checkUserPick(userNum);
   userPick.value = '';
}

function checkUserPick(x){
    if(attempts > 0){
        if(x < rand){
            printUserRes(x + ' is too low. Pick again ');
            // pickAnotherNum();
        
    
        }else if(x > rand){
            printUserRes(x + ' is too high. Pick again ');
        }
        else if(x == rand) {
            printUserRes(x + ' is the right number!! You win! ');
           
        }
    }else{
        printUserRes('game over');
    }
    
         }

function printUserRes(userRes){
    userPickRes.innerHTML = userRes;
}







var randColor;

function getRandColor(){
    rand = Math.random();
    rand = Math.floor(randColor * 360);
    document.body.style.backgroundColor = 'hsl('+ randColor + ', 50%, 50%)';
    console.log(randColor);
}
getRandColor();
console.log(window);
window.addEventListener('mousemove', function(e){
    console.log('x-axis' + e.x, 'y-axis:' + e.y);

})