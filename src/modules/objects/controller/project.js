import { commitElemText, editText, editTextNumeric, resetElement } from "../view/elements";
import { createProjectCard } from "../view/projects-view";
import { createTodoCard } from "../view/todo-cards";

export function createProjectController(projectContainer, itemContainer, projectMap, itemsCache, projectsCache) {
    function renderProjects() {
        let projects = projectsCache.getObjs();
        for(let i = 0; i < projects.length; i++){
            let projectCard = createProjectCard(projects[i], projectContainer);
            projectCard.addEventListener('click', projectCardClickHandler);
            projectCard.addEventListener('dblclick', projectCardDblClickHandler);
            projectCard.addEventListener('keyup', focusOutHandler);
            projectCard.addEventListener('focusout', focusOutHandler);
        }
    }

    function renderItems(projectId = "default") {
        resetElement(itemContainer);
        let project = projectMap.getProject(projectId);
        if (!project) {
            project = projectMap.getProject("default");
        }
        for (let i = 0; i < project.length; i++) {
            let itemId = project[i];
            let item = itemsCache.getObj(itemId);
            
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
            todoCard.addEventListener('keyup', focusOutHandler);
            todoCard.addEventListener('focusout', focusOutHandler);
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
            itemsCache.removeObjFromList(e.currentTarget.id);
            removeElem(e.currentTarget);
        } else if (e.target.matches("input[type='checkbox'].todo-complete")) {
            itemsCache.setPropValue(e.currentTarget.id, "isCompleted", e.target.checked)
        }

    }

    function focusOutHandler(e) {
        e.stopPropagation;
        if (((e.type === "keyup" && e.key === "Enter")
            || (e.type === "focusout"
                && (e.target.getAttribute("type") === "text"
                    || e.target.getAttribute("type") === "number"))
            && e.target.matches("input"))) {

            if (e.target.matches(".todo-title input")) {
                itemsCache.setPropValue(e.currentTarget.id, "name", e.target.value);
            } else if (e.target.matches(".todo-desc input")) {
                itemsCache.setPropValue(e.currentTarget.id, "description", e.target.value);
            } else if (e.target.matches(".todo-priority input")) {
                itemsCache.setPropValue(e.currentTarget.id, "priority", parseFloat(e.target.value));
            } else if (e.target.matches(".project input")){
                projectsCache.setPropValue(e.currentTarget.id, "name", e.target.value);
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
            editText(e.target);
        }
    }
    return {
        render,
        renderItems,
        renderProjects
    }

}