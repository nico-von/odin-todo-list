export class Item{
    constructor(name, description, project, priority, date){
        this.name = name;
        this.description = description;
        this.project = project;
        this.priority = priority;
        this.date = date;
        this.isCompleted = false;
    };

    get name(){
        return this.name;
    }

    set name(value){
        this.name = value;
    }
    
    get description(){
        return this.description;
    }
    
    set description(value){
        this.description = value;
    }
    
    get project(){
        return this.project;
    }
    
    set project(value){
        this.project = value;
    }
}

export function editItem(item, field, newValue) {
    if ( item.hasOwnProperty(field) && (typeof item[field] !== typeof newValue) && (item[field])) {
        return;
    }

    item[field] = newValue;
    return item;
}