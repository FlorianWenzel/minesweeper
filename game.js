let bombs = 10;
let width = 6;
let height = 6;
let field = [];
let htmlField = document.getElementById('field');

let { ipcRenderer } = require('electron') //“ipcMain” should be use here


ipcRenderer.send('resize-me-please', {width: width, height: height});

for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
        htmlField.innerHTML += `<div id="x${x}y${y}" class="field unknown" onclick="open(${x},${y})"></div>`
    }
}

function open(x,y){
    console.log(x)
    console.log(y)
    if(field[x][y]){
        alert('boom')
    }else{
        document.getElementById(`x${x}y${y}`).classList.remove('unknown');
        document.getElementById(`x${x}y${y}`).classList.add('empty')
    }
}

//generate board
for(let x = 0; x < width; x++){
    field[x] = [];
    for(let y = 0; y < height; y++){
        field[x][y]= 0;
    }
}

//hide bombs
for(let i = 0; i < bombs; i++){
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * width);
    if(field[x][y] === 1){
        i--;
        continue;
    }
    field[x][y] = 1;
}
console.log(field);
