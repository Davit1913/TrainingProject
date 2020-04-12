//Create "Remove" button (which removes closest div) and append it to the passed div
export function appendRemoveButtonTo(div) {
    //TODO
    //Edit-i jamanak tvyal div@ remove anelu depq@
    let removeButton = createNewButton();
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", removeClosestDiv);
    div.append(removeButton);
  
    function removeClosestDiv() {
    this.closest("div").remove();     
    // this.closest("div").style.display = "none";
    
    paragraphs[+this.getAttribute("data-number")].isRemoved = true;
    console.log(paragraphs);
    }
  }