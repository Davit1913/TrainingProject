//Create "Edit" button and append it to the passed div
import { createNewButton } from "../createNewButton";
import { editClosestParagraph } from "./editClosestParagraph";

export function appendEditButtonTo() { //createEditButton()
    let editButton = createNewButton();
    editButton.innerText = "Edit";
    editButton.addEventListener("click", editClosestParagraph);
    return editButton;
  }