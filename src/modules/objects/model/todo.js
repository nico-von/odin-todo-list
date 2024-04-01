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
    function removeItemFromList(itemId) {
        delete items[itemId];
    };
    return {
        addItemToList,
        removeItemFromList
    }
}

export function createProjectCache() {
    let projects = {};
    function addProjectToList(project) {
        if (Object.getPrototypeOf(project) !== Project.prototype) {
            return;
        }
        projects[project.id] = project;
    };
    function removeProjectFromList(projectId) {
        projects[projectId];
    }
    return {
        addProjectToList,
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
        loadProjectMap
    }
}
