//append new paragraph to the passed div
import { p } from "../App";
export function appendNewParagraphTo(paragraphText) { //createParagraph(paragraphText)
    let newParagraph = document.createElement("p");
    
    paragraphText == "" ?
    newParagraph.innerHTML = "<em>No text was entered</em>" :
    newParagraph.innerText = paragraphText;
    
    newParagraph.style.float = "left";
    return newParagraph;
    
    p.paragraphs.push({
      paragraphNumber: p.paragraphNumber,
      isRemoved: false,
    })
  }