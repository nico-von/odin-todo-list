import './style.css';
import {createItemCache, createProjectCache, createProjectMap} from './modules/objects/model/todo.js';
import { Item } from './modules/objects/model/item.js';
import { Project } from './modules/objects/model/project.js';
import sampleData from './modules/sample-data/sample-data.json' assert {type: 'json'};

const itemsCache = createItemCache();
const projectsCache = createProjectCache();
const projectMap = createProjectMap();

const sampleItems = sampleData.items;
const sampleProjects = sampleData.projects;

for (let project of sampleProjects){
    const sampleProject = new Project(project.name, project.description);
    projectsCache.addProjectToList(sampleProject);
    projectMap.addProjectToMap(sampleProject.id);
}

for (let item of sampleItems){
    const sampleItem = new Item(item.name, item.description, item.priority, item.date);
    itemsCache.addItemToList(sampleItem);
    projectMap.addItemToProject("default", sampleItem.id);
}

console.log(projectMap.getProjects())