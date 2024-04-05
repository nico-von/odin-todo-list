import { createAddNewCard } from "../view/general-controls";
import { createProjectCard } from "../view/projects-view";
import { createTodoCard } from "../view/todo-cards";
import {
    todoCardClickHandler,
    todoCardDblClickHandler,
    focusOutHandler,
    addCardHandler,
    projectCardClickHandler,
    projectCardDblClickHandler
} from "./event-handlers";

export function renderItemCard(item, appData, isNewItem = false) {
    const { name, description, isCompleted, priority, id } = item;
    const { itemContainer } = appData;
    const todoCard = createTodoCard(name,
        description,
        isCompleted,
        priority,
        id,
        isNewItem,
        itemContainer)
    todoCard.addEventListener('click', (e) => todoCardClickHandler(e, appData));
    todoCard.addEventListener('dblclick', todoCardDblClickHandler);
    todoCard.addEventListener('keyup', (e) => focusOutHandler(e, appData));
    todoCard.addEventListener('focusout', (e) => focusOutHandler(e, appData));
}

export function renderProjectCard(projectId, appData,
    isNewItem = false) {
    const { projectContainer } = appData;
    let projectCard = createProjectCard(projectId, isNewItem, projectContainer);
    projectCard.addEventListener('click', (e) => { projectCardClickHandler(e, appData) });
    projectCard.addEventListener('dblclick', projectCardDblClickHandler);
    projectCard.addEventListener('keyup', (e) => focusOutHandler(e, appData));
    projectCard.addEventListener('focusout', (e) => focusOutHandler(e, appData));
}

export function renderAddCardDiv(appData, isItem = false) {
    const { itemContainer, projectContainer, currentLoadedProject } = appData;
    const container = isItem ? itemContainer : projectContainer;
    const distinguisher = isItem ? "item" : "project";
    let addCardDiv = createAddNewCard(container, distinguisher, currentLoadedProject);
    addCardDiv.addEventListener('click', (e) => addCardHandler(e, appData));
};