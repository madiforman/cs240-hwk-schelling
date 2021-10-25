/**
 * Schelling's Model simulator
 * @ Madison Sanchez-Forman
 */
 
 var dimension = document.querySelector("#dimension");
 var threshold = document.querySelector("#threshold");
 var vacant = document.querySelector("#vacantRatio");
 var split = document.querySelector("#popRatio");

let size = dimension.value;
function intiArr(){
    board = [];
    for(var i = 0; i < size; i++){
        board[i] = [];
        for(var j = 0; j < size; j++){
            board[i][j]=-1
        }
    }
    return board;
}
let arr = intiArr()
function makeTableTwo(array) {
    var table = document.createElement('table');
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
        row.style.backgroundColor = "#ffff"
        for (var j = 0; j < array[i].length; j++) {
            var cell = document.createElement('td');
            row.appendChild(cell);
            cell.style.backgroundColor = "#ffff"
        }
        table.appendChild(row);
    }
    return table;
}
let table = document.getElementById("board");
let t = makeTableTwo(arr);
document.getElementById("board").outerHTML = t.outerHTML;
