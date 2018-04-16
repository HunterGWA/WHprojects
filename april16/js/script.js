// var theDate = new Date();
// console.log(theDate);
// console.log(theDate.getDate());
// console.log(theDate.getDay());
// console.log(theDate.getFullYear());
// console.log(theDate.getMonth());


// console.log(theDate.toLocaleString('en-us', {month: 'long'}));


// var myBday = new Date(1996, 09, 01);


// var dateStr = `
//     Today's date is the ${theDate.getDate()}th of ${theDate.toLocaleString('en-us', {month: 'long'})} ${theDate.getFullYear()}
// `;



// var bdayStr = `
// ${myBday.toLocaleString('en-us', {month: '2-digit'})}/
// ${myBday.toLocaleString('en-us', {day: '2-digit'})}/
// ${myBday.toLocaleString('en-us', {year: '2-digit'})}
// `;

// document.body.textContent = bdayStr;

// var theTime = new Date();


// var timeStr = `
// ${theTime.toLocaleString('en-us', {hour: '2-digit'})}:
// ${theTime.toLocaleString('en-us', {minute: '2-digit'})}:
// ${theTime.toLocaleString('en-us', {second: '2-digit'})}
// `;
// document.body.textContent = timeStr;

// HH:MM:SS

var stopBtn = document.querySelector('button');

stopBtn.addEventListener('click', function(){
    clearInterval(myTimer);
});
var myTimer = setInterval(updateTimer, 1000);


function updateTimer(){
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute:'2-digit', second: '2-digit'})}
    `;
    document.querySelector('h3').textContent = timeStr;
}

var myDelay = setTimeout(hiliteBg, 5000);
function hiliteBg(){
    document.body.classList.add('hilite');
}

function updateTimer(){
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute:'2-digit', second: '2-digit'})}
    `;
    document.querySelector('h3').textContent = timeStr;
}



