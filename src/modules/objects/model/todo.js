import { Item } from "./item";
import { Project } from "./project";

export function createItemCache() {
    let items = {};
    function addItemToList(item) {
        if (Object.getPrototypeOf(item) !== Item.prototype) {
            return;
        }
        items[item.id] = item;
    };
    function setItemPropValue(itemId, prop, value) {
        if (!Object.hasOwn(items[itemId], prop)){
            return;
        }
        items[itemId][prop] = value;
        console.log(items[itemId]); 
    };
    function removeItemFromList(itemId) {
        delete items[itemId];
    };
    function getItem(itemId) {
        return items[itemId];
    }
    return {
        addItemToList,
        getItem,
        setItemPropValue,
        removeItemFromList
    }
}

export function createProjectCache() {
    let projects = {};
    let defProject = new Project("General", "", "default");
    function addProjectToList(project) {
        if (Object.getPrototypeOf(project) !== Project.prototype) {
            return;
        }
        projects[project.id] = project;
    };
    function removeProjectFromList(projectId) {
        projects[projectId];
    }
    function getProjects() {
        return Object.values(projects);
    }
    addProjectToList(defProject);
    return {
        addProjectToList,
        getProjects,
        removeProjectFromList
    }
}

export function createProjectMap() {
    let projects = { "default": [] };
    function addProjectToMap(projectId) {
        if (projects.hasOwnProperty(projectId)) {
            return;
        }
        projects[projectId] = [];
    }
    function removeProjectFromMap(projectId) {
        delete projects[projectId];
    }
    function addItemToProject(projectId, itemId) {
        if (!projects.hasOwnProperty(projectId)) {
            addProjectToList(projectId);
        }
        projects[projectId].push(itemId);
    }
    function getProject(projectId) {
        return projects[projectId];
    }
    function getProjects() {
        return projects;
    }
    function loadProjectMap(projectObject) {
        projects = projectObject;
    }
    return {
        addProjectToMap,
        removeProjectFromMap,
        addItemToProject,
        getProjects,
        getProject,
        loadProjectMap
    }
}
