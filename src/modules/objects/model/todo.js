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
    };
    function removeItemFromList(itemId) {
        delete items[itemId];
    };
    function getItem(itemId) {
        return items[itemId];
    }
    function getItems() {
        return Objects.values(items);
    }
    return {
        addItemToList,
        getItem,
        setItemPropValue,
        getItems,
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
        delete projects[projectId];
    }
    function getProjects() {
        return Object.values(projects);
    }
    function setProjectPropValue(projectId, prop, value) {
        if (!Object.hasOwn(projects[projectId], prop)){
            return;
        }
        projects[projectId][prop] = value;
    };
    addProjectToList(defProject);
    return {
        addProjectToList,
        getProjects,
        setProjectPropValue,
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
    function removeItemFromList(projectId, index){
        projects[projectId].splice(index, 1);
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
        loadProjectMap,
        removeItemFromList
    }
}
