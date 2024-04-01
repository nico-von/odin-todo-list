export function createElem(elem = "div", classNames = [], parentElem = null, name = null) {
    const newElem = document.createElement(elem);
    if (parentElem) {
        parentElem.appendChild(newElem);
    }
    if (classNames.length != 0) {
        newElem.classList.add(...classNames);
    }
    if (name) {
        newElem.name = name;
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