import { createElem } from "./elements";

export function createProjectCard(p, container) {
    let project = createElem("div", ["project"], container, p.id);
    let projectTitle = createElem("h3", [], project);
    projectTitle.textContent = p.name;

    let projectActions = createElem("div",["project-actions"], project);
    let deleteProject = createElem("button", [], projectActions);
    deleteProject.textContent = "Delete";
    return project;
}