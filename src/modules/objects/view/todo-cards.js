import { createElem, resetElement } from "./elements";

const EDIT_BUTTON_LBL = "Edit";
const DELETE_BUTTON_LBL = "Delete";

export function createTodoCard(name = "", description = "", isCompleted = false, priority, date, id, container) {
    let todoElem = createElem("div", ["todo-card"], container);
    let todoTitle = createElem("div", ["todo-title"], todoElem);
    let todoDesc = createElem("div", ["todo-desc"], todoElem);
    let todoTitleText = createElem("h3", [], todoTitle);
    let todoDescText = createElem("p", [], todoDesc);
    todoTitleText.textContent = name;
    todoDescText.textContent = description;

    let todoElemActions = createElem("div", ["todo-actions"], todoElem);
    let todoPriority = createElem("input", ["todo-priority"], todoElemActions, id);
    todoPriority.setAttribute("type", "checkbox");
    if (isCompleted) todoPriority.setAttribute("checked", "");

    let todoPriorityLabel = createElem("label", [], todoElemActions);
    todoPriorityLabel.textContent = "Completed";
    todoPriorityLabel.htmlFor = id;

    let todoDelButton = createElem("button", ["todo-del-btn"], todoElemActions);
    todoDelButton.textContent = DELETE_BUTTON_LBL;

    return todoElem;
}

export function editTodoCardText(todoElem) {
    let todoElemText = todoElem.textContent;
    todoElem.textContent = "";

    let todoTitleInput = createElem("input", [], todoElem);
    todoTitleInput.setAttribute("type", "text");
    todoTitleInput.setAttribute("value", todoElemText);
    todoTitleInput.focus();
}

export function commitTodoCardText(todoElem) {
    let todoElemParent = todoElem.parentElement;
    let todoElemText = todoElem.value;
    todoElemParent.textContent = todoElemText;

}