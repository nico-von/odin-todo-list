import { resetElement } from "../view/elements";
import { createProjectsView } from "../view/projects-view";
import { createTodoCard } from "../view/todo-cards";
import { commitTodoCardText, editTodoCardNumeric, editTodoCardText, removeTodoCard } from "../view/todo-cards";

export function createProjectController(projectContainer, itemContainer, projectMap, itemsCache, projectsCache) {
    function renderProjects() {
        let projects = projectsCache.getProjects();
        let projectView = createProjectsView(projects, projectContainer);
        projectView.addEventListener('click', projectCardClickHandler);
    }

    function renderItems(projectId = "default") {
        resetElement(itemContainer);
        let project = projectMap.getProject(projectId);
        if (!project) {
            project = projectMap.getProject("default");
        }
        for (let itemId of project) {
            let item = itemsCache.getItem(itemId);
            if (!item) {
                continue;
            }
            const todoCard = createTodoCard(item.name,
                item.description,
                item.isCompleted,
                item.priority,
                item.id,
                itemContainer)
            todoCard.addEventListener('click', todoCardClickHandler);
            todoCard.addEventListener('dblclick', todoCardDblClickHandler);
            todoCard.addEventListener('keyup', todoCardFocusOutHandler);
            todoCard.addEventListener('focusout', todoCardFocusOutHandler);
        }
    }
    function render() {
        renderItems();
        renderProjects();
    }

    function todoCardDblClickHandler(e) {
        e.stopPropagation;
        if (e.target.matches(".todo-title>h3:first-child")
            || e.target.matches(".todo-desc>p:first-child")) {
            editTodoCardText(e.target);
        } else if (e.target.matches(".todo-priority>p:first-child")) {
            editTodoCardNumeric(e.target);
        }
    }

    function todoCardClickHandler(e) {
        if (e.target.matches(".todo-del-btn")) {
            removeTodoCard(e.currentTarget);
        }
    }

    function todoCardFocusOutHandler(e) {
        e.stopPropagation;
        if (((e.type === "keyup" && e.key === "Enter")
            || (e.type === "focusout"
                && (e.target.getAttribute("type") === "text"
                    || e.target.getAttribute("type") === "number"))
            && e.target.matches("input"))) {

            commitTodoCardText(e.target);

        }
    }

    function projectCardClickHandler(e) {
        if (e.target.matches(".project>h3")) {
            renderItems(e.target.parentElement.id);
        }
    }
    return {
        render,
        renderItems,
        renderProjects
    }

}