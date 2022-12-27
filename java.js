const gameboard = document.querySelector('#gameboard');


 const gamplay = (function(){
 const update = function(){ let newMatrix = Array.from(document.querySelector('#gameboard').children);
   function toText2(div){ return div.textContent};
   newMatrix = newMatrix.map(toText2);
   return newMatrix; }
 const player = {player1: 'x', player2: '0',}
 const toText = function(div){
    
    div.addEventListener('click',function(){ 
        if((div.textContent === player.player1) || (div.textContent === player.player2)){
            return;
        }
        
        div.textContent = player.player1;
        
        const computer = function(){const computerchoice = document.querySelector(`[data = "${Math.floor(Math.random() * 10)}"]`);
        
        if(!computerchoice){return computer();};
        if(computerchoice === div){
            return computer();
        };if(computerchoice.textContent === player.player1){
            return computer();
        };
        if(computerchoice.textContent === player.player2){return computer()};
        
        console.log(computerchoice);  
        return computerchoice.textContent = player.player2 }
        
         computer(); 
    return update();
    });
    
    return div.textContent};
 const matrix = Array.from(gameboard.children).map(toText);
  
 return{matrix,player,update}
}
)(); 
 

const checkWinner = (function(){
    



})

