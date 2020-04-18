//append new div to the "section" div
import { appendNewParagraphTo } from "./appendNewParagraphTo";
import { appendRemoveButtonTo } from "./Buttons/Remove/appendRemoveButtonTo";
import { appendEditButtonTo } from "./Buttons/Edit/appendEditButtonTo";
import { p } from "../App";
import { Row } from "../App";

export function addDivWithParagraph() {
  let row = new Row(input.innerText);
  row.appendRowTo(root);

  textInput.value = "";
  textInput.focus();  
}