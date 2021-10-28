/**
 * Schelling's Model simulator
 * @ Madison Sanchez-Forman
 */
 
let table = document.getElementById("board");
var dimension = document.querySelector("#dimension");
table.appendChild(makeTable(dimension.value));
dimension.addEventListener("input", function(){
    table.removeChild(table.firstElementChild);
    var newSize = dimension.innerHTML;
    table.appendChild(makeTable(dimension.value));

})
function makeTable() {
    let array = intiArr(dimension.value)
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

function intiArr(size){
     size = dimension.value;
    board = [];
    for(var i = 0; i < size; i++){
        board[i] = [];
        for(var j = 0; j < size; j++){
            board[i][j]=-1 }
         }
    return board; 
}
