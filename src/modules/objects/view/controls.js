import { createElem } from "./elements";

export function createAddNewCard(container){
    let addCardDiv = createElem("div",["addCard"],container);
    addCardDiv.textContent = "+";
    return addCardDiv;
}