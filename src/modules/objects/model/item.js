import createUID from "../../helpers/uid";

export class Item{
    constructor(name, description, priority, id ){
        this.name = name;
        this.description = description;
        this.isCompleted = false;
        this.id = id ? id : createUID("item");
    };
    
    
}
