import { createElem } from "./elements";

export function createProjectCard(p, container) {
    let project = createElem("div", ["project"], container, p.id);
    let projectTitle = createElem("h3", [], project);
    projectTitle.textContent = p.name;
    return project;
}