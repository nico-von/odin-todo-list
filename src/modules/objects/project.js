import createUID from "./uid"

export class Project{
    constructor(name, description) {
        this.name = name;
        this.id = createUID("project");
        this.description = description;
    }
}