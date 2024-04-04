export function saveDataToLocalStorage(items, projects, projectMap, currentLoadedProject) {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("projectMap", JSON.stringify(projectMap));
    if (currentLoadedProject) localStorage.setItem("currentLoadedProject", currentLoadedProject);
}

export function loadDataFromLocalStorage(itemsDefault, projectsDefault, projectMapDefault, defaultProject) {
    if (localStorage.items && localStorage.projects && localStorage.projectMap && localStorage.currentLoadedProject) {
        const items = JSON.parse(localStorage.getItem("items"));
        const projects = JSON.parse(localStorage.getItem("projects"));
        const projectMap = JSON.parse(localStorage.getItem("projectMap"));
        const currentLoadedProject = localStorage.getItem("currentLoadedProject");
        return { items, projects, projectMap, currentLoadedProject };
    } else {
        saveDataToLocalStorage(itemsDefault, projectsDefault, projectMapDefault, defaultProject);
        return;
    }

}
