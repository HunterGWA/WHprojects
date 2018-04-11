

// this - context based. look to the left of the dot. 

var btns = document.querySelectorAll('button');



for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(evt){
        // console.log(evt.target);
        // console.log(this);
    });
}


window.addEventListener('click', function(evt){
    console.log(evt.target.nodeName);
    if(evt.target.nodeName == 'BUTTON'){
        // console.log(evt.target);
        // console.log(this);
    }
});



var cars = ['jeep', 'honda', 'jeep', 'subaru'];
var types = ['string', true, 5, [1, 2, 3]];
// console.log(types[3][1]);



var car = {
    type: 'jeep',
    model: 'wrangler',
    color: 'black',
    offroad: true,
    trim: ['sunroof', 'hardtop', '4 wheel drive']
};
// console.log(car.trim);

var myself = {
firstname: 'Hunter',
lastname: 'Ford',
age: '21',
height: '5.7',
hair: 'yes',
haircolor: 'brown',
facialhair: true,
facialhaircolor: 'brown',
greeting: function(msg){
    // console.log(this.firstname);
    // console.log(msg + this.firstname);
    }
}
// console.log(myself.age);
myself.middlename = 'Abinadi';
// console.log(myself);

myself.greeting("Hey there!");

myself.firstname = "Bruce";

myself.greeting("I'm now");

function Person(first, last, age, eye){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
    this.greeting = function(msg){
        // console.log(msg + this.firstname);
    }
}
var myDad = new Person('Andrew', 'Ford', 50, 'brown' );
// console.log(myDad);

var myMom = new Person('Christina', 'Marolf', 50, 'black' );
// console.log(myMom);

var myBro = new Person('hector', 'Zavala', 20, 'black' );
// console.log(myBro);

myBro.greeting("Hello");

//user name
//email
//password

var form = document.querySelector('form');
console.log(form.elements.value);



var users = [];
var user = 0;

function Account(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
    this.greeting = function(msg){
        // console.log(msg + this.username);
    };
    
}

var info = new Account('Spoopy', 'spoopy@spoop.spoop', 'spup');
// console.log(info);
info.greeting("Hello ");

var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    users.push('user'+ user);
    user++;
    for(var i = 0; i < form.elements.length - 1; i++){
        
        console.log(form.elements[i].value);
    }
    users[user] = new UserAcc();
});
