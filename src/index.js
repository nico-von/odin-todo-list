import './style.css';
import {createItemCache, createProjectCache, createProjectMap} from './modules/objects/model/todo.js';
import { Item } from './modules/objects/model/item.js';
import { Project } from './modules/objects/model/project.js';
import { createTodoCard} from './modules/objects/view/todo-cards.js';

const itemsCache = createItemCache();
const projectsCache = createProjectCache();
const projectMap = createProjectMap();

const itemTestA = new Item("a", "b", 0, Date.now());
const itemTestB = new Item("ab", "b", 1, Date.now());
const projectTest = new Project("ab-container", Date.now(), "any");


itemsCache.addItemToList(itemTestA);
itemsCache.addItemToList(itemTestB);
projectsCache.addProjectToList(projectTest);

projectMap.addItemToProject(projectTest.id, itemTestA.id);
