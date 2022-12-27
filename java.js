const gameboard = document.querySelector('#gameboard');


/* const gamplay = (function(){
 
 const player = {player1: 'x', player2: '0',}
 const toText = function(div){
    div.addEventListener('click',function(){ div.textContent = player.player1;
    
    document.querySelector(`[data = "${Math.floor(Math.random() * 10)}"]`).textContent = player.player2 });
    
    return div.textContent};
 const matrix = Array.from(gameboard.children).map(toText);
  
 return{matrix,player}
}
)(); */
 
(function me(){const test = document.querySelector(`[data = "${Math.floor(Math.random() * 10)}"]`);
 if(test){ return console.log(test)};
  return me();  })()

