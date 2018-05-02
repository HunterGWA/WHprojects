var searchBox = document.querySelector('header input');
searchBox.addEventListener('keypress', function(evt){
    console.log(evt.key);
});

var userSearch = '';

function getUserSearch(evt){
    if(evt.key !== 'undefined' &&
    evt.key !== 'Backspace' &&
    evt.key !== 'Tab'
)
     userSearch += evt.key;
    console.log(userSearch);
}






function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onlaod = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
        }else{
            console.log('error', req.statusText);
        }
    }
    req.send(null);
}

var cardList = document.querySelector('main ul');

function cardListData(cards){
    for(var i = 0; i < cards.length; i++){
        var card = `
        <li>
            <img src="${cards.results[i].image}" alt="${cards.results[i].name}">
            <h3>${cards.results[i].name}</h3>
            </li>
          `;
        cardList.innerHTML += card;
    }
}

getReq('https://rickandmortyapi.com/api/character', cardListData);


function getCharacter(searchStr){
    var req = new XMLHttpRequest();
    req.open('GET', url);    
    getReq('https://rickandmortyapi.com/api/character', characterData);
    req.open('GET', url);
    req.onlaod = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
        }else{
            console.log('error', req.statusText);
        }
    }
    req.send(null);








}


