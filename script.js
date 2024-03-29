const container=document.querySelector(".container");
container.style.backgroundColor="red";

const p=document.createElement("p")
p.textContent="HELLO!"

for(let i=0; i<=20; i++){
    const div=document.createElement("div")
    div.style.backgroundColor="green"
    div.classList="div"
    container.appendChild(div)
}