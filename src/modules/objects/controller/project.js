import { commitElemText, editText, editTextNumeric, resetElement } from "../view/elements";
import { createProjectsView } from "../view/projects-view";
import { createTodoCard } from "../view/todo-cards";

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
        for (let i = 0; i < project.length; i++) {
            let itemId = project[i];
            let item = itemsCache.getItem(itemId);
            
            if (!item) {
                projectMap.removeItemFromList(projectId, i);
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
            editText(e.target);
        } else if (e.target.matches(".todo-priority>p:first-child")) {
            editTextNumeric(e.target);
        }
    }

    function todoCardClickHandler(e) {
        if (e.target.matches(".todo-del-btn")) {
            itemsCache.removeItemFromList(e.currentTarget.id);
            removeElem(e.currentTarget);
        } else if (e.target.matches("input[type='checkbox'].todo-complete")) {
            itemsCache.setItemPropValue(e.currentTarget.id, "isCompleted", e.target.checked)
        }

    }

    function todoCardFocusOutHandler(e) {
        e.stopPropagation;
        if (((e.type === "keyup" && e.key === "Enter")
            || (e.type === "focusout"
                && (e.target.getAttribute("type") === "text"
                    || e.target.getAttribute("type") === "number"))
            && e.target.matches("input"))) {

            if (e.target.matches(".todo-title input")) {
                itemsCache.setItemPropValue(e.currentTarget.id, "name", e.target.value);
            } else if (e.target.matches(".todo-desc input")) {
                itemsCache.setItemPropValue(e.currentTarget.id, "description", e.target.value);
            } else if (e.target.matches(".todo-priority input")) {
                itemsCache.setItemPropValue(e.currentTarget.id, "priority", parseFloat(e.target.value));
            }

            commitElemText(e.target);
        }
    }

    function projectCardClickHandler(e) {
        if (e.target.matches(".project>h3")) {
            renderItems(e.target.parentElement.id);
        }
    }
    function projectCardDblClickHandler(e){
        if (e.target.matches(".project>h3")){
            // editTodoCardText()
        }
    }
    return {
        render,
        renderItems,
        renderProjects
    }

}