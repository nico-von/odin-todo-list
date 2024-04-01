import { createElem } from "./elements";
import {sideBarContainer, mainContainer} from "./containers";

const EDIT_BUTTON_LBL = "Edit";
const DELETE_BUTTON_LBL = "Delete";
const TITLE_CLASS_NAME = "todo-title";
const TITLE_DESC_NAME = "todo-desc";

export function createTodoCard(name="", description="", isCompleted=false, priority, date){
    let todoElem = createElem("div",["todo-card"], mainContainer);
    let todoTitle = createElem("h3", [`${TITLE_CLASS_NAME}`], todoElem);
    let todoDesc = createElem("p", [`${TITLE_DESC_NAME}`], todoElem);

    todoTitle.textContent = name;
    todoDesc.textContent = description;

    let todoElemActions = createElem("div", ["todo-actions"], todoElem);
    let todoEditButton = createElem("button", ["todo-edit-btn"], todoElemActions, "edit-btn");
    todoEditButton.textContent = EDIT_BUTTON_LBL;
    
    let todoDelButton = createElem("button", ["todo-del-btn"], todoElemActions, "del-btn");
    todoDelButton.textContent = DELETE_BUTTON_LBL;

    todoElem.addEventListener('click', todoElemHandler);
}

export function editTodoCard(todoElem, name="", description="", isCompleted, priority, date) {
    let todoTitle = todoElem.querySelector(`.${TITLE_CLASS_NAME}`);
    let todoDesc = todoElem.querySelector(`.${TITLE_DESC_NAME}`);

    todoTitle.textContent = name;
    todoDesc.textContent = description;
}

function todoElemHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.name == "edit-btn"){
        editTodoCard(e.currentTarget, "test", "test desc")
    } else if (e.target.name == "del-btn") {
        console.log("DELETE")
    }
}
