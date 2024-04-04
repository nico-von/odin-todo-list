import { Item } from "../model/item";
import { Project } from "../model/project";
import { commitElemText, editText, editTextNumeric, removeElem } from "../view/elements";
import { renderAddCardDiv, renderItemCard, renderProjectCard } from "./cards";
import { renderItems } from "./todo";

export function projectCardDblClickHandler(e) {
    e.stopPropagation;
    if (e.target.matches(".project>h3")) {
        editText(e.target);
    }
}
export function projectCardClickHandler(e, appData) {
    e.stopPropagation;
    const { projectCache, projectMap } = appData;
    if (e.target.matches(".project>h3")) {
        renderItems(appData, e.target.parentElement.id);
    } else if (e.target.matches(".project-actions>button")) {
        projectCache.removeObjFromList(e.currentTarget.id);
        projectMap.removeProjectFromMap(e.currentTarget.id);
        removeElem(e.currentTarget);
    }
}

export function addCardHandler(e, appData) {
    e.stopPropagation;
    const { itemContainer, projectContainer, itemCache, projectCache, projectMap } = appData;
    if (e.target.matches(".add-card-item")) {
        let projectId = e.target.getAttribute("data-project-id");
        let newItem = new Item("", "", 0);
        itemCache.addObjToList(newItem);
        projectMap.addItemToProject(projectId, newItem.id);

        e.target.remove();
        renderItemCard(newItem, appData, true);
        renderAddCardDiv(appData, projectId);
    } else if (e.target.matches(".add-card-project")) {
        let newProject = new Project("");
        projectCache.addObjToList(newProject);
        projectMap.addProjectToMap(newProject.id);

        e.target.remove();
        renderProjectCard(newProject, appData, true);
        renderAddCardDiv(appData);
    }
}

export function focusOutHandler(e, appData) {
    e.stopPropagation;
    const { itemCache, projectCache } = appData;
    if (((e.type === "keyup" && e.key === "Enter")
        || (e.type === "focusout"
            && (e.target.getAttribute("type") === "text"
                || e.target.getAttribute("type") === "number"))
        && e.target.matches("input"))) {

        if (e.target.matches(".todo-title input")) {
            itemCache.setPropValue(e.currentTarget.id, "name", e.target.value);
        } else if (e.target.matches(".todo-desc input")) {
            itemCache.setPropValue(e.currentTarget.id, "description", e.target.value);
        } else if (e.target.matches(".todo-priority input")) {
            itemCache.setPropValue(e.currentTarget.id, "priority", parseFloat(e.target.value));
        } else if (e.target.matches(".project input")) {
            projectCache.setPropValue(e.currentTarget.id, "name", e.target.value);
        }
        commitElemText(e.target);
    }
}

export function todoCardClickHandler(e, appData) {
    e.stopPropagation;
    const { itemCache } = appData;
    if (e.target.matches(".todo-del-btn")) {
        itemCache.removeObjFromList(e.currentTarget.id);
        removeElem(e.currentTarget);
    } else if (e.target.matches("input[type='checkbox'].todo-complete")) {
        itemCache.setPropValue(e.currentTarget.id, "isCompleted", e.target.checked)
    }

}

export function todoCardDblClickHandler(e) {
    e.stopPropagation;
    if (e.target.matches(".todo-title>h3:first-child")
        || e.target.matches(".todo-desc>p:first-child")) {
        editText(e.target);
    } else if (e.target.matches(".todo-priority>p:first-child")) {
        editTextNumeric(e.target);
    }
}
