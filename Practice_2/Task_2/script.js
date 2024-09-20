let inputElement = document.querySelector("input");
let buttonElement = document.querySelector("button");
let containerElement = document.querySelector("#container");



buttonElement.addEventListener("click", () =>{
let number = inputElement.value;

containerElement.innerHTML = "";

for(let i = 0 ; i < number ; i++){


    let headingElement = document.createElement("h1")
    headingElement.innerText = "Hello World"

    headingElement.style.fontSize = (i+1)*15 + "px";
    containerElement.appendChild(headingElement);
}
});
