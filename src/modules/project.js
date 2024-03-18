export function  createProject (name, description, id) {
    if (!id){
        return
    }
    
    return { name, description, id};
}

export function editProject (project, field, value) {
    if( project.hasOwnProperty(field) && (typeof project[field] !== typeof value) && project[field]) {
        return
    }
    
    project[field] == value;
    return project;
}