//Create "Cancel" button and append it to the passed div (inputDiv)
import { restoreButtonsAfterEditing } from "../restoreButtonsAfterEditing";

export function appendCancelButtonTo(div) {
    let cancelButton = createNewButton();
    cancelButton.innerText = "Cancel";
    cancelButton.addEventListener("click", cancelEditing);
    
    function cancelEditing() {
      restoreButtonsAfterEditing()
      editingInput.value = "";
      editingInput.focus();
      editingInput.id = "textInput";
    }
    div.append(cancelButton);
  }