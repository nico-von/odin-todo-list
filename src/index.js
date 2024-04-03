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
const projectController = createProjectController(
    sidebarContainer,
    mainContainer,
    projectMap,
    itemsCache,
    projectsCache);

const sampleItems = sampleData.items;
const sampleProjects = sampleData.projects;
const sampleProjectMap = sampleData.projectMap;

for (let project of sampleProjects) {
    const sampleProject = new Project(project.name, project.id);
    projectsCache.addProjectToList(sampleProject);
}

for (let item of sampleItems) {
    const sampleItem = new Item(item.name, item.description, item.priority, item.id);
    itemsCache.addItemToList(sampleItem);
}
projectMap.loadProjectMap(sampleProjectMap);
projectController.render();
