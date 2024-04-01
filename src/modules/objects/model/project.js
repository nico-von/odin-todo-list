import createUID from "../../helpers/uid"

export class Project{
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.id = createUID("project");
    }
}