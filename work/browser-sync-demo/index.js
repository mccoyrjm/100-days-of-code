const element1 = document.createElement("h1");
element1.innerHTML = "I am the first element";

const element2 = document.createElement("h3");
element2.innerHTML = "I am the first element subtitle";

const element3 = document.createElement("p");
element3.classList.add("header");
element3.innerHTML = "Comment out what elements are appended to the body and save. The page should automatically update."

document.body.appendChild(element1);
document.body.appendChild(element2);
document.body.appendChild(element3);