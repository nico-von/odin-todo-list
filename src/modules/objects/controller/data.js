export function saveDataToLocalStorage(items, projects, projectMap, currentLoadedProject, renderCompleted) {
    console.log(renderCompleted)
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("projectMap", JSON.stringify(projectMap));
    localStorage.setItem("renderCompleted", renderCompleted.toString());
    localStorage.setItem("currentLoadedProject", currentLoadedProject);
}

export function loadDataFromLocalStorage(itemsDefault, projectsDefault, projectMapDefault, defaultProject) {
    if (localStorage.items
        && localStorage.projects
        && localStorage.projectMap
        && localStorage.currentLoadedProject
        && localStorage.renderCompleted) {

        const items = JSON.parse(localStorage.getItem("items"));
        const projects = JSON.parse(localStorage.getItem("projects"));
        const projectMap = JSON.parse(localStorage.getItem("projectMap"));
        const currentLoadedProject = localStorage.getItem("currentLoadedProject");
        const renderCompleted = JSON.parse(localStorage.getItem("renderCompleted"));
        return { items, projects, projectMap, currentLoadedProject, renderCompleted };
    } else {
        saveDataToLocalStorage(itemsDefault, projectsDefault, projectMapDefault, defaultProject, true);
        return;
    }

}
