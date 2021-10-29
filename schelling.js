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
var random = document.querySelector("#randomize");
/******************************************************************************/                                                                     
var d = dimension.value, total = d * d, numVacant = Math.round(total * vacant.value);
var remaining = total - numVacant, numPop1 = remaining * popRatio.value, numPop2 = numPop1;
var population1 = [], population2 = []; vacancies = [];
/******************************************************************************/
let mainTable = makeTable(color1.value, color2.value);
table.appendChild(mainTable);  
dimension.addEventListener("input", function(){
  updateBoard();
});
vacant.addEventListener("input",function(){
    updateBoard();
});
popRatio.addEventListener("input",function(){
    updateBoard;
});
color1.addEventListener("input", function(){
    updateBoard();
    makeTable(color1.value, color2.value);
});
color2.addEventListener("input", function(){
    updateBoard();
    makeTable(color1.value, color2.value);
});
random.addEventListener("click", function(){
    randomize();
});


function initArr(){
   size = dimension.value;
   board = [];
   for(var i = 0; i < size; i++){
       board[i] = [];
       for(var j = 0; j < size; j++){
           board[i][j]= Math.floor(Math.random() *3);  
        } 
        }
   return board; 
}
function updateBoard(){
    table.removeChild(table.firstElementChild);                                 // if value changed, remove old child and add new one
    table.appendChild(makeTable());
    numVacant = getVacant();
    numPop1 = getPop1();
    numPop2 = getPop2();
}
function makeTable(c1, c2, arr) {
    let array = initArr();
    var table = document.createElement('table');
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < array[i].length; j++) {
            var cell = document.createElement('td');
            row.appendChild(cell);
            if(array[i][j] == 0){
                cell.style.backgroundColor = "#ffff";
            } else if (array[i][j] == 1){
                cell.style.backgroundColor = color1.value;
            } else if (array[i][j]== 2){
                cell.style.backgroundColor = color2.value;
            }
        }
        table.appendChild(row);
    }
    
    return table;
}
function getVacant(){
    let t = dimension.value * dimension.value;
    let result = Math.round(t * vacant.value);
    for(let i = 0; i < result; i++){
        vacancies.push(0);
     }
    return result;
}
function getPop1(){
 let  t = dimension.value * dimension.value, r = popRatio.value, v = getVacant();
 let remaining = t - v;
 let result = Math.round(remaining * r);
 for(let i = 0; i < result; i++){
    population1.push(1);
 }
 return result;
}
function getPop2(){
    let t = dimension.value * dimension.value, pop1 = getPop1();
    let result = Math.round(t-pop1);
    for(let i = 0; i < result; i++){
        population2.push(2);
     }
    return result;
}
function randomize(){
    let newArr = initArr();
    updateBoard();
    makeTable(color1.value, color2.value, newArr);

}
