const grid = document.querySelector('.grid');
const color = document.querySelector('.color');
let sizeV = document.querySelector('.sizeValue');
let size = sizeV.value;
const reset = document.querySelector('.reset');

let draw = false;

function setupGrid(size) {

  grid.style.setProperty('--size', size);

  for(let i = 0; i < size * size; i++){
    let gridElement = document.createElement('div')
    gridElement.classList.add('gridElement')


    gridElement.addEventListener('mousedown', ()=> {
      gridElement.style.backgroundColor = color.value;
    })
    gridElement.addEventListener('mouseover', ()=> {
      if(!draw) return
      gridElement.style.backgroundColor = color.value;
    })
    

    grid.appendChild(gridElement);
  }
}

window.addEventListener('mousedown', ()=>{
  draw = true
})

window.addEventListener('mouseup', ()=>{
  draw = false
})

sizeV.addEventListener('change', ()=>{
  size = sizeV.value;
  grid.innerHTML = '';
  setupGrid(size);
})

reset.addEventListener('click', ()=>{
  grid.innerHTML = '';
  setupGrid(size);
})

setupGrid(size);