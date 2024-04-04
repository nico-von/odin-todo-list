import { createElem, createInputElem } from "./elements";

export function createProjectCard(p, isNewItem, container) {
    let project = createElem("div", ["project"], container, p.id);
    let projectTitle = createElem("h3", [], project);
    if (isNewItem) {
        createInputElem(projectTitle, "");
    } else {
        projectTitle.textContent = p.name;
    }

    if (!p.isDefault) {
        let projectActions = createElem("div", ["project-actions"], project);
        let deleteProject = createElem("button", [], projectActions);
        deleteProject.textContent = "Delete";
    }
    return project;
}