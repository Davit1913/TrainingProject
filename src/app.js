// export default () => {
//     alert("test");
// }

// export const obj = {};

import { addDivWithParagraph } from "addDivWithParagraph";




let paragraphs = [];
let paragraphNumber = -1;

addNewParagraphButton.addEventListener("click", addDivWithParagraph);
// textInput.addEventListener("keyup", function catchEnterKey(event) {
//   if(event.keyCode == 13) addDivWithParagraph()
// });
textInput.addEventListener("keyup", {handleEvent: catchEnterKey});

function catchEnterKey(event) {
  if(event.keyCode == 13) addDivWithParagraph();
}

//paragraphCounter div sarqel, bacel button-ov u bacac jamanak cuyc tal - prompt/input (Enter admin password)
//No paragraphs was removed from N addded || 1 paragraph was emoved from N addded ||  
//N paragraphs was removed from N addded