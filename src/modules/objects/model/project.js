import createUID from "../../helpers/uid"

export class Project {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id ? id : createUID("project");

    }
}