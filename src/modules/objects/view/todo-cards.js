import { createElem, resetElement } from "./elements";

const EDIT_BUTTON_LBL = "Edit";
const DELETE_BUTTON_LBL = "Delete";

export function createTodoCard(name = "", description = "", isCompleted = false, priority, date, container) {
    let todoElem = createElem("div", ["todo-card"], container);
    let todoTitle = createElem("div", ["todo-title"], todoElem);
    let todoDesc = createElem("div", ["todo-desc"], todoElem);
    todoTitle.textContent = name;
    todoDesc.textContent = description;

    let todoElemActions = createElem("div", ["todo-actions"], todoElem);
    let todoEditButton = createElem("button", ["todo-edit-btn"], todoElemActions, "edit-btn");
    todoEditButton.textContent = EDIT_BUTTON_LBL;

    let todoDelButton = createElem("button", ["todo-del-btn"], todoElemActions, "del-btn");
    todoDelButton.textContent = DELETE_BUTTON_LBL;

    return todoElem;
}

export function editTodoCardText(todoElem) {
    let todoElemText = todoElem.textContent;
    
    resetElement(todoElem, true);
    
    let todoTitleInput = createElem("input", [], todoElem);
    todoTitleInput.setAttribute("type", "text");
    todoTitleInput.setAttribute("value", todoElemText);
    todoTitleInput.focus();
}

export function commitTodoCardText(todoElem) {
    let todoElemParent = todoElem.parentElement;
    let todoElemText = todoElem.value;
    resetElement(todoElemParent, true);
    todoElemParent.textContent = todoElemText;

}