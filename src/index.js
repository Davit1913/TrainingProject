// import alertFun, { obj } from "./App";

// let root = document.getElementById("root");
// root.onclick = alertFun;

// root.innerHTML = "TEST";

// import App from "./App";
// import { rootFunc } from "./App";
import "./css/style.css";
import { addDivWithParagraph } from "./js/addDivWithParagraph";

let root = document.getElementById("root");

let section = document.createElement("div");
section.id = "section";
root.append(section);

let input = document.createElement("input");
input.id = "textInput";
section.append(input);

let addButton = document.createElement("button");
addButton.id = "addNewParagraphButton";
addButton.innerText = "Add";
section.append(addButton);

addNewParagraphButton.addEventListener("click", addDivWithParagraph);
// textInput.addEventListener("keyup", function catchEnterKey(event) {
//   if(event.keyCode == 13) addDivWithParagraph()
// });
textInput.addEventListener("keyup", {handleEvent: catchEnterKey});

function catchEnterKey(event) {
  if(event.keyCode == 13) addDivWithParagraph();
}


