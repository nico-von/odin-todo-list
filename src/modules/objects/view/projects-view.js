import { createElem } from "./elements";

export function createProjectsView(projects = [], container) {
    let projectsElem = createElem("div", ["projects-view"], container);
    projects.forEach(project => {
        let project = createElem("div", ["project"], projectsElem, project.id);
        let projectTitle = createElem("h3", [], project);
        let projectDesc = createElem("p",[],project);
        projectTitle.textContent = project.name;
        projectDesc.textContent = project.description;
    })
    return projectsElem;
}