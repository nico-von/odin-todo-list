/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    box-sizing: border-box;
}

body {
    display: grid;
    grid-template-rows: 1fr 5fr 1fr;
    min-height: 100vh;
    margin: 0;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-row: 1/ span 1;
    padding: 1rem;
}

nav {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-left: auto;
}

footer {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 3/ span 1;
}

main {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-row: 2 / span 1;
}

#sidebar-content {
    grid-column: 1 / span 1;
}

#main-content{
    grid-column: 2 / span 1;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":[":root {\n    box-sizing: border-box;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 1fr 5fr 1fr;\n    min-height: 100vh;\n    margin: 0;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    grid-row: 1/ span 1;\n    padding: 1rem;\n}\n\nnav {\n    display: flex;\n    gap: 1rem;\n    justify-content: center;\n    margin-left: auto;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-row: 3/ span 1;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-row: 2 / span 1;\n}\n\n#sidebar-content {\n    grid-column: 1 / span 1;\n}\n\n#main-content{\n    grid-column: 2 / span 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/helpers/uid.js":
/*!************************************!*\
  !*** ./src/modules/helpers/uid.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(prefix = ""){
   return prefix.concat(Date.now(), Date.now() * Math.random());
}

/***/ }),

/***/ "./src/modules/objects/controller/cards.js":
/*!*************************************************!*\
  !*** ./src/modules/objects/controller/cards.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAddCardDiv: () => (/* binding */ renderAddCardDiv),
/* harmony export */   renderItemCard: () => (/* binding */ renderItemCard),
/* harmony export */   renderProjectCard: () => (/* binding */ renderProjectCard)
/* harmony export */ });
/* harmony import */ var _view_general_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/general-controls */ "./src/modules/objects/view/general-controls.js");
/* harmony import */ var _view_projects_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/projects-view */ "./src/modules/objects/view/projects-view.js");
/* harmony import */ var _view_todo_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/todo-cards */ "./src/modules/objects/view/todo-cards.js");
/* harmony import */ var _event_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-handlers */ "./src/modules/objects/controller/event-handlers.js");





function renderItemCard(item, appData, isNewItem = false) {
    const { name, description, isCompleted, priority, id } = item;
    const { itemContainer } = appData;
    const todoCard = (0,_view_todo_cards__WEBPACK_IMPORTED_MODULE_2__.createTodoCard)(name,
        description,
        isCompleted,
        priority,
        id,
        isNewItem,
        itemContainer)
    todoCard.addEventListener('click', (e) => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.todoCardClickHandler)(e, appData));
    todoCard.addEventListener('dblclick', _event_handlers__WEBPACK_IMPORTED_MODULE_3__.todoCardDblClickHandler);
    todoCard.addEventListener('keyup', (e) => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.focusOutHandler)(e, appData));
    todoCard.addEventListener('focusout', (e) => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.focusOutHandler)(e, appData));
}

function renderProjectCard(project,
    appData,
    isNewItem = false) {
    const { projectContainer } = appData;
    let projectCard = (0,_view_projects_view__WEBPACK_IMPORTED_MODULE_1__.createProjectCard)(project, isNewItem, projectContainer);
    projectCard.addEventListener('click', (e) => { (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.projectCardClickHandler)(e, appData) });
    projectCard.addEventListener('dblclick', _event_handlers__WEBPACK_IMPORTED_MODULE_3__.projectCardDblClickHandler);
    projectCard.addEventListener('keyup', (e) => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.focusOutHandler)(e, appData));
    projectCard.addEventListener('focusout', (e) => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.focusOutHandler)(e, appData));
}

function renderAddCardDiv(appData, projectId = null) {
    const { itemContainer, projectContainer } = appData;
    const container = projectId ? itemContainer : projectContainer;
    const distinguisher = projectId ? "item" : "project";
    let addCardDiv = (0,_view_general_controls__WEBPACK_IMPORTED_MODULE_0__.createAddNewCard)(container, distinguisher, projectId);
    addCardDiv.addEventListener('click', (e) => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.addCardHandler)(e, appData));
};

/***/ }),

/***/ "./src/modules/objects/controller/data.js":
/*!************************************************!*\
  !*** ./src/modules/objects/controller/data.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadDataFromLocalStorage: () => (/* binding */ loadDataFromLocalStorage),
/* harmony export */   saveDataToLocalStorage: () => (/* binding */ saveDataToLocalStorage)
/* harmony export */ });
function saveDataToLocalStorage(items, projects, projectMap) {
    localStorage.items = JSON.stringify(items);
    localStorage.projects = JSON.stringify(projects);
    localStorage.projectMap = JSON.stringify(projectMap);
}

function loadDataFromLocalStorage() {
    if (localStorage.items && localStorage.projects && localStorage.projectMap) {
        const items = JSON.parse(localStorage.getItem(items));
        const projects = JSON.parse(localStorage.getItem(projects));
        const projectMap = JSON.parse(localStorage.getItem(projectMap));
        return { items, projects, projectMap };
    }

}

/***/ }),

/***/ "./src/modules/objects/controller/event-handlers.js":
/*!**********************************************************!*\
  !*** ./src/modules/objects/controller/event-handlers.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCardHandler: () => (/* binding */ addCardHandler),
/* harmony export */   focusOutHandler: () => (/* binding */ focusOutHandler),
/* harmony export */   projectCardClickHandler: () => (/* binding */ projectCardClickHandler),
/* harmony export */   projectCardDblClickHandler: () => (/* binding */ projectCardDblClickHandler),
/* harmony export */   todoCardClickHandler: () => (/* binding */ todoCardClickHandler),
/* harmony export */   todoCardDblClickHandler: () => (/* binding */ todoCardDblClickHandler)
/* harmony export */ });
/* harmony import */ var _model_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/item */ "./src/modules/objects/model/item.js");
/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/project */ "./src/modules/objects/model/project.js");
/* harmony import */ var _view_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/elements */ "./src/modules/objects/view/elements.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards */ "./src/modules/objects/controller/cards.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo */ "./src/modules/objects/controller/todo.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/modules/objects/controller/data.js");







function projectCardDblClickHandler(e) {
    e.stopPropagation;
    if (e.target.matches(".project>h3")) {
        (0,_view_elements__WEBPACK_IMPORTED_MODULE_2__.editText)(e.target);
    }
}
function projectCardClickHandler(e, appData) {
    e.stopPropagation;
    const { projectCache, projectMap } = appData;
    if (e.target.matches(".project>h3")) {
        (0,_todo__WEBPACK_IMPORTED_MODULE_4__.renderItems)(appData, e.target.parentElement.id);
    } else if (e.target.matches(".project-actions>button")) {
        projectCache.removeObjFromList(e.currentTarget.id);
        projectMap.removeProjectFromMap(e.currentTarget.id);
        (0,_view_elements__WEBPACK_IMPORTED_MODULE_2__.removeElem)(e.currentTarget);
    }
}

function addCardHandler(e, appData) {
    e.stopPropagation;
    const { itemCache, projectCache, projectMap } = appData;
    if (e.target.matches(".add-card-item")) {
        let projectId = e.target.getAttribute("data-project-id");
        let newItem = new _model_item__WEBPACK_IMPORTED_MODULE_0__.Item("", "", 0);
        itemCache.addObjToList(newItem);
        projectMap.addItemToProject(projectId, newItem.id);

        e.target.remove();
        (0,_cards__WEBPACK_IMPORTED_MODULE_3__.renderItemCard)(newItem, appData, true);
        (0,_cards__WEBPACK_IMPORTED_MODULE_3__.renderAddCardDiv)(appData, projectId);
    } else if (e.target.matches(".add-card-project")) {
        let newProject = new _model_project__WEBPACK_IMPORTED_MODULE_1__.Project("");
        projectCache.addObjToList(newProject);
        projectMap.addProjectToMap(newProject.id);

        e.target.remove();
        (0,_cards__WEBPACK_IMPORTED_MODULE_3__.renderProjectCard)(newProject, appData, true);
        (0,_cards__WEBPACK_IMPORTED_MODULE_3__.renderAddCardDiv)(appData);
    }
    saveData(appData);
}

function focusOutHandler(e, appData) {
    e.stopPropagation;
    const { itemCache, projectCache } = appData;
    if (((e.type === "keyup" && e.key === "Enter")
        || (e.type === "focusout"
            && (e.target.getAttribute("type") === "text"
                || e.target.getAttribute("type") === "number"))
        && e.target.matches("input"))) {

        if (e.target.matches(".todo-title input")) {
            itemCache.setPropValue(e.currentTarget.id, "name", e.target.value);
        } else if (e.target.matches(".todo-desc input")) {
            itemCache.setPropValue(e.currentTarget.id, "description", e.target.value);
        } else if (e.target.matches(".todo-priority input")) {
            itemCache.setPropValue(e.currentTarget.id, "priority", parseFloat(e.target.value));
        } else if (e.target.matches(".project input")) {
            projectCache.setPropValue(e.currentTarget.id, "name", e.target.value);
        }
        (0,_view_elements__WEBPACK_IMPORTED_MODULE_2__.commitElemText)(e.target);
        saveData(appData);
    }
}

function todoCardClickHandler(e, appData) {
    e.stopPropagation;
    const { itemCache } = appData;
    if (e.target.matches(".todo-del-btn")) {
        itemCache.removeObjFromList(e.currentTarget.id);
        (0,_view_elements__WEBPACK_IMPORTED_MODULE_2__.removeElem)(e.currentTarget);
    } else if (e.target.matches("input[type='checkbox'].todo-complete")) {
        itemCache.setPropValue(e.currentTarget.id, "isCompleted", e.target.checked)
    }

}

function todoCardDblClickHandler(e) {
    e.stopPropagation;
    if (e.target.matches(".todo-title>h3:first-child")
        || e.target.matches(".todo-desc>p:first-child")) {
        (0,_view_elements__WEBPACK_IMPORTED_MODULE_2__.editText)(e.target);
    } else if (e.target.matches(".todo-priority>p:first-child")) {
        (0,_view_elements__WEBPACK_IMPORTED_MODULE_2__.editTextNumeric)(e.target);
    }
}

function saveData(appData) {
    const {itemCache, projectCache, projectMap} = appData;
    (0,_data__WEBPACK_IMPORTED_MODULE_5__.saveDataToLocalStorage)(itemCache.getCache(), projectCache.getCache(), projectMap.getProjects())
}

/***/ }),

/***/ "./src/modules/objects/controller/todo.js":
/*!************************************************!*\
  !*** ./src/modules/objects/controller/todo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   load: () => (/* binding */ load),
/* harmony export */   renderItems: () => (/* binding */ renderItems)
/* harmony export */ });
/* harmony import */ var _view_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/elements */ "./src/modules/objects/view/elements.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ "./src/modules/objects/controller/cards.js");



function renderItems(appData, projectId = "default") {
    const { itemContainer, projectMap, itemCache } = appData;
    (0,_view_elements__WEBPACK_IMPORTED_MODULE_0__.resetElement)(itemContainer);
    let project = projectMap.getProject(projectId);
    if (!project) {
        project = projectMap.getProject("default");
    }
    for (let i = 0; i < project.length; i++) {
        let itemId = project[i];
        let item = itemCache.getObj(itemId);

        if (!item) {
            projectMap.removeItemFromList(projectId, i);
            continue;
        }
        (0,_cards__WEBPACK_IMPORTED_MODULE_1__.renderItemCard)(item, appData);
    }
    (0,_cards__WEBPACK_IMPORTED_MODULE_1__.renderAddCardDiv)(appData, projectId);
}

function renderProjects(appData) {
    const { projectCache } = appData;
    let projects = projectCache.getObjs();
    for (let i = 0; i < projects.length; i++) {
        (0,_cards__WEBPACK_IMPORTED_MODULE_1__.renderProjectCard)(projects[i], appData, false);
    }
    (0,_cards__WEBPACK_IMPORTED_MODULE_1__.renderAddCardDiv)(appData);
}

function load(itemContainer, projectContainer, projectCache, itemCache, projectMap) {
    const appData = { itemContainer, projectContainer, projectCache, itemCache, projectMap }
    renderItems(appData);
    renderProjects(appData);
}


/***/ }),

/***/ "./src/modules/objects/model/item.js":
/*!*******************************************!*\
  !*** ./src/modules/objects/model/item.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var _helpers_uid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/uid */ "./src/modules/helpers/uid.js");


class Item{
    constructor(name, description, priority, id ){
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.isCompleted = false;
        this.id = id ? id : (0,_helpers_uid__WEBPACK_IMPORTED_MODULE_0__["default"])("item");
    };
    
    
}


/***/ }),

/***/ "./src/modules/objects/model/project.js":
/*!**********************************************!*\
  !*** ./src/modules/objects/model/project.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _helpers_uid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/uid */ "./src/modules/helpers/uid.js");


class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id ? id : (0,_helpers_uid__WEBPACK_IMPORTED_MODULE_0__["default"])("project");
    }
}

/***/ }),

/***/ "./src/modules/objects/model/todo.js":
/*!*******************************************!*\
  !*** ./src/modules/objects/model/todo.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCache: () => (/* binding */ createCache),
/* harmony export */   createProjectMap: () => (/* binding */ createProjectMap)
/* harmony export */ });
function createCache(classTemplate) {
    let cache = {};
    function addObjToList(obj) {
        if (Object.getPrototypeOf(obj) !== classTemplate.prototype) {
            return;
        }
        cache[obj.id] = obj;
    };
    function setPropValue(objId, prop, value) {
        if (!Object.hasOwn(cache[objId], prop) || (prop === "id")){
            return;
        }
        cache[objId][prop] = value;
    };
    function removeObjFromList(objId) {
        delete cache[objId];
    };
    function getObj(objId) {
        return cache[objId];
    }
    function getObjs() {
        return Object.values(cache);
    }
    function getCache() {
        return cache;
    }
    return {
        addObjToList,
        getObj,
        setPropValue,
        getObjs,
        getCache,
        removeObjFromList
    }
}

function createProjectMap() {
    let projects = { "default": [] };
    function addProjectToMap(projectId) {
        if (projects.hasOwnProperty(projectId)) {
            return;
        }
        projects[projectId] = [];
    }
    function removeProjectFromMap(projectId) {
        delete projects[projectId];
    }
    function addItemToProject(projectId, itemId) {
        if (!projects.hasOwnProperty(projectId)) {
            addProjectToMap(projectId);
        }
        projects[projectId].push(itemId);
    }
    function getProject(projectId) {
        return projects[projectId];
    }
    function getProjects() {
        return projects;
    }
    function removeItemFromList(projectId, index){
        projects[projectId].splice(index, 1);
    }
    function loadProjectMap(projectObject) {
        projects = projectObject;
    }
    return {
        addProjectToMap,
        removeProjectFromMap,
        addItemToProject,
        getProjects,
        getProject,
        loadProjectMap,
        removeItemFromList
    }
}


/***/ }),

/***/ "./src/modules/objects/view/containers.js":
/*!************************************************!*\
  !*** ./src/modules/objects/view/containers.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainContainer: () => (/* binding */ mainContainer),
/* harmony export */   sidebarContainer: () => (/* binding */ sidebarContainer)
/* harmony export */ });
const sidebarContainer = document.querySelector("#sidebar-content");
const mainContainer = document.querySelector("#main-content");


/***/ }),

/***/ "./src/modules/objects/view/elements.js":
/*!**********************************************!*\
  !*** ./src/modules/objects/view/elements.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commitElemText: () => (/* binding */ commitElemText),
/* harmony export */   createElem: () => (/* binding */ createElem),
/* harmony export */   createInputElem: () => (/* binding */ createInputElem),
/* harmony export */   editText: () => (/* binding */ editText),
/* harmony export */   editTextNumeric: () => (/* binding */ editTextNumeric),
/* harmony export */   removeElem: () => (/* binding */ removeElem),
/* harmony export */   renderElem: () => (/* binding */ renderElem),
/* harmony export */   resetElement: () => (/* binding */ resetElement)
/* harmony export */ });
function createElem(elem = "div", classNames = [], parentElem = null, id = null) {
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

function resetElement(elem, keepClass = false) {
    if (!keepClass) {
        elem.className = "";
    }
    elem.replaceChildren();
}

function renderElem(container, children) {
    if (Array.isArray(children)) {
        container.append(...children);
    } else {
        container.appendChild(children)
    }
}
function createInputElem(container, elemText) {
    let titleInput = createElem("input", [], container);
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("value", elemText);
    titleInput.focus();
}

function editText(elem) {
    let elemText = elem.textContent;
    elem.textContent = "";
    createInputElem(elem, elemText);

}

function editTextNumeric(elem) {
    let elemText = elem.textContent;
    elem.textContent = "";

    let titleInput = createElem("input", [], elem);
    titleInput.setAttribute("type", "number");
    titleInput.setAttribute("value", elemText);
    titleInput.setAttribute("min", "0");
    titleInput.focus();
}

function removeElem(elem) {
    elem.remove();
}

function commitElemText(elem) {
    let elemParent = elem.parentElement;
    let elemText = elem.value;
    elemParent.textContent = elemText;

}

/***/ }),

/***/ "./src/modules/objects/view/general-controls.js":
/*!******************************************************!*\
  !*** ./src/modules/objects/view/general-controls.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddNewCard: () => (/* binding */ createAddNewCard)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/modules/objects/view/elements.js");


function createAddNewCard(container, distinguisher, projectId = null){
    let addCardDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("div",[`add-card-${distinguisher}`],container);
    addCardDiv.textContent = "+";
    if (projectId) {
        addCardDiv.setAttribute("data-project-id",projectId);
    }
    return addCardDiv;
}

/***/ }),

/***/ "./src/modules/objects/view/projects-view.js":
/*!***************************************************!*\
  !*** ./src/modules/objects/view/projects-view.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectCard: () => (/* binding */ createProjectCard)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/modules/objects/view/elements.js");


function createProjectCard(p, isNewItem, container) {
    let project = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("div", ["project"], container, p.id);
    let projectTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("h3", [], project);
    if (isNewItem){
       (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createInputElem)(projectTitle, ""); 
    } else {
        projectTitle.textContent = p.name;
    }

    let projectActions = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("div",["project-actions"], project);
    let deleteProject = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("button", [], projectActions);
    deleteProject.textContent = "Delete";
    return project;
}

/***/ }),

/***/ "./src/modules/objects/view/todo-cards.js":
/*!************************************************!*\
  !*** ./src/modules/objects/view/todo-cards.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodoCard: () => (/* binding */ createTodoCard)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/modules/objects/view/elements.js");



function createTodoCard(name = "", description = "", isCompleted = false, priority, id, isNewItemCard, container) {
    let todoElem = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("div", ["todo-card"], container, id);
    let todoTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("div", ["todo-title"], todoElem);
    let todoDesc = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("div", ["todo-desc"], todoElem);
    let todoTitleText = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("h3", [], todoTitle);
    let todoDescText = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("p", [], todoDesc);
    if (isNewItemCard) {
        (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createInputElem)(todoTitleText, "");
    } else {
        todoTitleText.textContent = name;
    }
    todoDescText.textContent = description === "" ? "Description" : description;

    let todoPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("div", ["todo-priority"], todoElem);
    let todoPriorityText = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("p", [], todoPriority);
    todoPriorityText.textContent = priority;

    let toggleId = `toggle${id}`;
    let todoElemActions = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("div", ["todo-actions"], todoElem);
    let todoCompleted = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("input", ["todo-complete"], todoElemActions, toggleId);
    todoCompleted.setAttribute("type", "checkbox");
    if (isCompleted) todoCompleted.setAttribute("checked", "");

    let todoPriorityLabel = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("label", [], todoElemActions);
    todoPriorityLabel.textContent = "Completed";
    todoPriorityLabel.htmlFor = toggleId;

    let todoDelButton = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("button", ["todo-del-btn"], todoElemActions);
    todoDelButton.textContent = "Delete";

    return todoElem;
}


/***/ }),

/***/ "./src/modules/sample-data/sample-data.json":
/*!**************************************************!*\
  !*** ./src/modules/sample-data/sample-data.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"items":[{"name":"Fetch the dog.","description":"The dog needs fetching","priority":0,"id":"sample-1","isCompleted":false},{"name":"Get CPR","description":"The Chumbie needs CPR","priority":1,"id":"sample-2","isCompleted":false}],"projects":[{"name":"Sample Project","id":"project-sample-1"}],"projectMap":{"default":["sample-1"],"project-sample-1":["sample-2"]}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_objects_view_containers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/objects/view/containers.js */ "./src/modules/objects/view/containers.js");
/* harmony import */ var _modules_sample_data_sample_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sample-data/sample-data.json */ "./src/modules/sample-data/sample-data.json");
/* harmony import */ var _modules_objects_controller_todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/objects/controller/todo.js */ "./src/modules/objects/controller/todo.js");
/* harmony import */ var _modules_objects_model_item_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/objects/model/item.js */ "./src/modules/objects/model/item.js");
/* harmony import */ var _modules_objects_model_project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/objects/model/project.js */ "./src/modules/objects/model/project.js");
/* harmony import */ var _modules_objects_model_todo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/objects/model/todo.js */ "./src/modules/objects/model/todo.js");
/* harmony import */ var _modules_objects_controller_data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/objects/controller/data.js */ "./src/modules/objects/controller/data.js");









const itemCache = (0,_modules_objects_model_todo_js__WEBPACK_IMPORTED_MODULE_6__.createCache)(_modules_objects_model_item_js__WEBPACK_IMPORTED_MODULE_4__.Item);
const projectCache = (0,_modules_objects_model_todo_js__WEBPACK_IMPORTED_MODULE_6__.createCache)(_modules_objects_model_project_js__WEBPACK_IMPORTED_MODULE_5__.Project);
const projectMap = (0,_modules_objects_model_todo_js__WEBPACK_IMPORTED_MODULE_6__.createProjectMap)();

// let defProject = new Project("General", "default");
// projectCache.addObjToList(defProject);

// const sampleItems = sampleData.items;
// const sampleProjects = sampleData.projects;
// const sampleProjectMap = sampleData.projectMap;

// for (let project of sampleProjects) {
//     const sampleProject = new Project(project.name, project.id);
//     projectCache.addObjToList(sampleProject);
// }

// for (let item of sampleItems) {
//     const sampleItem = new Item(item.name, item.description, item.priority, item.id);
//     itemCache.addObjToList(sampleItem);
// }
// projectMap.loadProjectMap(sampleProjectMap);We haven’t learned any techniques for actually storing our data anywhere, so when the user refreshes the page, all of their todos will disappear! You should add some persistence to this todo app using the Web Storage API.

const existingData = (0,_modules_objects_controller_data_js__WEBPACK_IMPORTED_MODULE_7__.loadDataFromLocalStorage)(itemCache.getCache(), projectCache.getCache(), projectMap.getProjects());
console.log(existingData)
;(0,_modules_objects_controller_todo_js__WEBPACK_IMPORTED_MODULE_3__.load)(_modules_objects_view_containers_js__WEBPACK_IMPORTED_MODULE_1__.mainContainer, _modules_objects_view_containers_js__WEBPACK_IMPORTED_MODULE_1__.sidebarContainer, projectCache, itemCache, projectMap);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2tFO0FBQ0Q7QUFDMUI7QUFDTDtBQUNNO0FBQ21CO0FBQ0E7O0FBRWhGLGtCQUFrQiwyRUFBVyxDQUFDLGdFQUFJO0FBQ2xDLHFCQUFxQiwyRUFBVyxDQUFDLHNFQUFPO0FBQ3hDLG1CQUFtQixnRkFBZ0I7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDOztBQUUvQyxxQkFBcUIsNkZBQXdCO0FBQzdDO0FBQ0EsMEVBQUksQ0FBQyw4RUFBYSxFQUFFLGlGQUFnQix1QyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaGVscGVycy91aWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9vYmplY3RzL2NvbnRyb2xsZXIvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9vYmplY3RzL2NvbnRyb2xsZXIvZGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29iamVjdHMvY29udHJvbGxlci9ldmVudC1oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29iamVjdHMvY29udHJvbGxlci90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvb2JqZWN0cy9tb2RlbC9pdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvb2JqZWN0cy9tb2RlbC9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvb2JqZWN0cy9tb2RlbC90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvb2JqZWN0cy92aWV3L2NvbnRhaW5lcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9vYmplY3RzL3ZpZXcvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9vYmplY3RzL3ZpZXcvZ2VuZXJhbC1jb250cm9scy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29iamVjdHMvdmlldy9wcm9qZWN0cy12aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvb2JqZWN0cy92aWV3L3RvZG8tY2FyZHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ3JpZC1yb3c6IDEvIHNwYW4gMTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXJvdzogMy8gc3BhbiAxO1xufVxuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcbn1cblxuI3NpZGViYXItY29udGVudCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XG59XG5cbiNtYWluLWNvbnRlbnR7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnIgMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtcm93OiAxLyBzcGFuIDE7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDMvIHNwYW4gMTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XFxufVxcblxcbiNzaWRlYmFyLWNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMTtcXG59XFxuXFxuI21haW4tY29udGVudHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcmVmaXggPSBcIlwiKXtcbiAgIHJldHVybiBwcmVmaXguY29uY2F0KERhdGUubm93KCksIERhdGUubm93KCkgKiBNYXRoLnJhbmRvbSgpKTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVBZGROZXdDYXJkIH0gZnJvbSBcIi4uL3ZpZXcvZ2VuZXJhbC1jb250cm9sc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENhcmQgfSBmcm9tIFwiLi4vdmlldy9wcm9qZWN0cy12aWV3XCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvQ2FyZCB9IGZyb20gXCIuLi92aWV3L3RvZG8tY2FyZHNcIjtcbmltcG9ydCB7XG4gICAgdG9kb0NhcmRDbGlja0hhbmRsZXIsXG4gICAgdG9kb0NhcmREYmxDbGlja0hhbmRsZXIsXG4gICAgZm9jdXNPdXRIYW5kbGVyLFxuICAgIGFkZENhcmRIYW5kbGVyLFxuICAgIHByb2plY3RDYXJkQ2xpY2tIYW5kbGVyLFxuICAgIHByb2plY3RDYXJkRGJsQ2xpY2tIYW5kbGVyXG59IGZyb20gXCIuL2V2ZW50LWhhbmRsZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJdGVtQ2FyZChpdGVtLCBhcHBEYXRhLCBpc05ld0l0ZW0gPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIGlzQ29tcGxldGVkLCBwcmlvcml0eSwgaWQgfSA9IGl0ZW07XG4gICAgY29uc3QgeyBpdGVtQ29udGFpbmVyIH0gPSBhcHBEYXRhO1xuICAgIGNvbnN0IHRvZG9DYXJkID0gY3JlYXRlVG9kb0NhcmQobmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGlzQ29tcGxldGVkLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgaWQsXG4gICAgICAgIGlzTmV3SXRlbSxcbiAgICAgICAgaXRlbUNvbnRhaW5lcilcbiAgICB0b2RvQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0b2RvQ2FyZENsaWNrSGFuZGxlcihlLCBhcHBEYXRhKSk7XG4gICAgdG9kb0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0b2RvQ2FyZERibENsaWNrSGFuZGxlcik7XG4gICAgdG9kb0NhcmQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gZm9jdXNPdXRIYW5kbGVyKGUsIGFwcERhdGEpKTtcbiAgICB0b2RvQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChlKSA9PiBmb2N1c091dEhhbmRsZXIoZSwgYXBwRGF0YSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdENhcmQocHJvamVjdCxcbiAgICBhcHBEYXRhLFxuICAgIGlzTmV3SXRlbSA9IGZhbHNlKSB7XG4gICAgY29uc3QgeyBwcm9qZWN0Q29udGFpbmVyIH0gPSBhcHBEYXRhO1xuICAgIGxldCBwcm9qZWN0Q2FyZCA9IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QsIGlzTmV3SXRlbSwgcHJvamVjdENvbnRhaW5lcik7XG4gICAgcHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBwcm9qZWN0Q2FyZENsaWNrSGFuZGxlcihlLCBhcHBEYXRhKSB9KTtcbiAgICBwcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHByb2plY3RDYXJkRGJsQ2xpY2tIYW5kbGVyKTtcbiAgICBwcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiBmb2N1c091dEhhbmRsZXIoZSwgYXBwRGF0YSkpO1xuICAgIHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGUpID0+IGZvY3VzT3V0SGFuZGxlcihlLCBhcHBEYXRhKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBZGRDYXJkRGl2KGFwcERhdGEsIHByb2plY3RJZCA9IG51bGwpIHtcbiAgICBjb25zdCB7IGl0ZW1Db250YWluZXIsIHByb2plY3RDb250YWluZXIgfSA9IGFwcERhdGE7XG4gICAgY29uc3QgY29udGFpbmVyID0gcHJvamVjdElkID8gaXRlbUNvbnRhaW5lciA6IHByb2plY3RDb250YWluZXI7XG4gICAgY29uc3QgZGlzdGluZ3Vpc2hlciA9IHByb2plY3RJZCA/IFwiaXRlbVwiIDogXCJwcm9qZWN0XCI7XG4gICAgbGV0IGFkZENhcmREaXYgPSBjcmVhdGVBZGROZXdDYXJkKGNvbnRhaW5lciwgZGlzdGluZ3Vpc2hlciwgcHJvamVjdElkKTtcbiAgICBhZGRDYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGFkZENhcmRIYW5kbGVyKGUsIGFwcERhdGEpKTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoaXRlbXMsIHByb2plY3RzLCBwcm9qZWN0TWFwKSB7XG4gICAgbG9jYWxTdG9yYWdlLml0ZW1zID0gSlNPTi5zdHJpbmdpZnkoaXRlbXMpO1xuICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzKTtcbiAgICBsb2NhbFN0b3JhZ2UucHJvamVjdE1hcCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RNYXApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuaXRlbXMgJiYgbG9jYWxTdG9yYWdlLnByb2plY3RzICYmIGxvY2FsU3RvcmFnZS5wcm9qZWN0TWFwKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtcykpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdHMpKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE1hcCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE1hcCkpO1xuICAgICAgICByZXR1cm4geyBpdGVtcywgcHJvamVjdHMsIHByb2plY3RNYXAgfTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL21vZGVsL2l0ZW1cIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vbW9kZWwvcHJvamVjdFwiO1xuaW1wb3J0IHsgY29tbWl0RWxlbVRleHQsIGVkaXRUZXh0LCBlZGl0VGV4dE51bWVyaWMsIHJlbW92ZUVsZW0gfSBmcm9tIFwiLi4vdmlldy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgcmVuZGVyQWRkQ2FyZERpdiwgcmVuZGVySXRlbUNhcmQsIHJlbmRlclByb2plY3RDYXJkIH0gZnJvbSBcIi4vY2FyZHNcIjtcbmltcG9ydCB7IHJlbmRlckl0ZW1zIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2RhdGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RDYXJkRGJsQ2xpY2tIYW5kbGVyKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbjtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5wcm9qZWN0PmgzXCIpKSB7XG4gICAgICAgIGVkaXRUZXh0KGUudGFyZ2V0KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENhcmRDbGlja0hhbmRsZXIoZSwgYXBwRGF0YSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uO1xuICAgIGNvbnN0IHsgcHJvamVjdENhY2hlLCBwcm9qZWN0TWFwIH0gPSBhcHBEYXRhO1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnByb2plY3Q+aDNcIikpIHtcbiAgICAgICAgcmVuZGVySXRlbXMoYXBwRGF0YSwgZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnByb2plY3QtYWN0aW9ucz5idXR0b25cIikpIHtcbiAgICAgICAgcHJvamVjdENhY2hlLnJlbW92ZU9iakZyb21MaXN0KGUuY3VycmVudFRhcmdldC5pZCk7XG4gICAgICAgIHByb2plY3RNYXAucmVtb3ZlUHJvamVjdEZyb21NYXAoZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICAgICAgcmVtb3ZlRWxlbShlLmN1cnJlbnRUYXJnZXQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhcmRIYW5kbGVyKGUsIGFwcERhdGEpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbjtcbiAgICBjb25zdCB7IGl0ZW1DYWNoZSwgcHJvamVjdENhY2hlLCBwcm9qZWN0TWFwIH0gPSBhcHBEYXRhO1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmFkZC1jYXJkLWl0ZW1cIikpIHtcbiAgICAgICAgbGV0IHByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKTtcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSBuZXcgSXRlbShcIlwiLCBcIlwiLCAwKTtcbiAgICAgICAgaXRlbUNhY2hlLmFkZE9ialRvTGlzdChuZXdJdGVtKTtcbiAgICAgICAgcHJvamVjdE1hcC5hZGRJdGVtVG9Qcm9qZWN0KHByb2plY3RJZCwgbmV3SXRlbS5pZCk7XG5cbiAgICAgICAgZS50YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIHJlbmRlckl0ZW1DYXJkKG5ld0l0ZW0sIGFwcERhdGEsIHRydWUpO1xuICAgICAgICByZW5kZXJBZGRDYXJkRGl2KGFwcERhdGEsIHByb2plY3RJZCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmFkZC1jYXJkLXByb2plY3RcIikpIHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcIlwiKTtcbiAgICAgICAgcHJvamVjdENhY2hlLmFkZE9ialRvTGlzdChuZXdQcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdE1hcC5hZGRQcm9qZWN0VG9NYXAobmV3UHJvamVjdC5pZCk7XG5cbiAgICAgICAgZS50YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIHJlbmRlclByb2plY3RDYXJkKG5ld1Byb2plY3QsIGFwcERhdGEsIHRydWUpO1xuICAgICAgICByZW5kZXJBZGRDYXJkRGl2KGFwcERhdGEpO1xuICAgIH1cbiAgICBzYXZlRGF0YShhcHBEYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzT3V0SGFuZGxlcihlLCBhcHBEYXRhKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb247XG4gICAgY29uc3QgeyBpdGVtQ2FjaGUsIHByb2plY3RDYWNoZSB9ID0gYXBwRGF0YTtcbiAgICBpZiAoKChlLnR5cGUgPT09IFwia2V5dXBcIiAmJiBlLmtleSA9PT0gXCJFbnRlclwiKVxuICAgICAgICB8fCAoZS50eXBlID09PSBcImZvY3Vzb3V0XCJcbiAgICAgICAgICAgICYmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcInRleHRcIlxuICAgICAgICAgICAgICAgIHx8IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT09IFwibnVtYmVyXCIpKVxuICAgICAgICAmJiBlLnRhcmdldC5tYXRjaGVzKFwiaW5wdXRcIikpKSB7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIudG9kby10aXRsZSBpbnB1dFwiKSkge1xuICAgICAgICAgICAgaXRlbUNhY2hlLnNldFByb3BWYWx1ZShlLmN1cnJlbnRUYXJnZXQuaWQsIFwibmFtZVwiLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi50b2RvLWRlc2MgaW5wdXRcIikpIHtcbiAgICAgICAgICAgIGl0ZW1DYWNoZS5zZXRQcm9wVmFsdWUoZS5jdXJyZW50VGFyZ2V0LmlkLCBcImRlc2NyaXB0aW9uXCIsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnRvZG8tcHJpb3JpdHkgaW5wdXRcIikpIHtcbiAgICAgICAgICAgIGl0ZW1DYWNoZS5zZXRQcm9wVmFsdWUoZS5jdXJyZW50VGFyZ2V0LmlkLCBcInByaW9yaXR5XCIsIHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnByb2plY3QgaW5wdXRcIikpIHtcbiAgICAgICAgICAgIHByb2plY3RDYWNoZS5zZXRQcm9wVmFsdWUoZS5jdXJyZW50VGFyZ2V0LmlkLCBcIm5hbWVcIiwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbW1pdEVsZW1UZXh0KGUudGFyZ2V0KTtcbiAgICAgICAgc2F2ZURhdGEoYXBwRGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0NhcmRDbGlja0hhbmRsZXIoZSwgYXBwRGF0YSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uO1xuICAgIGNvbnN0IHsgaXRlbUNhY2hlIH0gPSBhcHBEYXRhO1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnRvZG8tZGVsLWJ0blwiKSkge1xuICAgICAgICBpdGVtQ2FjaGUucmVtb3ZlT2JqRnJvbUxpc3QoZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICAgICAgcmVtb3ZlRWxlbShlLmN1cnJlbnRUYXJnZXQpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcImlucHV0W3R5cGU9J2NoZWNrYm94J10udG9kby1jb21wbGV0ZVwiKSkge1xuICAgICAgICBpdGVtQ2FjaGUuc2V0UHJvcFZhbHVlKGUuY3VycmVudFRhcmdldC5pZCwgXCJpc0NvbXBsZXRlZFwiLCBlLnRhcmdldC5jaGVja2VkKVxuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0NhcmREYmxDbGlja0hhbmRsZXIoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uO1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnRvZG8tdGl0bGU+aDM6Zmlyc3QtY2hpbGRcIilcbiAgICAgICAgfHwgZS50YXJnZXQubWF0Y2hlcyhcIi50b2RvLWRlc2M+cDpmaXJzdC1jaGlsZFwiKSkge1xuICAgICAgICBlZGl0VGV4dChlLnRhcmdldCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnRvZG8tcHJpb3JpdHk+cDpmaXJzdC1jaGlsZFwiKSkge1xuICAgICAgICBlZGl0VGV4dE51bWVyaWMoZS50YXJnZXQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2F2ZURhdGEoYXBwRGF0YSkge1xuICAgIGNvbnN0IHtpdGVtQ2FjaGUsIHByb2plY3RDYWNoZSwgcHJvamVjdE1hcH0gPSBhcHBEYXRhO1xuICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoaXRlbUNhY2hlLmdldENhY2hlKCksIHByb2plY3RDYWNoZS5nZXRDYWNoZSgpLCBwcm9qZWN0TWFwLmdldFByb2plY3RzKCkpXG59IiwiaW1wb3J0IHsgcmVzZXRFbGVtZW50IH0gZnJvbSBcIi4uL3ZpZXcvZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlbmRlckFkZENhcmREaXYsIHJlbmRlclByb2plY3RDYXJkLCByZW5kZXJJdGVtQ2FyZCB9IGZyb20gXCIuL2NhcmRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJdGVtcyhhcHBEYXRhLCBwcm9qZWN0SWQgPSBcImRlZmF1bHRcIikge1xuICAgIGNvbnN0IHsgaXRlbUNvbnRhaW5lciwgcHJvamVjdE1hcCwgaXRlbUNhY2hlIH0gPSBhcHBEYXRhO1xuICAgIHJlc2V0RWxlbWVudChpdGVtQ29udGFpbmVyKTtcbiAgICBsZXQgcHJvamVjdCA9IHByb2plY3RNYXAuZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgIGlmICghcHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0ID0gcHJvamVjdE1hcC5nZXRQcm9qZWN0KFwiZGVmYXVsdFwiKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpdGVtSWQgPSBwcm9qZWN0W2ldO1xuICAgICAgICBsZXQgaXRlbSA9IGl0ZW1DYWNoZS5nZXRPYmooaXRlbUlkKTtcblxuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHByb2plY3RNYXAucmVtb3ZlSXRlbUZyb21MaXN0KHByb2plY3RJZCwgaSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJJdGVtQ2FyZChpdGVtLCBhcHBEYXRhKTtcbiAgICB9XG4gICAgcmVuZGVyQWRkQ2FyZERpdihhcHBEYXRhLCBwcm9qZWN0SWQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhhcHBEYXRhKSB7XG4gICAgY29uc3QgeyBwcm9qZWN0Q2FjaGUgfSA9IGFwcERhdGE7XG4gICAgbGV0IHByb2plY3RzID0gcHJvamVjdENhY2hlLmdldE9ianMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlbmRlclByb2plY3RDYXJkKHByb2plY3RzW2ldLCBhcHBEYXRhLCBmYWxzZSk7XG4gICAgfVxuICAgIHJlbmRlckFkZENhcmREaXYoYXBwRGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkKGl0ZW1Db250YWluZXIsIHByb2plY3RDb250YWluZXIsIHByb2plY3RDYWNoZSwgaXRlbUNhY2hlLCBwcm9qZWN0TWFwKSB7XG4gICAgY29uc3QgYXBwRGF0YSA9IHsgaXRlbUNvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lciwgcHJvamVjdENhY2hlLCBpdGVtQ2FjaGUsIHByb2plY3RNYXAgfVxuICAgIHJlbmRlckl0ZW1zKGFwcERhdGEpO1xuICAgIHJlbmRlclByb2plY3RzKGFwcERhdGEpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVVJRCBmcm9tIFwiLi4vLi4vaGVscGVycy91aWRcIjtcblxuZXhwb3J0IGNsYXNzIEl0ZW17XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpZCApe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gaWQgPyBpZCA6IGNyZWF0ZVVJRChcIml0ZW1cIik7XG4gICAgfTtcbiAgICBcbiAgICBcbn1cbiIsImltcG9ydCBjcmVhdGVVSUQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvdWlkXCJcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGlkKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaWQgPSBpZCA/IGlkIDogY3JlYXRlVUlEKFwicHJvamVjdFwiKTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKGNsYXNzVGVtcGxhdGUpIHtcbiAgICBsZXQgY2FjaGUgPSB7fTtcbiAgICBmdW5jdGlvbiBhZGRPYmpUb0xpc3Qob2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSAhPT0gY2xhc3NUZW1wbGF0ZS5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYWNoZVtvYmouaWRdID0gb2JqO1xuICAgIH07XG4gICAgZnVuY3Rpb24gc2V0UHJvcFZhbHVlKG9iaklkLCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIU9iamVjdC5oYXNPd24oY2FjaGVbb2JqSWRdLCBwcm9wKSB8fCAocHJvcCA9PT0gXCJpZFwiKSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FjaGVbb2JqSWRdW3Byb3BdID0gdmFsdWU7XG4gICAgfTtcbiAgICBmdW5jdGlvbiByZW1vdmVPYmpGcm9tTGlzdChvYmpJZCkge1xuICAgICAgICBkZWxldGUgY2FjaGVbb2JqSWRdO1xuICAgIH07XG4gICAgZnVuY3Rpb24gZ2V0T2JqKG9iaklkKSB7XG4gICAgICAgIHJldHVybiBjYWNoZVtvYmpJZF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE9ianMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKGNhY2hlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q2FjaGUoKSB7XG4gICAgICAgIHJldHVybiBjYWNoZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkT2JqVG9MaXN0LFxuICAgICAgICBnZXRPYmosXG4gICAgICAgIHNldFByb3BWYWx1ZSxcbiAgICAgICAgZ2V0T2JqcyxcbiAgICAgICAgZ2V0Q2FjaGUsXG4gICAgICAgIHJlbW92ZU9iakZyb21MaXN0XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdE1hcCgpIHtcbiAgICBsZXQgcHJvamVjdHMgPSB7IFwiZGVmYXVsdFwiOiBbXSB9O1xuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RUb01hcChwcm9qZWN0SWQpIHtcbiAgICAgICAgaWYgKHByb2plY3RzLmhhc093blByb3BlcnR5KHByb2plY3RJZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SWRdID0gW107XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tTWFwKHByb2plY3RJZCkge1xuICAgICAgICBkZWxldGUgcHJvamVjdHNbcHJvamVjdElkXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkSXRlbVRvUHJvamVjdChwcm9qZWN0SWQsIGl0ZW1JZCkge1xuICAgICAgICBpZiAoIXByb2plY3RzLmhhc093blByb3BlcnR5KHByb2plY3RJZCkpIHtcbiAgICAgICAgICAgIGFkZFByb2plY3RUb01hcChwcm9qZWN0SWQpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJZF0ucHVzaChpdGVtSWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0KHByb2plY3RJZCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdElkXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21MaXN0KHByb2plY3RJZCwgaW5kZXgpe1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SWRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRQcm9qZWN0TWFwKHByb2plY3RPYmplY3QpIHtcbiAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0T2JqZWN0O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0VG9NYXAsXG4gICAgICAgIHJlbW92ZVByb2plY3RGcm9tTWFwLFxuICAgICAgICBhZGRJdGVtVG9Qcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0cyxcbiAgICAgICAgZ2V0UHJvamVjdCxcbiAgICAgICAgbG9hZFByb2plY3RNYXAsXG4gICAgICAgIHJlbW92ZUl0ZW1Gcm9tTGlzdFxuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLWNvbnRlbnRcIik7XG5leHBvcnQgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW0oZWxlbSA9IFwiZGl2XCIsIGNsYXNzTmFtZXMgPSBbXSwgcGFyZW50RWxlbSA9IG51bGwsIGlkID0gbnVsbCkge1xuICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xuICAgIGlmIChwYXJlbnRFbGVtKSB7XG4gICAgICAgIHBhcmVudEVsZW0uYXBwZW5kQ2hpbGQobmV3RWxlbSk7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWVzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIG5ld0VsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcbiAgICB9XG4gICAgaWYgKGlkKSB7XG4gICAgICAgIG5ld0VsZW0uaWQgPSBpZDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEVsZW1lbnQoZWxlbSwga2VlcENsYXNzID0gZmFsc2UpIHtcbiAgICBpZiAoIWtlZXBDbGFzcykge1xuICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgfVxuICAgIGVsZW0ucmVwbGFjZUNoaWxkcmVuKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFbGVtKGNvbnRhaW5lciwgY2hpbGRyZW4pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCguLi5jaGlsZHJlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkcmVuKVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnB1dEVsZW0oY29udGFpbmVyLCBlbGVtVGV4dCkge1xuICAgIGxldCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbShcImlucHV0XCIsIFtdLCBjb250YWluZXIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBlbGVtVGV4dCk7XG4gICAgdGl0bGVJbnB1dC5mb2N1cygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRleHQoZWxlbSkge1xuICAgIGxldCBlbGVtVGV4dCA9IGVsZW0udGV4dENvbnRlbnQ7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY3JlYXRlSW5wdXRFbGVtKGVsZW0sIGVsZW1UZXh0KTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRleHROdW1lcmljKGVsZW0pIHtcbiAgICBsZXQgZWxlbVRleHQgPSBlbGVtLnRleHRDb250ZW50O1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBjcmVhdGVFbGVtKFwiaW5wdXRcIiwgW10sIGVsZW0pO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGVsZW1UZXh0KTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIik7XG4gICAgdGl0bGVJbnB1dC5mb2N1cygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRWxlbShlbGVtKSB7XG4gICAgZWxlbS5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1pdEVsZW1UZXh0KGVsZW0pIHtcbiAgICBsZXQgZWxlbVBhcmVudCA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICBsZXQgZWxlbVRleHQgPSBlbGVtLnZhbHVlO1xuICAgIGVsZW1QYXJlbnQudGV4dENvbnRlbnQgPSBlbGVtVGV4dDtcblxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW0gfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkTmV3Q2FyZChjb250YWluZXIsIGRpc3Rpbmd1aXNoZXIsIHByb2plY3RJZCA9IG51bGwpe1xuICAgIGxldCBhZGRDYXJkRGl2ID0gY3JlYXRlRWxlbShcImRpdlwiLFtgYWRkLWNhcmQtJHtkaXN0aW5ndWlzaGVyfWBdLGNvbnRhaW5lcik7XG4gICAgYWRkQ2FyZERpdi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIGlmIChwcm9qZWN0SWQpIHtcbiAgICAgICAgYWRkQ2FyZERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIixwcm9qZWN0SWQpO1xuICAgIH1cbiAgICByZXR1cm4gYWRkQ2FyZERpdjtcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtLCBjcmVhdGVJbnB1dEVsZW0gfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocCwgaXNOZXdJdGVtLCBjb250YWluZXIpIHtcbiAgICBsZXQgcHJvamVjdCA9IGNyZWF0ZUVsZW0oXCJkaXZcIiwgW1wicHJvamVjdFwiXSwgY29udGFpbmVyLCBwLmlkKTtcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbShcImgzXCIsIFtdLCBwcm9qZWN0KTtcbiAgICBpZiAoaXNOZXdJdGVtKXtcbiAgICAgICBjcmVhdGVJbnB1dEVsZW0ocHJvamVjdFRpdGxlLCBcIlwiKTsgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcC5uYW1lO1xuICAgIH1cblxuICAgIGxldCBwcm9qZWN0QWN0aW9ucyA9IGNyZWF0ZUVsZW0oXCJkaXZcIixbXCJwcm9qZWN0LWFjdGlvbnNcIl0sIHByb2plY3QpO1xuICAgIGxldCBkZWxldGVQcm9qZWN0ID0gY3JlYXRlRWxlbShcImJ1dHRvblwiLCBbXSwgcHJvamVjdEFjdGlvbnMpO1xuICAgIGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIHJldHVybiBwcm9qZWN0O1xufSIsImltcG9ydCB7IGNyZWF0ZUVsZW0sIGNyZWF0ZUlucHV0RWxlbSB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9DYXJkKG5hbWUgPSBcIlwiLCBkZXNjcmlwdGlvbiA9IFwiXCIsIGlzQ29tcGxldGVkID0gZmFsc2UsIHByaW9yaXR5LCBpZCwgaXNOZXdJdGVtQ2FyZCwgY29udGFpbmVyKSB7XG4gICAgbGV0IHRvZG9FbGVtID0gY3JlYXRlRWxlbShcImRpdlwiLCBbXCJ0b2RvLWNhcmRcIl0sIGNvbnRhaW5lciwgaWQpO1xuICAgIGxldCB0b2RvVGl0bGUgPSBjcmVhdGVFbGVtKFwiZGl2XCIsIFtcInRvZG8tdGl0bGVcIl0sIHRvZG9FbGVtKTtcbiAgICBsZXQgdG9kb0Rlc2MgPSBjcmVhdGVFbGVtKFwiZGl2XCIsIFtcInRvZG8tZGVzY1wiXSwgdG9kb0VsZW0pO1xuICAgIGxldCB0b2RvVGl0bGVUZXh0ID0gY3JlYXRlRWxlbShcImgzXCIsIFtdLCB0b2RvVGl0bGUpO1xuICAgIGxldCB0b2RvRGVzY1RleHQgPSBjcmVhdGVFbGVtKFwicFwiLCBbXSwgdG9kb0Rlc2MpO1xuICAgIGlmIChpc05ld0l0ZW1DYXJkKSB7XG4gICAgICAgIGNyZWF0ZUlucHV0RWxlbSh0b2RvVGl0bGVUZXh0LCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvVGl0bGVUZXh0LnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB9XG4gICAgdG9kb0Rlc2NUZXh0LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb24gPT09IFwiXCIgPyBcIkRlc2NyaXB0aW9uXCIgOiBkZXNjcmlwdGlvbjtcblxuICAgIGxldCB0b2RvUHJpb3JpdHkgPSBjcmVhdGVFbGVtKFwiZGl2XCIsIFtcInRvZG8tcHJpb3JpdHlcIl0sIHRvZG9FbGVtKTtcbiAgICBsZXQgdG9kb1ByaW9yaXR5VGV4dCA9IGNyZWF0ZUVsZW0oXCJwXCIsIFtdLCB0b2RvUHJpb3JpdHkpO1xuICAgIHRvZG9Qcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcblxuICAgIGxldCB0b2dnbGVJZCA9IGB0b2dnbGUke2lkfWA7XG4gICAgbGV0IHRvZG9FbGVtQWN0aW9ucyA9IGNyZWF0ZUVsZW0oXCJkaXZcIiwgW1widG9kby1hY3Rpb25zXCJdLCB0b2RvRWxlbSk7XG4gICAgbGV0IHRvZG9Db21wbGV0ZWQgPSBjcmVhdGVFbGVtKFwiaW5wdXRcIiwgW1widG9kby1jb21wbGV0ZVwiXSwgdG9kb0VsZW1BY3Rpb25zLCB0b2dnbGVJZCk7XG4gICAgdG9kb0NvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgaWYgKGlzQ29tcGxldGVkKSB0b2RvQ29tcGxldGVkLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG5cbiAgICBsZXQgdG9kb1ByaW9yaXR5TGFiZWwgPSBjcmVhdGVFbGVtKFwibGFiZWxcIiwgW10sIHRvZG9FbGVtQWN0aW9ucyk7XG4gICAgdG9kb1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlZFwiO1xuICAgIHRvZG9Qcmlvcml0eUxhYmVsLmh0bWxGb3IgPSB0b2dnbGVJZDtcblxuICAgIGxldCB0b2RvRGVsQnV0dG9uID0gY3JlYXRlRWxlbShcImJ1dHRvblwiLCBbXCJ0b2RvLWRlbC1idG5cIl0sIHRvZG9FbGVtQWN0aW9ucyk7XG4gICAgdG9kb0RlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgICByZXR1cm4gdG9kb0VsZW07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IG1haW5Db250YWluZXIsIHNpZGViYXJDb250YWluZXIgfSBmcm9tICcuL21vZHVsZXMvb2JqZWN0cy92aWV3L2NvbnRhaW5lcnMuanMnO1xuaW1wb3J0IHNhbXBsZURhdGEgZnJvbSAnLi9tb2R1bGVzL3NhbXBsZS1kYXRhL3NhbXBsZS1kYXRhLmpzb24nIGFzc2VydCB7dHlwZTogJ2pzb24nfTtcbmltcG9ydCB7IGxvYWQgfSBmcm9tICcuL21vZHVsZXMvb2JqZWN0cy9jb250cm9sbGVyL3RvZG8uanMnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vbW9kdWxlcy9vYmplY3RzL21vZGVsL2l0ZW0uanMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vbW9kdWxlcy9vYmplY3RzL21vZGVsL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FjaGUsIGNyZWF0ZVByb2plY3RNYXAgfSBmcm9tICcuL21vZHVsZXMvb2JqZWN0cy9tb2RlbC90b2RvLmpzJztcbmltcG9ydCB7IGxvYWREYXRhRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbW9kdWxlcy9vYmplY3RzL2NvbnRyb2xsZXIvZGF0YS5qcyc7XG5cbmNvbnN0IGl0ZW1DYWNoZSA9IGNyZWF0ZUNhY2hlKEl0ZW0pO1xuY29uc3QgcHJvamVjdENhY2hlID0gY3JlYXRlQ2FjaGUoUHJvamVjdCk7XG5jb25zdCBwcm9qZWN0TWFwID0gY3JlYXRlUHJvamVjdE1hcCgpO1xuXG4vLyBsZXQgZGVmUHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiR2VuZXJhbFwiLCBcImRlZmF1bHRcIik7XG4vLyBwcm9qZWN0Q2FjaGUuYWRkT2JqVG9MaXN0KGRlZlByb2plY3QpO1xuXG4vLyBjb25zdCBzYW1wbGVJdGVtcyA9IHNhbXBsZURhdGEuaXRlbXM7XG4vLyBjb25zdCBzYW1wbGVQcm9qZWN0cyA9IHNhbXBsZURhdGEucHJvamVjdHM7XG4vLyBjb25zdCBzYW1wbGVQcm9qZWN0TWFwID0gc2FtcGxlRGF0YS5wcm9qZWN0TWFwO1xuXG4vLyBmb3IgKGxldCBwcm9qZWN0IG9mIHNhbXBsZVByb2plY3RzKSB7XG4vLyAgICAgY29uc3Qgc2FtcGxlUHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3QubmFtZSwgcHJvamVjdC5pZCk7XG4vLyAgICAgcHJvamVjdENhY2hlLmFkZE9ialRvTGlzdChzYW1wbGVQcm9qZWN0KTtcbi8vIH1cblxuLy8gZm9yIChsZXQgaXRlbSBvZiBzYW1wbGVJdGVtcykge1xuLy8gICAgIGNvbnN0IHNhbXBsZUl0ZW0gPSBuZXcgSXRlbShpdGVtLm5hbWUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0ucHJpb3JpdHksIGl0ZW0uaWQpO1xuLy8gICAgIGl0ZW1DYWNoZS5hZGRPYmpUb0xpc3Qoc2FtcGxlSXRlbSk7XG4vLyB9XG4vLyBwcm9qZWN0TWFwLmxvYWRQcm9qZWN0TWFwKHNhbXBsZVByb2plY3RNYXApO1dlIGhhdmVu4oCZdCBsZWFybmVkIGFueSB0ZWNobmlxdWVzIGZvciBhY3R1YWxseSBzdG9yaW5nIG91ciBkYXRhIGFueXdoZXJlLCBzbyB3aGVuIHRoZSB1c2VyIHJlZnJlc2hlcyB0aGUgcGFnZSwgYWxsIG9mIHRoZWlyIHRvZG9zIHdpbGwgZGlzYXBwZWFyISBZb3Ugc2hvdWxkIGFkZCBzb21lIHBlcnNpc3RlbmNlIHRvIHRoaXMgdG9kbyBhcHAgdXNpbmcgdGhlIFdlYiBTdG9yYWdlIEFQSS5cblxuY29uc3QgZXhpc3RpbmdEYXRhID0gbG9hZERhdGFGcm9tTG9jYWxTdG9yYWdlKGl0ZW1DYWNoZS5nZXRDYWNoZSgpLCBwcm9qZWN0Q2FjaGUuZ2V0Q2FjaGUoKSwgcHJvamVjdE1hcC5nZXRQcm9qZWN0cygpKTtcbmNvbnNvbGUubG9nKGV4aXN0aW5nRGF0YSlcbmxvYWQobWFpbkNvbnRhaW5lciwgc2lkZWJhckNvbnRhaW5lciwgcHJvamVjdENhY2hlLCBpdGVtQ2FjaGUsIHByb2plY3RNYXApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==