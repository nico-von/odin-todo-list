import { commitTodoCardText, editTodoCardText } from "../view/todo-cards";

export function todoCardClickHandler(e) {
    e.stopPropagation;
    if (e.target.matches(".todo-title>h3")
        || e.target.matches(".todo-desc>p")) {
        editTodoCardText(e.target);
    }
}

export function todoCardFocusOutHandler(e) {
    e.stopPropagation;
    if (((e.type === "keyup" && e.key === "Enter")
        || (e.type === "focusout"))
        && e.target.matches("input")
        && e.target.getAttribute("type") === "text") {

        commitTodoCardText(e.target);

    }
}
