function setUpCanvas(count) {
  let totalCell =  Math.pow(count,2);
  let cellSize = width/count;
  console.log("cell size:"+cellSize);
  for (let index = 0; index <totalCell; index++) {
    const element = document.createElement("div");
    element.style.width = `${cellSize}px`;
    element.style.height = `${cellSize}px`;
    element.style.backgroundColor = "white";
    
    element.classList.add("cell");
    gridDiv.appendChild(element);
  }
  gridDiv.childNodes.forEach(cell => {
    cell.addEventListener('mouseover',() => {
      cell.style.backgroundColor = color;
    })
  });
}

  

  
function clearGrid() {
  
  if (gridDiv.childElementCount> 0) {
    
    while (gridDiv.childElementCount>0) {
      
      gridDiv.removeChild(gridDiv.lastChild);
    }
  }
  
}





const gridDiv = document.querySelector("#grid");
const clearBtn = document.querySelector("#clear");
const pixelSizeP= document.querySelector("#pixel-size-label");
const colorPicker = document.querySelector("#color");

let width = gridDiv.clientWidth;
let height = gridDiv.clientHeight;
let color = "black";
let tempColor="white";
let eraseColor="white";
let isEraseMod=false;
let pixelSize = 8;
let pixelMultiplier = 2;




setUpCanvas(pixelSize);


colorPicker.addEventListener('input',()=>{
    color = colorPicker.value;
    isEraseMod=false;
});

clearBtn.addEventListener('click',()=>{
   gridDiv.childNodes.forEach(cell => {
     cell.style.backgroundColor = "white";
   });
});

document.addEventListener('keydown',(e)=>{
  if (e.key =='e' && isEraseMod == false) {
     tempColor = color; 
     color=eraseColor; 
     isEraseMod = true;
  } 
});


document.addEventListener('keydown',(e)=>{
  if (e.key =='d' && isEraseMod == true) {
     isEraseMod = false;
     color = tempColor;

  }
});

document.addEventListener('keydown',(e)=>{
  if (e.key =='i') {
    
     pixelSize=pixelSize*pixelMultiplier;
     clearGrid();
     setUpCanvas(pixelSize);
    
  }
});

document.addEventListener('keydown',(e)=>{
  if (e.key =='z' && pixelMultiplier>1) {
    if(pixelSize>8){
    pixelSize=pixelSize/pixelMultiplier;
    clearGrid();
    setUpCanvas(pixelSize);
    }
  }
});


