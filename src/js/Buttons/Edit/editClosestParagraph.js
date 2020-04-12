import { restoreButtonsAfterEditing } from "../restoreButtonsAfterEditing";

export function editClosestParagraph() {
    //test for case, when trying to edit something else or even the same paragraph during the current editing process
    if (inputDiv.getElementsByTagName("button").length == 3) {
      restoreButtonsAfterEditing();
      editingInput.id = "textInput";
    }
    
    let activeParagraph = this.closest("div").querySelector("p");
    textInput.id = "editingInput";
    editingInput.value = activeParagraph.innerText;
    editingInput.focus();
    editingProcessFunc(activeParagraph);
    // editingInput.id = "textInput";
    // console.log(paragraphs);
  }