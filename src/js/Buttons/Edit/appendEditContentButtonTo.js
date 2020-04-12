//Create "Edit" button and append it to the passed div (inputDiv)
import { restoreButtonsAfterEditing } from "../restoreButtonsAfterEditing";

export function appendEditContentButtonTo(div, p) {
    let editContentButton = createNewButton();
    editContentButton.innerText = "Edit";
    editContentButton.addEventListener("click", editing);
    editingInput.addEventListener("keyup", {handleEvent: catchEnter}, true);
    function catchEnter(event) {
    if(event.keyCode == 13) {
      editing(event);
    }
  }
    
    function editing(event) {
      editingInput.value == "" ?
      p.innerHTML = "<em>No text was entered</em>" :
      p.innerText = editingInput.value;
      editingInput.value = "";
      editingInput.focus();
      editingInput.id = "textInput";
      
      restoreButtonsAfterEditing()
  
    }
  
    div.append(editContentButton);
  }