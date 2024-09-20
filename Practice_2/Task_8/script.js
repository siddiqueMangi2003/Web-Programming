let inp = document.querySelector("input");
let buttonElement = document.querySelector("button");
let containerElement = document.querySelector("#container");


buttonElement.addEventListener("click", () =>{

    img_url = inp.value

    containerElement.innerHTML = "";

    let img_element = document.createElement("img");
    img_element.src = img_url;
    img_element.alt = "Image from URL";

    img_element.style.maxWidth = "100%";


     containerElement.appendChild(img_element);
})