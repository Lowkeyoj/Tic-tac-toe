const gameboard = document.querySelector('#gameboard');

const matrix = [];

let test = Array.from(gameboard.children);

console.log(test[0].textContent)

row = [test[0],test[1],test[2]];

function textmaker(div){
    return div.textContent
}

function checker(value){
     return textmaker(value) === row[0].textContent;
}