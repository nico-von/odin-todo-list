import createUID from "./uid";

export class Item{
    constructor(name, description, priority, date ){
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.date = date;
        this.isCompleted = false;
        this.id = createUID("item");
    };
    
    toggleCompleted() {
        this.isCompleted = !this.isCompleted;
    }
}
