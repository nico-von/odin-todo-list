export function createElem(elem = "div", classNames = [], parentElem = null) {
    const newElem = document.createElement(elem);
    if (parentElem) {
        parentElem.appendChild(newElem);
    }
    if (classNames.length != 0) {
        classList.add(...classNames);
    }
    return newElem;
}

export function resetElement(elem) {
    elem.className = "";
    elem.replaceChildren();
}