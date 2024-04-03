import { createElem, resetElement } from "./elements";


export function createTodoCard(name = "", description = "", isCompleted = false, priority, id, container) {
    let todoElem = createElem("div", ["todo-card"], container, id);
    let todoTitle = createElem("div", ["todo-title"], todoElem);
    let todoDesc = createElem("div", ["todo-desc"], todoElem);
    let todoTitleText = createElem("h3", [], todoTitle);
    let todoDescText = createElem("p", [], todoDesc);
    todoTitleText.textContent = name;
    todoDescText.textContent = description;

    let todoPriority = createElem("div", ["todo-priority"], todoElem);
    let todoPriorityText = createElem("p", [], todoPriority);
    todoPriorityText.textContent = priority;

    let toggleId = `toggle${id}`;
    let todoElemActions = createElem("div", ["todo-actions"], todoElem);
    let todoCompleted = createElem("input", ["todo-complete"], todoElemActions, toggleId);
    todoCompleted.setAttribute("type", "checkbox");
    if (isCompleted) todoCompleted.setAttribute("checked", "");

    let todoPriorityLabel = createElem("label", [], todoElemActions);
    todoPriorityLabel.textContent = "Completed";
    todoPriorityLabel.htmlFor = toggleId;

    let todoDelButton = createElem("button", ["todo-del-btn"], todoElemActions);
    todoDelButton.textContent = "Delete";

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