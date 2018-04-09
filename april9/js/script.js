// function welcomeMsg(str){
//     // console.log(str);
//     return "Welcome " + str;
// }


// // consoleInfo('Hunter');
// console.log( welcomeMsg ('Hunter') );

// function calcNums(x,y){
//     // console.log(x+y);
//     return x + y;
// }

// console.log( calcNums(3,2) );

// var h3 = document.querySelector('h3');
// var user = document.querySelector('#user');


// function concatStrings(str1, str2){
//     return str1 + " " + str2;
// }

// function getFirstname(){
//     return prompt('What is your first name?');
// }

// function getLastname(){
//     return prompt('What is your last name?');
// }


// user.textContent = concatStrings ( getFirstname(), getLastname() );

// // function welcomeUser(){
// //     h3.innerHTML = concatStrings( getFirstname(), getLastname() );
// // }

// // welcomeUser();



var spans = document.querySelectorAll('span');
console.log(spans.length);

var occupations = ['janitor', 'teacher', 'developer', 'plumber', 'cashier', 'bus driver'];

var plurals = ['fish', 'monkeys', 'shoes', 'cacti'];

var adj = ['colorful', 'handsome', 'beautiful'];

var verb = ['smacked', 'destroyed', 'punched'];

var liquid = ['water', 'soda', 'beer'];

var famous = ['Stev-o', 'Donald Trump', 'Obama'];

var place = ['Tilted Towers', 'Dusty Depot', 'Snobby Shores'];

var noun = ['Iphone', 'laptop', 'ps4'];

var nationality = ['German', 'American', 'Polish'];

var female = ['Hannah Montanna', 'iCarly', 'Bella Thorne'];

var friend = ['Kaitlyn', 'Arcie', "Sam"];

var number = ['12', '21', '1221'];

for(var i = 0; i < spans.length; i++){
    // console.log(spans[i].className);
    // if(spans[i].className == 'plural'){
        
    // }
                            //switch statement
    switch(spans[i].className){
       case 'occupation':
           spans[i].textContent = occupations[getRandNum( occupations.length )]; 
            break; 
       case 'plural':
          spans[i].textContent = plurals[getRandNum( plurals.length )];     break;
        case 'adj':
            spans[i].textContent = adj[getRandNum( adj.length )];
             break;
            case 'verb':
            spans[i].textContent = verb[getRandNum( verb.length )];
            break;
            case 'liquid':
            spans[i].textContent = liquid[getRandNum( liquid.length )];
            break;
            case 'famous':
            spans[i].textContent = famous[getRandNum( famous.length )];
            break;
            case 'place':
            spans[i].textContent = place[getRandNum( place.length )];
            break;
            case 'noun':
            spans[i].textContent = noun[getRandNum( noun.length )];
            break;
            case 'nationality':
            spans[i].textContent = nationality[getRandNum( nationality.length )];
            break;
            case 'female':
            spans[i].textContent = female[getRandNum( female.length )];
            break;
            case 'friend':
            spans[i].textContent = friend[getRandNum( friend.length )];
            break;
            case 'number':
            spans[i].textContent = number[getRandNum( number.length )];
            break;

        default:
           
    }


}

function getRandNum(num){
   return Math.floor(Math.random() * num);
}