import { Item } from "../model/item";
import { Project } from "../model/project";
import { commitElemText, editText, removeElem } from "../view/elements";
import { addSelected, removeSelected, renderAddCardDiv, renderItemCard, renderProjectCard } from "./cards";
import { renderItems } from "./todo";
import { saveDataToLocalStorage } from "./data";

export function projectCardDblClickHandler(e) {
    e.stopPropagation;
    if (e.target.matches(".project:not(#default)>h3")) {
        editText(e.target);
    }
}
export function projectCardClickHandler(e, appData) {
    e.stopPropagation;
    const { itemCache, projectCache, projectMap } = appData;
    if (e.target.matches(".project>h3")) {
        appData.currentLoadedProject = e.target.parentElement.id;
        renderItems(appData);
        removeSelected(appData);
        addSelected(e.target.parentElement);
        saveData(appData, e.target.parentElement.id);
    } else if (e.target.matches(".project-actions>.delete-button")) {
        projectCache.removeObjFromList(e.currentTarget.id);
        for (let item of projectMap.getProject(e.currentTarget.id)){
            itemCache.removeObjFromList(item);
        }
        projectMap.removeProjectFromMap(e.currentTarget.id);
        appData.currentLoadedProject = Object.keys(projectMap.getProjects()).pop();

        removeElem(e.currentTarget);
        renderItems(appData);
        removeSelected(appData);
        addSelected(document.querySelector(`#${appData.currentLoadedProject}`));
        saveData(appData);
    }
}

export function addCardHandler(e, appData) {
    e.stopPropagation;
    const { itemCache, projectCache, projectMap } = appData;
    if (e.target.matches(".add-card-item")) {
        let projectId = e.target.getAttribute("data-project-id");
        let newItem = new Item("", "", 0);
        itemCache.addObjToList(newItem);
        projectMap.addItemToProject(projectId, newItem.id);

        e.target.remove();
        renderItemCard(newItem, appData, true);
        renderAddCardDiv(appData, true);
    } else if (e.target.matches(".add-card-project")) {
        let newProject = new Project("");
        projectCache.addObjToList(newProject);
        projectMap.addProjectToMap(newProject.id);

        e.target.remove();
        renderProjectCard(newProject, appData, true);
        renderAddCardDiv(appData);
    }
    saveData(appData);
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
        } else if (e.target.matches(".project:not(#default) input")) {
            projectCache.setPropValue(e.currentTarget.id, "name", e.target.value);
        }
        commitElemText(e.target);
        saveData(appData);
    }
}

export function todoCardClickHandler(e, appData) {
    e.stopPropagation;
    const { itemCache } = appData;
    if (e.target.matches(".todo-del-btn")) {
        itemCache.removeObjFromList(e.currentTarget.id);
        removeElem(e.currentTarget);
        saveData(appData);
    } else if (e.target.matches("input[type='checkbox'].complete-checkbox")) {
        itemCache.setPropValue(e.currentTarget.id, "isCompleted", e.target.checked)
        renderItems(appData);
        saveData(appData);
    }

}

export function todoCardDblClickHandler(e) {
    e.stopPropagation;
    if (e.target.matches(".todo-title>h3:first-child")
        || e.target.matches(".todo-desc>p:first-child")) {
        editText(e.target);
    }
}

export function toolBarClickHandler(e, appData) {
    e.stopPropagation;
    if (e.target.matches("#show-completed")) {
        appData.renderCompleted = e.target.checked;
        renderItems(appData);
        saveData(appData);
    }
}

function saveData(appData) {
    const { itemCache, projectCache, projectMap, currentLoadedProject, renderCompleted } = appData;
    saveDataToLocalStorage(itemCache.getCache(), projectCache.getCache(), projectMap.getProjects(), currentLoadedProject, renderCompleted)
}