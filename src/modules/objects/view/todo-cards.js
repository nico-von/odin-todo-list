import { createElem } from "./elements";

const EDIT_BUTTON_LBL = "Edit";
const DELETE_BUTTON_LBL = "Delete";
const TITLE_CLASS_NAME = "todo-title";
const TITLE_DESC_NAME = "todo-desc";

export function createTodoCard(name = "", description = "", isCompleted = false, priority, date, container) {
    let todoElem = createElem("div", ["todo-card"], container);
    let todoTitle = createElem("h3", [`${TITLE_CLASS_NAME}`], todoElem);
    let todoDesc = createElem("p", [`${TITLE_DESC_NAME}`], todoElem);

    todoTitle.textContent = name;
    todoDesc.textContent = description;

    let todoElemActions = createElem("div", ["todo-actions"], todoElem);
    let todoEditButton = createElem("button", ["todo-edit-btn"], todoElemActions, "edit-btn");
    todoEditButton.textContent = EDIT_BUTTON_LBL;

    let todoDelButton = createElem("button", ["todo-del-btn"], todoElemActions, "del-btn");
    todoDelButton.textContent = DELETE_BUTTON_LBL;

    return todoElem;
}

export function editTodoCard(todoElem, name = "", description = "", isCompleted, priority, date) {
    let todoTitle = todoElem.querySelector(`.${TITLE_CLASS_NAME}`);
    let todoDesc = todoElem.querySelector(`.${TITLE_DESC_NAME}`);

    todoTitle.textContent = name;
    todoDesc.textContent = description;
}
