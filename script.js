const container = document.querySelector(".container");
container.style.backgroundColor = "red";

const p = document.createElement("p")
p.textContent = "HELLO!"
let gridSize=4;
const row = document.createElement("div")
const col = document.createElement("div")
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

