import { resetElement } from "../view/elements";
import { renderAddCardDiv, renderProjectCard, renderItemCard } from "./cards";

export function renderItems(appData, projectId = "default") {
    const { itemContainer, projectMap, itemCache } = appData;
    resetElement(itemContainer);
    let project = projectMap.getProject(projectId);
    if (!project) {
        project = projectMap.getProject("default");
    }
    for (let i = 0; i < project.length; i++) {
        let itemId = project[i];
        let item = itemCache.getObj(itemId);

        if (!item) {
            projectMap.removeItemFromList(projectId, i);
            continue;
        }
        renderItemCard(item, appData);
    }
    renderAddCardDiv(appData, projectId);
}

function renderProjects(appData) {
    const { projectCache } = appData;
    let projects = projectCache.getObjs();
    for (let i = 0; i < projects.length; i++) {
        renderProjectCard(projects[i], appData, false);
    }
    renderAddCardDiv(appData);
}

export function load(itemContainer, projectContainer, projectCache, itemCache, projectMap, currentLoadedProject) {
    const appData = { itemContainer, projectContainer, projectCache, itemCache, projectMap }
    renderItems(appData, currentLoadedProject);
    renderProjects(appData);
}
