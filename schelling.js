/**
 * Schelling's Model simulator
 * @ Madison Sanchez-Forman
 */
 
var table = document.getElementById("board");
var dimension = document.querySelector("#dimension");
var similarity = document.querySelector("#threshold");
var vacant = document.querySelector("#vacantRatio");
var popRatio = document.querySelector("#popRatio");
var color1 = document.querySelector("#popXcolor");
var color2 = document.querySelector("#popYcolor");
/******************************************************************************/                                                                     
var d = dimension.value, total = d * d, numVacant = Math.round(total * vacant.value);
var remaining = total - numVacant, numPop1 = remaining * popRatio.value, numPop2 = numPop1;
/******************************************************************************/
table.appendChild(makeTable(d));  

dimension.addEventListener("input", function(){
  updateBoard();
   //console.log(numVacant);

});
vacant.addEventListener("input",function(){
 updateBoard();
});
popRatio.addEventListener("input",function(){
    updateBoard;
    //console.log("number of pop 1: " + numPop1);
   // console.log("number of pop 2: " + numPop2);
});
color1.addEventListener("input", function(){

});
function updateBoard(){
    table.removeChild(table.firstElementChild);                                 // if value changed, remove old child and add new one
    table.appendChild(makeTable());
    numVacant = getVacant();
    numPop1 = getPop1();
    numPop2 = getPop2();
    console.log(numPop1);
    console.log(numPop1);

}
function makeTable() {
    let array = initArr();
    var table = document.createElement('table');
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
        row.style.backgroundColor = "#ffff";
        for (var j = 0; j < array[i].length; j++) {
            var cell = document.createElement('td');
            row.appendChild(cell);
            cell.style.backgroundColor = "#ffff";
        }
        table.appendChild(row);
    }
    return table;
}
function initArr(){
     size = dimension.value;
    board = [];
    for(var i = 0; i < size; i++){
        board[i] = [];
        for(var j = 0; j < size; j++){
            board[i][j]= Math.floor(Math.random() *3);
         }
         }
    console.log(board);
    return board; 
}
function getVacant(){
    let t = dimension.value * dimension.value;
    let result = t * vacant.value;
    return Math.round(result);
}
function getPop1(){
 let  t = dimension.value * dimension.value, r = popRatio.value, v = getVacant();
 let remaining = t - v;
 let result = Math.round(remaining * r);
 return result;
}
function getPop2(){
    let t = dimension.value * dimension.value, pop1 = getPop1();
    let result = Math.round(t-pop1);
    return result;
}
