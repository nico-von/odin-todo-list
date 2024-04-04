export function createCache(classTemplate) {
    let cache = {};
    function addObjToList(obj) {
        if (Object.getPrototypeOf(obj) !== classTemplate.prototype) {
            return;
        }
        cache[obj.id] = obj;
    };
    function setPropValue(objId, prop, value) {
        if (!Object.hasOwn(cache[objId], prop) || (prop === "id")){
            return;
        }
        cache[objId][prop] = value;
    };
    function removeObjFromList(objId) {
        delete cache[objId];
    };
    function getObj(objId) {
        return cache[objId];
    }
    function getObjs() {
        return Object.values(cache);
    }
    return {
        addObjToList,
        getObj,
        setPropValue,
        getObjs,
        removeObjFromList
    }
}

export function createProjectMap() {
    let projects = { "default": [] };
    function addProjectToMap(projectId) {
        if (projects.hasOwnProperty(projectId)) {
            return;
        }
        projects[projectId] = [];
    }
    function removeProjectFromMap(projectId) {
        delete projects[projectId];
    }
    function addItemToProject(projectId, itemId) {
        if (!projects.hasOwnProperty(projectId)) {
            addProjectToMap(projectId);
        }
        projects[projectId].push(itemId);
    }
    function getProject(projectId) {
        return projects[projectId];
    }
    function getProjects() {
        return projects;
    }
    function removeItemFromList(projectId, index){
        projects[projectId].splice(index, 1);
    }
    function loadProjectMap(projectObject) {
        projects = projectObject;
    }
    return {
        addProjectToMap,
        removeProjectFromMap,
        addItemToProject,
        getProjects,
        getProject,
        loadProjectMap,
        removeItemFromList
    }
}
