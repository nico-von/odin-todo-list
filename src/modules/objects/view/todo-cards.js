import { createElem, createInputElem } from "./elements";


export function createTodoCard(name = "", description = "", isCompleted = false, priority, id, isNewItemCard, container) {
    let todoElem = createElem("div", ["todo-card"], container, id);
    let todoTitle = createElem("div", ["todo-title"], todoElem);
    let todoDesc = createElem("div", ["todo-desc"], todoElem);
    let todoTitleText = createElem("h3", [], todoTitle);
    let todoDescText = createElem("p", [], todoDesc);
    if (isNewItemCard) {
        createInputElem(todoTitleText, "");
    } else {
        todoTitleText.textContent = name;
    }
    todoDescText.textContent = description === "" ? "Description" : description;

    let todoPriority = createElem("div", ["todo-priority"], todoElem);
    let todoPriorityText = createElem("p", [], todoPriority);
    todoPriorityText.textContent = priority;

    let toggleId = `toggle${id}`;
    let todoCompletedDiv = createElem("div", ["todo-complete"], todoElem);
    let todoCompleted = createElem("input", ["complete-checkbox"], todoCompletedDiv, toggleId);
    todoCompleted.setAttribute("type", "checkbox");
    if (isCompleted) todoCompleted.setAttribute("checked", "");

    let todoPriorityLabel = createElem("label", [], todoCompletedDiv);
    todoPriorityLabel.textContent = "Completed";

    let todoElemActions = createElem("div", ["todo-actions"], todoElem);
    todoPriorityLabel.htmlFor = toggleId;

    let todoDelButton = createElem("button", ["todo-del-btn", "delete-button", "delete-symbol"], todoElemActions);
    todoDelButton.textContent = "Delete";

    return todoElem;
}
