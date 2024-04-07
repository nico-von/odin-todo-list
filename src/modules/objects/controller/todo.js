import { resetElement } from "../view/elements";
import { renderAddCardDiv, renderProjectCard, renderItemCard, addSelected } from "./cards";
import { toolBarClickHandler } from "./event-handlers";

export function renderItems(appData) {
    const { itemContainer, projectMap, itemCache, renderCompleted, currentLoadedProject } = appData;
    resetElement(itemContainer);
    let project = projectMap.getProject(currentLoadedProject);
    if (!project) {
        project = projectMap.getProject("default");
    }
    for (let i = 0; i < project.length; i++) {
        let itemId = project[i];
        let item = itemCache.getObj(itemId);

        if (!item) {
            projectMap.removeItemFromList(currentLoadedProject, i);
            continue;
        }

        if (!renderCompleted && item.isCompleted) {
            continue;
        }
        renderItemCard(item, appData);
    }
    renderAddCardDiv(appData, true);
}

function renderProjects(appData) {
    const { projectCache} = appData;
    let projects = projectCache.getObjs();
    for (let i = 0; i < projects.length; i++) {
        renderProjectCard(projects[i], appData, false);
    }
    renderAddCardDiv(appData);
}

function switchCheckbox(checkbox, value) {
    checkbox.checked = value;
}

export function load(itemContainer,
    projectContainer,
    toolbar,
    projectCache,
    itemCache,
    projectMap,
    currentLoadedProject,
    renderCompleted
) {

    const appData = {
        itemContainer,
        projectContainer,
        projectCache,
        itemCache,
        projectMap,
        renderCompleted,
        currentLoadedProject
    }
    renderItems(appData, currentLoadedProject);
    renderProjects(appData);
    switchCheckbox(toolbar.querySelector("#show-completed"), renderCompleted);
    toolbar.addEventListener('click', e => toolBarClickHandler(e, appData));
}
