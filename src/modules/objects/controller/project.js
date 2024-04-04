import { Item } from "../model/item";
import { commitElemText, editText, editTextNumeric, resetElement, removeElem } from "../view/elements";
import { createAddNewCard } from "../view/general-controls";
import { createProjectCard } from "../view/projects-view";
import { createTodoCard } from "../view/todo-cards";

export function createProjectController(projectContainer, itemContainer, projectMap, itemsCache, projectsCache) {
    function renderProjects() {
        let projects = projectsCache.getObjs();
        for (let i = 0; i < projects.length; i++) {
            let projectCard = createProjectCard(projects[i], projectContainer);
            projectCard.addEventListener('click', projectCardClickHandler);
            projectCard.addEventListener('dblclick', projectCardDblClickHandler);
            projectCard.addEventListener('keyup', focusOutHandler);
            projectCard.addEventListener('focusout', focusOutHandler);
        }
        renderAddCardDiv(projectContainer, "project", addCardHandler);
    }
    function renderItemCard(item, isNewItem = false) {
        const todoCard = createTodoCard(item.name,
            item.description,
            item.isCompleted,
            item.priority,
            item.id,
            isNewItem,
            itemContainer)
        todoCard.addEventListener('click', todoCardClickHandler);
        todoCard.addEventListener('dblclick', todoCardDblClickHandler);
        todoCard.addEventListener('keyup', focusOutHandler);
        todoCard.addEventListener('focusout', focusOutHandler);
    }
    
    function renderAddCardDiv(container, distinguisher, handler, projectId = null){
        let addCardDiv = createAddNewCard(container, distinguisher, projectId);
        addCardDiv.addEventListener('click', handler);
    };
    
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
            renderItemCard(item);
        }
        renderAddCardDiv(itemContainer, "item", addCardHandler, projectId); 
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
        } else if (e.target.matches(".add-card")) {
            console.log("ping");let addCardDiv = createAddNewCard(itemContainer, "item", projectId);
            addCardDiv.addEventListener('click', addCardHandler);
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
            } else if (e.target.matches(".project input")) {
                projectsCache.setPropValue(e.currentTarget.id, "name", e.target.value);
            }
            commitElemText(e.target);
        }
    }

    function projectCardClickHandler(e) {
        if (e.target.matches(".project>h3")) {
            renderItems(e.target.parentElement.id);
        } else if (e.target.matches(".project-actions>button")) {
            projectsCache.removeObjFromList(e.currentTarget.id);
            projectMap.removeProjectFromMap(e.currentTarget.id);
            removeElem(e.currentTarget);
        }
    }
    function projectCardDblClickHandler(e) {
        if (e.target.matches(".project>h3")) {
            editText(e.target);
        }
    }
    function addCardHandler(e) {
        e.stopPropagation;
        if (e.target.matches(".add-card-item")) {
            let projectId = e.target.getAttribute("data-project-id");
            let newItem = new Item("", "", 0);
            itemsCache.addObjToList(newItem);
            projectMap.addItemToProject(projectId, newItem.id);
            
            e.target.remove();
            renderItemCard(newItem, true);
            renderAddCardDiv(itemContainer, "item", addCardHandler, projectId);
        } else if (e.target.matches(".add-card-project")) {
            console.log("PING");
        }
    }
    return {
        render,
        renderItems,
        renderProjects
    }

}