const container = document.querySelector(".container");
container.style.backgroundColor = "red";

const p = document.createElement("p")
p.textContent = "HELLO!"
let gridSize

for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div")
    row.classList = "row"
    container.appendChild(row)
    console.log(i + "\n")
    for (let j = 0; j < gridSize; j++) {
        const col = document.createElement("div")
        col.classList = "col"
        row.appendChild(col)
        console.log(j)
    }
}
