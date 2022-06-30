const grid = document.querySelector('.grid');
const color = document.querySelector('.color');

function setupGrid(size) {

  grid.style.setProperty('--size', size);

  for(let i = 0; i < size * size; i++){
    let gridElement = document.createElement('div')
    gridElement.classList.add('gridElement')

    gridElement.addEventListener('mouseover', ()=> {
      gridElement.style.backgroundColor = color.value;
    })
    gridElement.addEventListener('mousedown', ()=> {
      gridElement.style.backgroundColor = color.value;
    })

    grid.appendChild(gridElement);
  }

}

setupGrid(40);