import './style.css';
import { mainContainer, sidebarContainer } from './modules/objects/view/containers.js';
import sampleData from './modules/sample-data/sample-data.json' assert {type: 'json'};
import { load } from './modules/objects/controller/todo.js';
import { Item } from './modules/objects/model/item.js';
import { Project } from './modules/objects/model/project.js';
import { createCache, createProjectMap } from './modules/objects/model/todo.js';
import { loadDataFromLocalStorage, storageAvailable } from './modules/objects/controller/data.js';

const itemCache = createCache(Item);
const projectCache = createCache(Project);
const projectMap = createProjectMap();

let defProject = new Project("General", "default");
projectCache.addObjToList(defProject);

// const sampleItems = sampleData.items;
// const sampleProjects = sampleData.projects;
// const sampleProjectMap = sampleData.projectMap;

// for (let project of sampleProjects) {
//     const sampleProject = new Project(project.name, project.id);
//     projectCache.addObjToList(sampleProject);
// }

// for (let item of sampleItems) {
//     const sampleItem = new Item(item.name, item.description, item.priority, item.id);
//     itemCache.addObjToList(sampleItem);
// }
// projectMap.loadProjectMap(sampleProjectMap);We haven’t learned any techniques for actually storing our data anywhere, so when the user refreshes the page, all of their todos will disappear! You should add some persistence to this todo app using the Web Storage API.

const existingData = loadDataFromLocalStorage(itemCache.getCache(), projectCache.getCache(), projectMap.getProjects());
if (existingData) {
    itemCache.setCache(existingData.items);
    projectCache.setCache(existingData.projects);
    projectMap.loadProjectMap(existingData.projectMap);
}
// console.log(storageAvailable("localStorage"));
load(mainContainer, sidebarContainer, projectCache, itemCache, projectMap);