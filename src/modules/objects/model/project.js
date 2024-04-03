import createUID from "../../helpers/uid"

export class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id ? id : createUID("project");
    }
}