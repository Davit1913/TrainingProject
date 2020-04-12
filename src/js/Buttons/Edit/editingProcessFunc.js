import { appendEditContentButtonTo } from "./appendEditContentButtonTo";
import { appendCancelButtonTo } from "../Cancel/appendCancelButtonTo";

export function editingProcessFunc(paragraph) {
    addNewParagraphButton.hidden = true;
    appendEditContentButtonTo(inputDiv, paragraph);
    appendCancelButtonTo(inputDiv);
  }