import createUID from "./uid"

export class Project{
    constructor(name, id, description) {
        this.name = name;
        this.id = createUID("project");
        this.description = description;
    }
}