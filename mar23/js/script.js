function colorSwitch(){
    document.body.style.background = color = "deeppink";
    }

 function getUserName(){
        var first = prompt("first Name?");
        var last = prompt("last Name?");
        var result = first + " " + last;
        document.getElementById('yurr').innerHTML = first + " " + last;
    }
function headSwitch(){
        document.getElementById('yurr').style.fontSize = "100px";
        document.getElementById('yurr').style.color = "aqua";
        }
function link1Switch(){
    document.getElementById('link1').style.color = "yellow";
}
function link2Switch(){
    document.getElementById('link2').style.color = "red";
}

var btn1 =  document.getElementById('btn1');
var btn2 =  document.getElementById('btn2');
var btn3 =  document.getElementById('btn3');
var navigation =  document.getElementById('navigation');
var yurr =  document.getElementById('yurr');
var lorem =  document.getElementById('lorem');
var link1 =  document.getElementById('link1');
var link2 =  document.getElementById('link2');

function verticalSwitch(){
    document.getElementById('btn2').style = "vertical";
}
