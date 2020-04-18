//append new paragraph to the passed div
import { p } from "../App";
export function appendNewParagraphTo(div) {
    let newParagraph = document.createElement("p");
    
    textInput.value == "" ?
    newParagraph.innerHTML = "<em>No text was entered</em>" :
    newParagraph.innerText = textInput.value;
    
    newParagraph.style.float = "left";
    div.append(newParagraph);
    
    p.paragraphs.push({
      paragraphNumber: p.paragraphNumber,
      isRemoved: false,
    })
  }