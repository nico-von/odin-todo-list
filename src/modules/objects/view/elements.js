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