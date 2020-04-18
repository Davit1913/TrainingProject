//Create "Remove" button (which removes closest div) and append it to the passed div
import { p } from "../../../App";
import { createNewButton } from "../createNewButton";

export function appendRemoveButtonTo(div) {
    //TODO
    //Edit-i jamanak tvyal div@ remove anelu depq@
    let removeButton = createNewButton();
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", removeClosestDiv);
    div.append(removeButton);
  
    function removeClosestDiv() {
    this.closest("div").remove();     
    // this.closest("div").style.display = "none";
    
    p.paragraphs[+this.getAttribute("data-number")].isRemoved = true;
    console.log(p.paragraphs);
    }
  }