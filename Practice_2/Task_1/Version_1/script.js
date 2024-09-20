//Task_1

let headingElement = document.querySelector("h1");
let buttonElement = document.querySelector("button");

// function sayHello(){
//     headingElement.innerText = "Hello world";
// }

// buttonElement.addEventListener("click", sayHello);

buttonElement.addEventListener("click", ()=>{

    headingElement.innerText = "Hello world"
})

