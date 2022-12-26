const gameboard = document.querySelector('#gameboard');


const gamplay = (function(){
 const player = {player1: 'x', player2: '0',}
 const toText = function(div){
    div.addEventListener('click',() => div.textContent 
    = `${player.player1}` || `${player.player2}`);
    
    return div.textContent};
 const matrix = Array.from(gameboard.children).map(toText);
  
 return{matrix,player}
}
)();
 


