import { createElem } from "./elements";

export function createProjectsView(projects = [], container) {
    let projectsElem = createElem("div", ["projects-view"], container);
    projects.forEach(p => {
        let project = createElem("div", ["project"], projectsElem, p.id);
        let projectTitle = createElem("h3", [], project);
        let projectDesc = createElem("p",[],project);
        projectTitle.textContent = p.name;
    })
    return projectsElem;
}