import { createParagraph } from "./js/createParagraph";
import { createEditButton } from "./js/Buttons/Edit/createEditButton";
import { createRemoveButton } from "./js/Buttons/Remove/createRemoveButton";
export let p = {
    paragraphs: [],
    paragraphNumber: -1,
}

export class Row {
    constructor(paragraphText) {
        this.paragraph = createParagraph(paragraphText);
        this.editButton = createEditButton();
        this.removeButton = createRemoveButton();
    }

    appendRowTo(div) {
        p.paragraphNumber++;
    
        let newDiv = document.createElement("div");
        // newDiv.id=`paragraph${paragraphNumber}`;
        newDiv.style.display = "flex";
        newDiv.style.alignItems = "center";
        section.append(newDiv);
        
        newDiv.append(this.paragraph);
        newDiv.append(this.editButton);
        newDiv.append(this.removeButton);
        
        console.log(p.paragraphs);
    }
}




//paragraphCounter div sarqel, bacel button-ov u bacac jamanak cuyc tal - prompt/input (Enter admin password)
//No paragraphs was removed from N addded || 1 paragraph was emoved from N addded ||  
//N paragraphs was removed from N addded
