import { createElem } from "./elements";

export function createAddNewCard(container, distinguisher, projectId = null){
    let addCardDiv = createElem("div",[`add-card-${distinguisher}`, 'add-symbol'],container);
    addCardDiv.textContent = "add";
    if (projectId) {
        addCardDiv.setAttribute("data-project-id",projectId);
    }
    return addCardDiv;
}