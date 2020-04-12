//Create new button without functionality and return it
export function createNewButton() {
    let newButton = document.createElement("button");
    newButton.style.marginLeft = "5px";
    newButton.setAttribute("data-number", paragraphNumber);
    
    return newButton;
  }