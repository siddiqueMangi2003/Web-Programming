let createButton = document.createElement("button");

createButton.innerText = "🕹️";

createButton.style.fontSize = "25px"
document.body.appendChild(createButton);

createButton.addEventListener("click", () =>{
    
    let headingElement = document.createElement("h1");
headingElement.innerText = "Hello World";
document.body.appendChild(headingElement);
})