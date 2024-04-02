import { createProjectsView } from "../view/projects-view";
import { createTodoCard } from "../view/todo-cards";
import { todoCardClickHandler, todoCardDblClickHandler, todoCardFocusOutHandler } from "./event-handlers";

export function createProjectController(projectContainer, itemContainer, projectMap, itemsCache, projectsCache) {
    function renderProjects(){
        let projects = projectsCache.getProjects();
        let projectView = createProjectsView(projects, projectContainer); 
    }
    function renderItems(projectId = "default") {
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
    function render(){
        renderItems();
        renderProjects();
    }
    return {
        render,
        renderItems,
        renderProjects
    }

}