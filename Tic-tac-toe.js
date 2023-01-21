const Gameboard = (() => {
    const board = Array.from(document.querySelector('#gameboard').children);
    let grid = Array.from(gameboard.children).map((div) => div.textContent);
    let storage = [];


    const update = () => {
        if (storage.includes(grid)) {
            storage.splice(0, 1);
            grid = Array.from(gameboard.children).map((div) => div.textContent);
            storage.unshift(grid);
        }
        else storage.unshift(grid);
    }



    var display;
    return {storage, grid, update, board };
})();


class Player {
    constructor(Player) {
        this.Player = Player
    };

    static newPlayer(P) { return Gameplay.selector(new Player(P).Player) }
};






const Gameplay = (() => {
    const selector = (Player) => {
        Gameboard.board.forEach((element, index) => {
            element.addEventListener('click', () => {
                Gameboard.board[index].textContent = Player;
                computer('O')
                Gameboard.update();
                checkWinner(Player,'O')
            });
        });
    };

    const computer = function(P){
        const computerChoice = document.querySelector(`[data = "${Math.floor(Math.random() * 10)}"]`);
        computerChoice.textContent = P
    }
    
    const checkMatrix = function(matrix,Player,SPlayer){
        if(matrix.every((letter) => letter === Player)){
            console.log(`This PLayer ${Player} has won`)
        }else if(matrix.every((letter) => letter === SPlayer)){
            console.log(`This Player ${SPlayer} has won`)
        }
    }
    
    
    const checkWinner = (Player,SPlayer) => {
        let matrix = [Gameboard.storage[0].slice(0,3),Gameboard.storage[0].slice(3,6),Gameboard.storage[0].slice(6)];
        let colums = [[matrix[0][0],matrix[1][0],matrix[2][0]],[matrix[0][1],matrix[1][1],matrix[2][1]],[matrix[0][2],matrix[1][2],matrix[2][2]]]
        let crosswise = [[matrix[0][0],matrix[1][1],matrix[2][2]],[matrix[0][2],matrix[1][1],matrix[2][0]]];
            
            for(let k = 0; k < 2; k++){
                checkMatrix(crosswise[k],Player,SPlayer);
            }           

            for(let i = 0; i < 3; i++){
                checkMatrix(matrix[i],Player,SPlayer);
                checkMatrix(colums[i],Player,SPlayer);
            }
    
    }
    return { selector,computer }
})()



         
      
        
         