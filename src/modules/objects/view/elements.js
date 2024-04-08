export function createElem(elem = "div", classNames = [], parentElem = null, id = null) {
    const newElem = document.createElement(elem);
    if (parentElem) {
        parentElem.appendChild(newElem);
    }
    if (classNames.length != 0) {
        newElem.classList.add(...classNames);
    }
    if (id) {
        newElem.id = id;
    }
    return newElem;
}

export function resetElement(elem, keepClass = false) {
    if (!keepClass) {
        elem.className = "";
    }
    elem.replaceChildren();
}

export function renderElem(container, children) {
    if (Array.isArray(children)) {
        container.append(...children);
    } else {
        container.appendChild(children)
    }
}
export function createInputElem(container, elemText) {
    let titleInput = createElem("input", [], container);
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("value", elemText);
    titleInput.focus();
}

export function editText(elem) {
    let elemText = elem.textContent;
    elem.textContent = "";
    createInputElem(elem, elemText);

}

export function removeElem(elem) {
    elem.remove();
}

export function commitElemText(elem) {
    let elemParent = elem.parentElement;
    let elemText = elem.value;
    elemParent.textContent = elemText;

}