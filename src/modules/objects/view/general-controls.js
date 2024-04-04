import { createElem } from "./elements";

export function createAddNewCard(container, distinguisher, projectId = null){
    let addCardDiv = createElem("div",[`add-card-${distinguisher}`],container);
    addCardDiv.textContent = "+";
    if (projectId) {
        addCardDiv.setAttribute("data-project-id",projectId);
    }
    return addCardDiv;
}