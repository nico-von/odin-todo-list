import { Item } from "./item";
import { Project } from "./project";

export const itemsCache = {
    items: {},
    addItemToList(itemId, item){
       if (Object.getPrototypeOf(item) !== Item.prototype){
        return;
       }
       this.items[itemId] = item;
    },
    removeItemFromList(itemId){
        delete this.items[itemId];
    }
}

export const projectsCache = {
    projects: {},
    addProjectToList(projectId, project){
        if (Object.getPrototypeOf(project) !== Project.prototype) {
            return;
        }
        this.projects[projectId] = project;
    },
    removeProjectFromList(projectId){
        delete this.projects[projectId];
    }
}

export function createProjectMap(){
    const projects = {}
    function addProjectToList(projectId){
        if (projects.hasOwnProperty(projectId)){
            return;
        }
        projects[projectId] = [];
    }
    function removeProjectFromList(projectId){
        delete projects[projectId];
    }
    function addItemToProject(projectId, itemId){
        if (!projects.hasOwnProperty(projectId)){
            addProjectToList(projectId);
        }
        projects[projectId].push(itemId);
    }               
    function getProjects(){
        return projects;
    }
    return {
        addProjectToList,
        removeProjectFromList,
        addItemToProject,
        getProjects
    }
}