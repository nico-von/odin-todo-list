import { commitTodoCardText, editTodoCardNumeric, editTodoCardText, removeTodoCard } from "../view/todo-cards";

export function todoCardDblClickHandler(e) {
    e.stopPropagation;
    if (e.target.matches(".todo-title>h3:first-child")
        || e.target.matches(".todo-desc>p:first-child")) {
        editTodoCardText(e.target);
    } else if (e.target.matches(".todo-priority>p:first-child")) {
        editTodoCardNumeric(e.target);
    }
}

export function todoCardClickHandler(e) {
    if (e.target.matches(".todo-del-btn")) {
        removeTodoCard(e.currentTarget);
    }
}

export function todoCardFocusOutHandler(e) {
    e.stopPropagation;
    if (((e.type === "keyup" && e.key === "Enter")
        || (e.type === "focusout"
            && (e.target.getAttribute("type") === "text"
                || e.target.getAttribute("type") === "number"))
        && e.target.matches("input"))) {

        commitTodoCardText(e.target);

    }
}
