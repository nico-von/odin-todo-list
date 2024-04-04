import './style.css';
import { mainContainer, sidebarContainer } from './modules/objects/view/containers.js';
import { Item } from './modules/objects/model/item.js';
import { Project } from './modules/objects/model/project.js';
import sampleData from './modules/sample-data/sample-data.json' assert {type: 'json'};
import { itemCache, projectCache, projectMap } from './modules/objects/controller/data.js';
import { load } from './modules/objects/controller/todo.js';


let defProject = new Project("General", "default");
projectCache.addObjToList(defProject);

const sampleItems = sampleData.items;
const sampleProjects = sampleData.projects;
const sampleProjectMap = sampleData.projectMap;

for (let project of sampleProjects) {
    const sampleProject = new Project(project.name, project.id);
    projectCache.addObjToList(sampleProject);
}

for (let item of sampleItems) {
    const sampleItem = new Item(item.name, item.description, item.priority, item.id);
    itemCache.addObjToList(sampleItem);
}
projectMap.loadProjectMap(sampleProjectMap);
load(mainContainer, sidebarContainer, projectCache, itemCache, projectMap);