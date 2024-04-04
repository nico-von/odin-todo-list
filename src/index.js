import './style.css';
import { mainContainer, sidebarContainer } from './modules/objects/view/containers.js';
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

const existingData = loadDataFromLocalStorage(itemCache.getCache(), projectCache.getCache(), projectMap.getProjects());
if (existingData) {
    itemCache.setCache(existingData.items);
    projectCache.setCache(existingData.projects);
    projectMap.loadProjectMap(existingData.projectMap);
}
// console.log(storageAvailable("localStorage"));
load(mainContainer, sidebarContainer, projectCache, itemCache, projectMap);