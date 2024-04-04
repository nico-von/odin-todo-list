import { createElem } from "./elements";

export function createAddNewCard(container, distinguisher){
    let addCardDiv = createElem("div",[`add-card-${distinguisher}`],container);
    addCardDiv.textContent = "+";
    return addCardDiv;
}