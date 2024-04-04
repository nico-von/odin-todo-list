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

const defaultId = "default";
let currentLoadedProject = defaultId;
let defProject = new Project("General", defaultId);
projectCache.addObjToList(defProject);

const existingData = loadDataFromLocalStorage(itemCache.getCache(), projectCache.getCache(), projectMap.getProjects());
if (existingData) {
    itemCache.setCache(existingData.items);
    projectCache.setCache(existingData.projects);
    projectMap.loadProjectMap(existingData.projectMap);
    currentLoadedProject = existingData.currentLoadedProject;
}

load(mainContainer, sidebarContainer, projectCache, itemCache, projectMap, currentLoadedProject);