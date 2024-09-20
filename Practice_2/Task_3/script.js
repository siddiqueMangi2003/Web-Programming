let radius = document.querySelector("input");
let buttonElement = document.querySelector("button");
let containerElement = document.querySelector("#container");




buttonElement.addEventListener("click", () =>{


    let result =  2*Math.PI*radius.value;
    
    let headingElement = document.createElement("h1");
    headingElement.innerText = "The circumference of circle is " + result;
    
    containerElement.appendChild(headingElement);
})
