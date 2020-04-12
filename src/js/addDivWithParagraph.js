//append new div to the "section" div
import { appendNewParagraphTo } from "appendNewParagraphTo";
import { appendRemoveButtonTo } from "./Buttons/Remove/appendRemoveButtonTo";
import { appendEditButtonTo } from "./Buttons/Edit/appendEditButtonTo";

export function addDivWithParagraph() {
    paragraphNumber++;
    
    let newDiv = document.createElement("div");
    // newDiv.id=`paragraph${paragraphNumber}`;
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center";
    section.append(newDiv);
    
    appendNewParagraphTo(newDiv);
    
    appendRemoveButtonTo(newDiv);
    
    appendEditButtonTo(newDiv);
    // editButton = newDiv.querySelectorAll("button")[1];
    // editButton.addEventListener("click", editClosestParagraph);
    
    textInput.value = "";
    textInput.focus();
    
    console.log(paragraphs);
  }