import createUID from "../../helpers/uid";

export class Item{
    constructor(name, description, priority, date ){
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.isCompleted = false;
        this.id = createUID("item");
    };
    
    toggleCompleted() {
        this.isCompleted = !this.isCompleted;
    }
}
