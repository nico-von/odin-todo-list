import { commitTodoCardText, editTodoCardText } from "../view/todo-cards";

export function todoCardClickHandler(e) {
    e.preventDefault;
    e.stopPropagation;
    if (e.target.classList.contains("todo-title")
        || e.target.classList.contains("todo-desc")) {
        editTodoCardText(e.target);
    }
}

export function todoCardReturnHandler(e) {
    e.preventDefault;
    e.stopPropagation;
    if (e.target.tagName === "INPUT") {
        commitTodoCardText(e.target);
    }
}