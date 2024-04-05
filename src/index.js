import './style.css';
import { mainContainer, sidebarContainer, toolbar } from './modules/objects/view/html-elements.js';
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
let renderCompleted = false;
let defProject = new Project("General", defaultId);
projectCache.addObjToList(defProject);

const existingData = loadDataFromLocalStorage(itemCache.getCache(), projectCache.getCache(), projectMap.getProjects(), defaultId);
if (existingData) {
    itemCache.setCache(existingData.items);
    projectCache.setCache(existingData.projects);
    projectMap.loadProjectMap(existingData.projectMap);
    currentLoadedProject = existingData.currentLoadedProject;
    renderCompleted = existingData.renderCompleted;
}

load(mainContainer, 
    sidebarContainer, 
    toolbar, 
    projectCache, 
    itemCache, 
    projectMap, 
    currentLoadedProject, 
    renderCompleted);