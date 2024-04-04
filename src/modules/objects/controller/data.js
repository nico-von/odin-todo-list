export function saveDataToLocalStorage(items, projects, projectMap) {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("projectMap", JSON.stringify(projectMap));
}

export function loadDataFromLocalStorage(itemsDefault, projectsDefault, projectMapDefault) {
    if (localStorage.items && localStorage.projects && localStorage.projectMap) {
        const items = JSON.parse(localStorage.getItem("items"));
        const projects = JSON.parse(localStorage.getItem("projects"));
        const projectMap = JSON.parse(localStorage.getItem("projectMap"));
        return { items, projects, projectMap };
    } else {
        saveDataToLocalStorage(itemsDefault, projectsDefault, projectMapDefault);
        return;
    }

}
