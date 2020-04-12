//Delete "Edit" and "Cancel" buttons and unhide "Add" button
export function restoreButtonsAfterEditing() {
    let buttons = inputDiv.querySelectorAll("button");
    buttons[2].remove(); //cancelButton
    buttons[1].remove(); //editButton
    addNewParagraphButton.hidden = false;
  }