/**
 * Schelling's Model simulator
 * @ Madison Sanchez-Forman
 */
 
var table = document.getElementById("board"), dimension = document.querySelector("#dimension"),
similarity = document.querySelector("#threshold"), vacant = document.querySelector("#vacantRatio"),
popRatio = document.querySelector("#popRatio"), color1 = document.querySelector("#popXcolor"),
color2 = document.querySelector("#popYcolor"), random = document.querySelector("#randomize"), 
run = document.querySelector("#runstop");
/******************************************************************************/                                                                     
var d = dimension.value, total = d * d, numVacant = Math.round(total * vacant.value);
var remaining = total - numVacant, numPop1 = remaining * popRatio.value, numPop2 = numPop1;
var cells = []; 
/******************************************************************************/
let mainTable = makeTable(color1.value, color2.value);
table.appendChild(mainTable);  
updateBoard();
/******************************************************************************/
dimension.addEventListener("input", function(){
  updateBoard();
});
vacant.addEventListener("input",function(){
    updateBoard();
});
popRatio.addEventListener("input",function(){
    updateBoard;
    makeTable();
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
run.addEventListener("click", function(){
run.innerHTML = "Stop!"
var generations = 0;
let array = initArr();
makeHappy();
document.querySelector("p").innerHTML="Generations: " +  generations++;
})
/******************************************************************************/
function initArr(){
   let size = dimension.value, total = size * size;
   let board = [];
   let cells = [];
   for(let i = 0; i < getVacant(); i++){cells.push(0)};
   for(let i = 0; i < getPop1(); i++){cells.push(1)};
   for(let i = 0; i < getPop2(); i++){cells.push(2)};
   for(var i = 0; i < size; i++){
       board[i] = [];
       for(var j = 0; j < size; j++){
           board[i][j]= cells[Math.floor(Math.random() * cells.length)]}}
   return board; 
}
function updateBoard(){
    numVacant = getVacant();
    numPop1 = getPop1();
    numPop2 = getPop2();
    table.removeChild(table.firstElementChild);                                 // if value changed, remove old child and add new one
    table.appendChild(makeTable());

}
function makeTable(c1, c2, arr) {
    array = initArr();
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
    return result;
}
function getPop1(){
 let  t = dimension.value * dimension.value, r = popRatio.value, v = getVacant();
 let remaining = t - v;
 let result = Math.round(remaining * r);
 return result;
}
function getPop2(){
    let t = (dimension.value * dimension.value)-getVacant(), pop1 = getPop1();
    let result = Math.round(t-pop1);
    return result;
}
function randomize(){
    let newArr = initArr();
    updateBoard();
    makeTable(color1.value, color2.value, newArr);

}
/******************************************************************************/
function makeHappy(){
    var i, j;
    do{
        i = Math.floor(Math.random()*(dimension.value - 1));
        j = Math.floor(Math.random()*(dimension.value - 1))
    } while(array[i][j]==0)
    var currentPop = array[i][j];
    while(isHappy(i,j) == false){
        array[i][j] = 0;
            array[i][j] == currentPop;
            updateBoard();
            makeTable(color1.value, color2.value);
            
        
    }
}
function isHappy(x,y){
var currentPop = array[x][y];
var amnt1 = countNeighborsPop1(x,y);
var amnt2 = countNeighborsPop2(x,y);
var percent1 = amnt1 / (amnt1 + amnt2);
var percent2 = amnt2 / (amnt1 + amnt2);
if(currentPop == "1" && percent1 < similarity.value || currentPop == "2" && percent2 < similarity.value){
    return true;
} else {return false;}
}

function countNeighborsPop1(x,y){
    var currentPop = array[x][y];
    var count1 = 0;
    for(let i = x - 1; i <= x + 1; i++){
        for(let j = y -1; j <= y+1; j++){
            if(i == x && j == y) {
                continue; }
            if(array[validIndex(i)][validIndex(j)] == 1) {
                count1++;
            }   
        }   
        }
        return count1;
     }
function countNeighborsPop2(x,y){
    var currentPop = array[x][y];
    var count2 = 0;
    for(let i = x - 1; i <= x + 1; i++){
        for(let j = y -1; j <= y+1; j++){
            if(i == x && j == y) {
                continue; }
            if(array[validIndex(i)][validIndex(j)] == 2) {
                count2++;
            }   }   
        }
        return count2;

}

function validIndex(indx){
    var result = indx;
    if (indx < 0){
        result = indx + d; }
    if (indx >= d) {
        result = indx - d
    }
    return indx;
}