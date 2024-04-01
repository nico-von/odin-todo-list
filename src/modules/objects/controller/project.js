import { createTodoCard } from "../view/todo-cards";
import { todoCardClickHandler, todoCardReturnHandler } from "./event-handlers";

export function createProjectController(container, projectMap, itemsCache, projectsCache) {
    function render(projectId = "default") {
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
                item.date,
                container)
            todoCard.addEventListener('dblclick', todoCardClickHandler);
            todoCard.addEventListener('focusout', todoCardReturnHandler);
        }
    }

    return {
        render,
    }

}