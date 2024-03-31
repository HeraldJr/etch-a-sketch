const container = document.createElement("div")
container.classList="container"
const body=document.querySelector("body")
body.appendChild(container)

const btnResetGrid=document.querySelector("#btnGridReset")
btnResetGrid.classList="btnGridReset"


function createGrid(gridSize=8){
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div")
        container.appendChild(row)
        row.classList = "row"
        
        for (let j = 0; j < gridSize; j++) {
            const col = document.createElement("div")
            col.classList = "col"
            row.appendChild(col)
            col.addEventListener("mouseover", ()=>{
                col.style.backgroundColor="cyan"
            })
        }
    }
}

function resetGrid(){
    container.innerHTML='';
}

btnResetGrid.addEventListener("click", ()=>{
    let size=prompt("Enter squares per side for the new grid");
    resetGrid();
    createGrid(size);
})







