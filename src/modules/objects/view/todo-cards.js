import { createElem, resetElement } from "./elements";

const EDIT_BUTTON_LBL = "Edit";
const DELETE_BUTTON_LBL = "Delete";

export function createTodoCard(name = "", description = "", isCompleted = false, priority, id, container) {
    let todoElem = createElem("div", ["todo-card"], container);
    let todoTitle = createElem("div", ["todo-title"], todoElem);
    let todoDesc = createElem("div", ["todo-desc"], todoElem);
    let todoTitleText = createElem("h3", [], todoTitle);
    let todoDescText = createElem("p", [], todoDesc);
    todoTitleText.textContent = name;
    todoDescText.textContent = description;

    let todoPriority = createElem("div", ["todo-priority"], todoElem);
    let todoPriorityText = createElem("p", [], todoPriority);
    todoPriorityText.textContent = priority;

    let todoElemActions = createElem("div", ["todo-actions"], todoElem);
    let todoCompleted = createElem("input", ["todo-complete"], todoElemActions, id);
    todoCompleted.setAttribute("type", "checkbox");
    if (isCompleted) todoCompleted.setAttribute("checked", "");

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

export function editTodoCardNumeric(todoElem) {
    let todoElemText = todoElem.textContent;
    todoElem.textContent = "";

    let todoTitleInput = createElem("input", [], todoElem);
    todoTitleInput.setAttribute("type", "number");
    todoTitleInput.setAttribute("value", todoElemText);
    todoTitleInput.setAttribute("min", "0");
    todoTitleInput.focus();
}

export function removeTodoCard(todoElem) {
    todoElem.remove();
}

export function commitTodoCardText(todoElem) {
    let todoElemParent = todoElem.parentElement;
    let todoElemText = todoElem.value;
    todoElemParent.textContent = todoElemText;

}