export function createTodo(project) {
    return {
        id: project.id,
        projectName: project.name,
        items: []
    }
}

export function addTodo(todo, item) {
   todo.items.push(item);
   return todo;
}