//Create new button without functionality and return it
import { p } from "../../App";

export function createNewButton() {
    let newButton = document.createElement("button");
    newButton.style.marginLeft = "5px";
    newButton.setAttribute("data-number", p.paragraphNumber);
    
    return newButton;
  }