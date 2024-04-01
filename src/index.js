import './style.css';
import { createItemCache, createProjectCache, createProjectMap } from './modules/objects/model/todo.js';
import { mainContainer, sidebarContainer } from './modules/objects/view/containers.js';
import { Item } from './modules/objects/model/item.js';
import { Project } from './modules/objects/model/project.js';
import sampleData from './modules/sample-data/sample-data.json' assert {type: 'json'};
import { createProjectController } from './modules/objects/controller/project.js';

const itemsCache = createItemCache();
const projectsCache = createProjectCache();
const projectMap = createProjectMap();
const projectController = createProjectController(mainContainer, projectMap, itemsCache, projectsCache);
const sampleItems = sampleData.items;
const sampleProjects = sampleData.projects;

for (let project of sampleProjects) {
    const sampleProject = new Project(project.name, project.description);
    projectsCache.addProjectToList(sampleProject);
    projectMap.addProjectToMap(sampleProject.id);
}

for (let item of sampleItems) {
    const sampleItem = new Item(item.name, item.description, item.priority, item.date);
    itemsCache.addItemToList(sampleItem);
    projectMap.addItemToProject("default", sampleItem.id);
}

projectController.render();
