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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./modules/objects/assets/add.svg */ "./src/modules/objects/assets/add.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./modules/objects/assets/delete.svg */ "./src/modules/objects/assets/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
}

body {
    display: grid;
    grid-template-columns: 1fr 9fr 1fr;
    grid-template-rows: 1fr 10fr 1fr;
    min-height: 100vh;
    margin: 0;
    background-color: #EEEEEE;
}

header {
    background-color: #333333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-row: 1 / span 1;
    grid-column: 1 / span 3;
    padding: 0 1rem;
}

.project-title {
    padding: 0 1rem;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
}

footer {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 3/ span 1;
    grid-column: 1 / span 3;
    background-color: #333333;
    color: white;
}

.content {
    display: grid;
    grid-template-columns: 1fr 3fr;
}

main {
    grid-row: 2 / span 1;
    grid-column: 2 / span 1;
    background-color: white;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 83vh;
}
.project {
    grid-column: 1 / span 1;
    grid-row: 1/ span 1;
}

.project:hover {
    background-color: rgb(241, 241, 241);
}

.content-toolbar {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;

}

#sidebar-content {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
}

#main-content {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    display: grid;
}

.todo-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.295);
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 0rem 1rem 1rem 1rem;
}

.todo-card div {
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.25rem;
    padding: 0px 1rem;
}

.todo-card div.todo-complete {
    flex-direction: row-reverse ;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
}

.todo-card div:has(h3, p):hover {
    background-color: #BBBBBB;
}

.todo-card h3,
.todo-card p {
    display: flex;
    justify-content: center;
    align-items: center;
}

.project>h3:empty::after,
.todo-card h3:empty::after {
    content: "Untitled";
}

#sidebar-content div {
    padding: 0rem 1rem;
}

.project {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.project h3 {
    margin-right: auto;
    width: 100%;
}

.project.selected {
    background-color: #888888;
    color: #EEEEEE;
}

.add-symbol {
    margin: 1rem;
    cursor: pointer;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    color: transparent;
}

.delete-symbol {
    cursor: pointer;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-size: contain;
    color: transparent;
}

.delete-button {
    width: 1.4rem;
    height: 1.4rem;
    border: none;
    background-color: transparent;
}

input {
    height: 100%;
    border: none;
    color: inherit;
    background-color: inherit;
}

text:focus,
input:focus {
    outline: none;

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,kCAAkC;IAClC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,gCAAgC;IAChC,iBAAiB;IACjB,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,oBAAoB;IACpB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,oBAAoB;IACpB,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;IACpB,aAAa;IACb,2BAA2B;IAC3B,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;;AAEjB;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;IACpB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,6CAA6C;IAC7C,qBAAqB;IACrB,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,2BAA2B;IAC3B,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,yDAAyD;IACzD,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,yDAA4D;IAC5D,4BAA4B;IAC5B,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,yBAAyB;AAC7B;;AAEA;;IAEI,aAAa;;AAEjB","sourcesContent":[":root {\n    box-sizing: border-box;\n    font-family: \"Poppins\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 9fr 1fr;\n    grid-template-rows: 1fr 10fr 1fr;\n    min-height: 100vh;\n    margin: 0;\n    background-color: #EEEEEE;\n}\n\nheader {\n    background-color: #333333;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    grid-row: 1 / span 1;\n    grid-column: 1 / span 3;\n    padding: 0 1rem;\n}\n\n.project-title {\n    padding: 0 1rem;\n}\n\n.logo {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-row: 3/ span 1;\n    grid-column: 1 / span 3;\n    background-color: #333333;\n    color: white;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\nmain {\n    grid-row: 2 / span 1;\n    grid-column: 2 / span 1;\n    background-color: white;\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 83vh;\n}\n.project {\n    grid-column: 1 / span 1;\n    grid-row: 1/ span 1;\n}\n\n.project:hover {\n    background-color: rgb(241, 241, 241);\n}\n\n.content-toolbar {\n    grid-column: 2 / span 1;\n    grid-row: 1 / span 1;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 1rem;\n\n}\n\n#sidebar-content {\n    grid-column: 1 / span 1;\n    grid-row: 2 / span 1;\n}\n\n#main-content {\n    grid-column: 2 / span 1;\n    grid-row: 2 / span 1;\n    display: grid;\n}\n\n.todo-card {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.295);\n    border-radius: 0.5rem;\n    padding: 1rem;\n    margin: 0rem 1rem 1rem 1rem;\n}\n\n.todo-card div {\n    height: 3rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    border-radius: 0.25rem;\n    padding: 0px 1rem;\n}\n\n.todo-card div.todo-complete {\n    flex-direction: row-reverse ;\n    justify-content: flex-start;\n    gap: 1rem;\n    align-items: center;\n}\n\n.todo-card div:has(h3, p):hover {\n    background-color: #BBBBBB;\n}\n\n.todo-card h3,\n.todo-card p {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project>h3:empty::after,\n.todo-card h3:empty::after {\n    content: \"Untitled\";\n}\n\n#sidebar-content div {\n    padding: 0rem 1rem;\n}\n\n.project {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.project h3 {\n    margin-right: auto;\n    width: 100%;\n}\n\n.project.selected {\n    background-color: #888888;\n    color: #EEEEEE;\n}\n\n.add-symbol {\n    margin: 1rem;\n    cursor: pointer;\n    background-image: url('./modules/objects/assets/add.svg');\n    background-repeat: no-repeat;\n    color: transparent;\n}\n\n.delete-symbol {\n    cursor: pointer;\n    background-image: url('./modules/objects/assets/delete.svg');\n    background-repeat: no-repeat;\n    background-size: contain;\n    color: transparent;\n}\n\n.delete-button {\n    width: 1.4rem;\n    height: 1.4rem;\n    border: none;\n    background-color: transparent;\n}\n\ninput {\n    height: 100%;\n    border: none;\n    color: inherit;\n    background-color: inherit;\n}\n\ntext:focus,\ninput:focus {\n    outline: none;\n\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
/* harmony export */   addSelected: () => (/* binding */ addSelected),
/* harmony export */   removeSelected: () => (/* binding */ removeSelected),
/* harmony export */   renderAddCardDiv: () => (/* binding */ renderAddCardDiv),
/* harmony export */   renderItemCard: () => (/* binding */ renderItemCard),
/* harmony export */   renderProjectCard: () => (/* binding */ renderProjectCard)
/* harmony export */ });
/* harmony import */ var _view_general_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/general-controls */ "./src/modules/objects/view/general-controls.js");
/* harmony import */ var _view_projects_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/projects-view */ "./src/modules/objects/view/projects-view.js");
/* harmony import */ var _view_todo_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/todo-cards */ "./src/modules/objects/view/todo-cards.js");
/* harmony import */ var _event_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-handlers */ "./src/modules/objects/controller/event-handlers.js");





function renderItemCard(item, appData, isNewItem = false) {
    const { name, description, isCompleted, id } = item;
    const { itemContainer } = appData;
    const todoCard = (0,_view_todo_cards__WEBPACK_IMPORTED_MODULE_2__.createTodoCard)(name,
        description,
        isCompleted,
        id,
        isNewItem,
        itemContainer)
    todoCard.addEventListener('click', (e) => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.todoCardClickHandler)(e, appData));
    todoCard.addEventListener('dblclick', _event_handlers__WEBPACK_IMPORTED_MODULE_3__.todoCardDblClickHandler);
    todoCard.addEventListener('keyup', (e) => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.focusOutHandler)(e, appData));
    todoCard.addEventListener('focusout', (e) => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.focusOutHandler)(e, appData));
}

function renderProjectCard(project, appData,
    isNewItem = false) {
    const { projectContainer, currentLoadedProject } = appData;
    let projectCard = (0,_view_projects_view__WEBPACK_IMPORTED_MODULE_1__.createProjectCard)(project, isNewItem, projectContainer);
    if (project.id === currentLoadedProject) {
        addSelected(projectCard);
    }
    projectCard.addEventListener('click', (e) => { (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.projectCardClickHandler)(e, appData) });
    projectCard.addEventListener('dblclick', _event_handlers__WEBPACK_IMPORTED_MODULE_3__.projectCardDblClickHandler);
    projectCard.addEventListener('keyup', (e) => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.focusOutHandler)(e, appData));
    projectCard.addEventListener('focusout', (e) => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.focusOutHandler)(e, appData));
}

function renderAddCardDiv(appData, isItem = false) {
    const { itemContainer, projectContainer, currentLoadedProject } = appData;
    const container = isItem ? itemContainer : projectContainer;
    const distinguisher = isItem ? "item" : "project";
    let addCardDiv = (0,_view_general_controls__WEBPACK_IMPORTED_MODULE_0__.createAddNewCard)(container, distinguisher, isItem ? currentLoadedProject : null);
    addCardDiv.addEventListener('click', (e) => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_3__.addCardHandler)(e, appData));
};

function removeSelected(appData) {
    const { projectContainer } = appData;
    for (let child of projectContainer.children) {
        child.classList.remove("selected");
    }
    
}

function addSelected(selected) {
    selected.classList.add("selected");
}

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
function saveDataToLocalStorage(items, projects, projectMap, currentLoadedProject, renderCompleted) {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("projectMap", JSON.stringify(projectMap));
    localStorage.setItem("renderCompleted", renderCompleted.toString());
    localStorage.setItem("currentLoadedProject", currentLoadedProject);
}

function loadDataFromLocalStorage(itemsDefault, projectsDefault, projectMapDefault, defaultProject) {
    if (localStorage.items
        && localStorage.projects
        && localStorage.projectMap
        && localStorage.currentLoadedProject
        && localStorage.renderCompleted) {

        const items = JSON.parse(localStorage.getItem("items"));
        const projects = JSON.parse(localStorage.getItem("projects"));
        const projectMap = JSON.parse(localStorage.getItem("projectMap"));
        const currentLoadedProject = localStorage.getItem("currentLoadedProject");
        const renderCompleted = JSON.parse(localStorage.getItem("renderCompleted"));
        return { items, projects, projectMap, currentLoadedProject, renderCompleted };
    } else {
        saveDataToLocalStorage(itemsDefault, projectsDefault, projectMapDefault, defaultProject, true);
        return;
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
/* harmony export */   todoCardDblClickHandler: () => (/* binding */ todoCardDblClickHandler),
/* harmony export */   toolBarClickHandler: () => (/* binding */ toolBarClickHandler)
/* harmony export */ });
/* harmony import */ var _model_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/item */ "./src/modules/objects/model/item.js");
/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/project */ "./src/modules/objects/model/project.js");
/* harmony import */ var _view_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/elements */ "./src/modules/objects/view/elements.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards */ "./src/modules/objects/controller/cards.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo */ "./src/modules/objects/controller/todo.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/modules/objects/controller/data.js");







function projectCardDblClickHandler(e) {
    e.stopPropagation;
    if (e.target.matches(".project:not(#default)>h3")) {
        (0,_view_elements__WEBPACK_IMPORTED_MODULE_2__.editText)(e.target);
    }
}
function projectCardClickHandler(e, appData) {
    e.stopPropagation;
    const { itemCache, projectCache, projectMap } = appData;
    if (e.target.matches(".project>h3")) {
        appData.currentLoadedProject = e.target.parentElement.id;
        (0,_todo__WEBPACK_IMPORTED_MODULE_4__.renderItems)(appData);
        (0,_cards__WEBPACK_IMPORTED_MODULE_3__.removeSelected)(appData);
        (0,_cards__WEBPACK_IMPORTED_MODULE_3__.addSelected)(e.target.parentElement);
        saveData(appData, e.target.parentElement.id);
    } else if (e.target.matches(".project-actions>.delete-button")) {
        projectCache.removeObjFromList(e.currentTarget.id);
        for (let item of projectMap.getProject(e.currentTarget.id)){
            itemCache.removeObjFromList(item);
        }
        projectMap.removeProjectFromMap(e.currentTarget.id);
        appData.currentLoadedProject = Object.keys(projectMap.getProjects()).pop();

        (0,_view_elements__WEBPACK_IMPORTED_MODULE_2__.removeElem)(e.currentTarget);
        (0,_todo__WEBPACK_IMPORTED_MODULE_4__.renderItems)(appData);
        (0,_cards__WEBPACK_IMPORTED_MODULE_3__.removeSelected)(appData);
        (0,_cards__WEBPACK_IMPORTED_MODULE_3__.addSelected)(document.querySelector(`#${appData.currentLoadedProject}`));
        saveData(appData);
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
        (0,_cards__WEBPACK_IMPORTED_MODULE_3__.renderAddCardDiv)(appData, true);
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
        } else if (e.target.matches(".project:not(#default) input")) {
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
        saveData(appData);
    } else if (e.target.matches("input[type='checkbox'].complete-checkbox")) {
        itemCache.setPropValue(e.currentTarget.id, "isCompleted", e.target.checked)
        ;(0,_todo__WEBPACK_IMPORTED_MODULE_4__.renderItems)(appData);
        saveData(appData);
    }

}

function todoCardDblClickHandler(e) {
    e.stopPropagation;
    if (e.target.matches(".todo-title>h3:first-child")
        || e.target.matches(".todo-desc>p:first-child")) {
        (0,_view_elements__WEBPACK_IMPORTED_MODULE_2__.editText)(e.target);
    }
}

function toolBarClickHandler(e, appData) {
    e.stopPropagation;
    if (e.target.matches("#show-completed")) {
        appData.renderCompleted = e.target.checked;
        (0,_todo__WEBPACK_IMPORTED_MODULE_4__.renderItems)(appData);
        saveData(appData);
    }
}

function saveData(appData) {
    const { itemCache, projectCache, projectMap, currentLoadedProject, renderCompleted } = appData;
    (0,_data__WEBPACK_IMPORTED_MODULE_5__.saveDataToLocalStorage)(itemCache.getCache(), projectCache.getCache(), projectMap.getProjects(), currentLoadedProject, renderCompleted)
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
/* harmony import */ var _event_handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-handlers */ "./src/modules/objects/controller/event-handlers.js");




function renderItems(appData) {
    const { itemContainer, projectMap, itemCache, renderCompleted, currentLoadedProject } = appData;
    (0,_view_elements__WEBPACK_IMPORTED_MODULE_0__.resetElement)(itemContainer);
    let project = projectMap.getProject(currentLoadedProject);
    if (!project) {
        project = projectMap.getProject("default");
    }

    for (let i = 0; i < project.length; i++) {
        let itemId = project[i];
        let item = itemCache.getObj(itemId);

        if (!item) {
            projectMap.removeItemFromList(currentLoadedProject, i);
            continue;
        }

        if (!renderCompleted && item.isCompleted) {
            continue;
        }

        (0,_cards__WEBPACK_IMPORTED_MODULE_1__.renderItemCard)(item, appData);        
    }

    
    (0,_cards__WEBPACK_IMPORTED_MODULE_1__.renderAddCardDiv)(appData, true);
}

function renderProjects(appData) {
    const { projectCache} = appData;
    let projects = projectCache.getObjs();
    for (let i = 0; i < projects.length; i++) {
        (0,_cards__WEBPACK_IMPORTED_MODULE_1__.renderProjectCard)(projects[i], appData, false);
    }
    (0,_cards__WEBPACK_IMPORTED_MODULE_1__.renderAddCardDiv)(appData);
}

function switchCheckbox(checkbox, value) {
    checkbox.checked = value;
}

function load(itemContainer,
    projectContainer,
    toolbar,
    projectCache,
    itemCache,
    projectMap,
    currentLoadedProject,
    renderCompleted
) {

    const appData = {
        itemContainer,
        projectContainer,
        projectCache,
        itemCache,
        projectMap,
        renderCompleted,
        currentLoadedProject
    }
    renderItems(appData, currentLoadedProject);
    renderProjects(appData);
    switchCheckbox(toolbar.querySelector("#show-completed"), renderCompleted);
    toolbar.addEventListener('click', e => (0,_event_handlers__WEBPACK_IMPORTED_MODULE_2__.toolBarClickHandler)(e, appData));
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
        this.isDefault = this.id === "default";
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
    function setCache(newCache) {
        cache = newCache;
    }
    return {
        addObjToList,
        getObj,
        setPropValue,
        getObjs,
        getCache,
        setCache,
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
    let addCardDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("div",[`add-card-${distinguisher}`, 'add-symbol'],container);
    addCardDiv.textContent = "add";
    if (projectId) {
        addCardDiv.setAttribute("data-project-id",projectId);
    }
    return addCardDiv;
}

/***/ }),

/***/ "./src/modules/objects/view/html-elements.js":
/*!***************************************************!*\
  !*** ./src/modules/objects/view/html-elements.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainContainer: () => (/* binding */ mainContainer),
/* harmony export */   sidebarContainer: () => (/* binding */ sidebarContainer),
/* harmony export */   toolbar: () => (/* binding */ toolbar)
/* harmony export */ });
const sidebarContainer = document.querySelector("#sidebar-content");
const mainContainer = document.querySelector("#main-content");
const toolbar = document.querySelector(".content-toolbar");

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
    if (isNewItem) {
        (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createInputElem)(projectTitle, "");
    } else {
        projectTitle.textContent = p.name;
    }

    if (!p.isDefault) {
        let projectActions = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("div", ["project-actions"], project);
        let deleteProject = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("button", ["delete-button", "delete-symbol"], projectActions);
        deleteProject.textContent = "Delete";
    }
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



function createTodoCard(name = "", description = "", isCompleted = false, id, isNewItemCard, container) {
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


    let toggleId = `toggle${id}`;
    let todoCompletedDiv = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("div", ["todo-complete"], todoElem);
    let todoCompleted = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("input", ["complete-checkbox"], todoCompletedDiv, toggleId);
    todoCompleted.setAttribute("type", "checkbox");
    if (isCompleted) todoCompleted.setAttribute("checked", "");

    let todoComplete = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("label", [], todoCompletedDiv);
    todoComplete.textContent = "Completed?";

    let todoElemActions = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("div", ["todo-actions"], todoElem);
    todoComplete.htmlFor = toggleId;

    let todoDelButton = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createElem)("button", ["todo-del-btn", "delete-button", "delete-symbol"], todoElemActions);
    todoDelButton.textContent = "Delete";

    return todoElem;
}


/***/ }),

/***/ "./src/modules/objects/assets/add.svg":
/*!********************************************!*\
  !*** ./src/modules/objects/assets/add.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3be0ea4ac64cead2bf95.svg";

/***/ }),

/***/ "./src/modules/objects/assets/delete.svg":
/*!***********************************************!*\
  !*** ./src/modules/objects/assets/delete.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ded1e99216871d2a3ae.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _modules_objects_view_html_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/objects/view/html-elements.js */ "./src/modules/objects/view/html-elements.js");
/* harmony import */ var _modules_objects_controller_todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/objects/controller/todo.js */ "./src/modules/objects/controller/todo.js");
/* harmony import */ var _modules_objects_model_item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/objects/model/item.js */ "./src/modules/objects/model/item.js");
/* harmony import */ var _modules_objects_model_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/objects/model/project.js */ "./src/modules/objects/model/project.js");
/* harmony import */ var _modules_objects_model_todo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/objects/model/todo.js */ "./src/modules/objects/model/todo.js");
/* harmony import */ var _modules_objects_controller_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/objects/controller/data.js */ "./src/modules/objects/controller/data.js");








const itemCache = (0,_modules_objects_model_todo_js__WEBPACK_IMPORTED_MODULE_5__.createCache)(_modules_objects_model_item_js__WEBPACK_IMPORTED_MODULE_3__.Item);
const projectCache = (0,_modules_objects_model_todo_js__WEBPACK_IMPORTED_MODULE_5__.createCache)(_modules_objects_model_project_js__WEBPACK_IMPORTED_MODULE_4__.Project);
const projectMap = (0,_modules_objects_model_todo_js__WEBPACK_IMPORTED_MODULE_5__.createProjectMap)();

const defaultId = "default";
let currentLoadedProject = defaultId;
let renderCompleted = false;
let defProject = new _modules_objects_model_project_js__WEBPACK_IMPORTED_MODULE_4__.Project("General", defaultId);
projectCache.addObjToList(defProject);

const existingData = (0,_modules_objects_controller_data_js__WEBPACK_IMPORTED_MODULE_6__.loadDataFromLocalStorage)(itemCache.getCache(), projectCache.getCache(), projectMap.getProjects(), defaultId);
if (existingData) {
    itemCache.setCache(existingData.items);
    projectCache.setCache(existingData.projects);
    projectMap.loadProjectMap(existingData.projectMap);
    currentLoadedProject = existingData.currentLoadedProject;
    renderCompleted = existingData.renderCompleted;
}

(0,_modules_objects_controller_todo_js__WEBPACK_IMPORTED_MODULE_2__.load)(_modules_objects_view_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.mainContainer, 
    _modules_objects_view_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.sidebarContainer, 
    _modules_objects_view_html_elements_js__WEBPACK_IMPORTED_MODULE_1__.toolbar, 
    projectCache, 
    itemCache, 
    projectMap, 
    currentLoadedProject, 
    renderCompleted);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzhFO0FBQ3ZDO0FBQ0w7QUFDTTtBQUNtQjtBQUNrQjs7QUFFbEcsa0JBQWtCLDJFQUFXLENBQUMsZ0VBQUk7QUFDbEMscUJBQXFCLDJFQUFXLENBQUMsc0VBQU87QUFDeEMsbUJBQW1CLGdGQUFnQjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNFQUFPO0FBQzVCOztBQUVBLHFCQUFxQiw2RkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUVBQUksQ0FBQyxpRkFBYTtBQUNsQixJQUFJLG9GQUFnQjtBQUNwQixJQUFJLDJFQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2hlbHBlcnMvdWlkLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvb2JqZWN0cy9jb250cm9sbGVyL2NhcmRzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvb2JqZWN0cy9jb250cm9sbGVyL2RhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9vYmplY3RzL2NvbnRyb2xsZXIvZXZlbnQtaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9vYmplY3RzL2NvbnRyb2xsZXIvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29iamVjdHMvbW9kZWwvaXRlbS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29iamVjdHMvbW9kZWwvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29iamVjdHMvbW9kZWwvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29iamVjdHMvdmlldy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29iamVjdHMvdmlldy9nZW5lcmFsLWNvbnRyb2xzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvb2JqZWN0cy92aWV3L2h0bWwtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9vYmplY3RzL3ZpZXcvcHJvamVjdHMtdmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL29iamVjdHMvdmlldy90b2RvLWNhcmRzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbW9kdWxlcy9vYmplY3RzL2Fzc2V0cy9hZGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9tb2R1bGVzL29iamVjdHMvYXNzZXRzL2RlbGV0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyIDFmcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbn1cblxuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ3JpZC1yb3c6IDMvIHNwYW4gMTtcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xufVxuXG5tYWluIHtcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiA4M3ZoO1xufVxuLnByb2plY3Qge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xuICAgIGdyaWQtcm93OiAxLyBzcGFuIDE7XG59XG5cbi5wcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XG59XG5cbi5jb250ZW50LXRvb2xiYXIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG59XG5cbiNzaWRlYmFyLWNvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xufVxuXG4jbWFpbi1jb250ZW50IHtcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4udG9kby1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcmVtIHJnYmEoMCwgMCwgMCwgMC4yOTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbjogMHJlbSAxcmVtIDFyZW0gMXJlbTtcbn1cblxuLnRvZG8tY2FyZCBkaXYge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBwYWRkaW5nOiAwcHggMXJlbTtcbn1cblxuLnRvZG8tY2FyZCBkaXYudG9kby1jb21wbGV0ZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlIDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b2RvLWNhcmQgZGl2OmhhcyhoMywgcCk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQkJCQkI7XG59XG5cbi50b2RvLWNhcmQgaDMsXG4udG9kby1jYXJkIHAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3Q+aDM6ZW1wdHk6OmFmdGVyLFxuLnRvZG8tY2FyZCBoMzplbXB0eTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiVW50aXRsZWRcIjtcbn1cblxuI3NpZGViYXItY29udGVudCBkaXYge1xuICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcbn1cblxuLnByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0IGgzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0LnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xuICAgIGNvbG9yOiAjRUVFRUVFO1xufVxuXG4uYWRkLXN5bWJvbCB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kZWxldGUtc3ltYm9sIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmRlbGV0ZS1idXR0b24ge1xuICAgIHdpZHRoOiAxLjRyZW07XG4gICAgaGVpZ2h0OiAxLjRyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG50ZXh0OmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsU0FBUztJQUNULHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3QyxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YseURBQXlEO0lBQ3pELDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseURBQTREO0lBQzVELDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGFBQWE7O0FBRWpCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmciAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAzLyBzcGFuIDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiA4M3ZoO1xcbn1cXG4ucHJvamVjdCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMS8gc3BhbiAxO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG59XFxuXFxuLmNvbnRlbnQtdG9vbGJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbn1cXG5cXG4jc2lkZWJhci1jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XFxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udG9kby1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFyZW0gcmdiYSgwLCAwLCAwLCAwLjI5NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luOiAwcmVtIDFyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG4udG9kby1jYXJkIGRpdiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIHBhZGRpbmc6IDBweCAxcmVtO1xcbn1cXG5cXG4udG9kby1jYXJkIGRpdi50b2RvLWNvbXBsZXRlIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlIDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWNhcmQgZGl2OmhhcyhoMywgcCk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJCQkJCO1xcbn1cXG5cXG4udG9kby1jYXJkIGgzLFxcbi50b2RvLWNhcmQgcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdD5oMzplbXB0eTo6YWZ0ZXIsXFxuLnRvZG8tY2FyZCBoMzplbXB0eTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiVW50aXRsZWRcXFwiO1xcbn1cXG5cXG4jc2lkZWJhci1jb250ZW50IGRpdiB7XFxuICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0IGgzIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3Quc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xcbiAgICBjb2xvcjogI0VFRUVFRTtcXG59XFxuXFxuLmFkZC1zeW1ib2wge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL21vZHVsZXMvb2JqZWN0cy9hc3NldHMvYWRkLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5kZWxldGUtc3ltYm9sIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vbW9kdWxlcy9vYmplY3RzL2Fzc2V0cy9kZWxldGUuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxLjRyZW07XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxudGV4dDpmb2N1cyxcXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocHJlZml4ID0gXCJcIil7XG4gICByZXR1cm4gcHJlZml4LmNvbmNhdChEYXRlLm5vdygpLCBEYXRlLm5vdygpICogTWF0aC5yYW5kb20oKSk7XG59IiwiaW1wb3J0IHsgY3JlYXRlQWRkTmV3Q2FyZCB9IGZyb20gXCIuLi92aWV3L2dlbmVyYWwtY29udHJvbHNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkIH0gZnJvbSBcIi4uL3ZpZXcvcHJvamVjdHMtdmlld1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9kb0NhcmQgfSBmcm9tIFwiLi4vdmlldy90b2RvLWNhcmRzXCI7XG5pbXBvcnQge1xuICAgIHRvZG9DYXJkQ2xpY2tIYW5kbGVyLFxuICAgIHRvZG9DYXJkRGJsQ2xpY2tIYW5kbGVyLFxuICAgIGZvY3VzT3V0SGFuZGxlcixcbiAgICBhZGRDYXJkSGFuZGxlcixcbiAgICBwcm9qZWN0Q2FyZENsaWNrSGFuZGxlcixcbiAgICBwcm9qZWN0Q2FyZERibENsaWNrSGFuZGxlclxufSBmcm9tIFwiLi9ldmVudC1oYW5kbGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySXRlbUNhcmQoaXRlbSwgYXBwRGF0YSwgaXNOZXdJdGVtID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCBpc0NvbXBsZXRlZCwgaWQgfSA9IGl0ZW07XG4gICAgY29uc3QgeyBpdGVtQ29udGFpbmVyIH0gPSBhcHBEYXRhO1xuICAgIGNvbnN0IHRvZG9DYXJkID0gY3JlYXRlVG9kb0NhcmQobmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGlzQ29tcGxldGVkLFxuICAgICAgICBpZCxcbiAgICAgICAgaXNOZXdJdGVtLFxuICAgICAgICBpdGVtQ29udGFpbmVyKVxuICAgIHRvZG9DYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRvZG9DYXJkQ2xpY2tIYW5kbGVyKGUsIGFwcERhdGEpKTtcbiAgICB0b2RvQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRvZG9DYXJkRGJsQ2xpY2tIYW5kbGVyKTtcbiAgICB0b2RvQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiBmb2N1c091dEhhbmRsZXIoZSwgYXBwRGF0YSkpO1xuICAgIHRvZG9DYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGUpID0+IGZvY3VzT3V0SGFuZGxlcihlLCBhcHBEYXRhKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0Q2FyZChwcm9qZWN0LCBhcHBEYXRhLFxuICAgIGlzTmV3SXRlbSA9IGZhbHNlKSB7XG4gICAgY29uc3QgeyBwcm9qZWN0Q29udGFpbmVyLCBjdXJyZW50TG9hZGVkUHJvamVjdCB9ID0gYXBwRGF0YTtcbiAgICBsZXQgcHJvamVjdENhcmQgPSBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0LCBpc05ld0l0ZW0sIHByb2plY3RDb250YWluZXIpO1xuICAgIGlmIChwcm9qZWN0LmlkID09PSBjdXJyZW50TG9hZGVkUHJvamVjdCkge1xuICAgICAgICBhZGRTZWxlY3RlZChwcm9qZWN0Q2FyZCk7XG4gICAgfVxuICAgIHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgcHJvamVjdENhcmRDbGlja0hhbmRsZXIoZSwgYXBwRGF0YSkgfSk7XG4gICAgcHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBwcm9qZWN0Q2FyZERibENsaWNrSGFuZGxlcik7XG4gICAgcHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gZm9jdXNPdXRIYW5kbGVyKGUsIGFwcERhdGEpKTtcbiAgICBwcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChlKSA9PiBmb2N1c091dEhhbmRsZXIoZSwgYXBwRGF0YSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWRkQ2FyZERpdihhcHBEYXRhLCBpc0l0ZW0gPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgaXRlbUNvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lciwgY3VycmVudExvYWRlZFByb2plY3QgfSA9IGFwcERhdGE7XG4gICAgY29uc3QgY29udGFpbmVyID0gaXNJdGVtID8gaXRlbUNvbnRhaW5lciA6IHByb2plY3RDb250YWluZXI7XG4gICAgY29uc3QgZGlzdGluZ3Vpc2hlciA9IGlzSXRlbSA/IFwiaXRlbVwiIDogXCJwcm9qZWN0XCI7XG4gICAgbGV0IGFkZENhcmREaXYgPSBjcmVhdGVBZGROZXdDYXJkKGNvbnRhaW5lciwgZGlzdGluZ3Vpc2hlciwgaXNJdGVtID8gY3VycmVudExvYWRlZFByb2plY3QgOiBudWxsKTtcbiAgICBhZGRDYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGFkZENhcmRIYW5kbGVyKGUsIGFwcERhdGEpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTZWxlY3RlZChhcHBEYXRhKSB7XG4gICAgY29uc3QgeyBwcm9qZWN0Q29udGFpbmVyIH0gPSBhcHBEYXRhO1xuICAgIGZvciAobGV0IGNoaWxkIG9mIHByb2plY3RDb250YWluZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNlbGVjdGVkKHNlbGVjdGVkKSB7XG4gICAgc2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKGl0ZW1zLCBwcm9qZWN0cywgcHJvamVjdE1hcCwgY3VycmVudExvYWRlZFByb2plY3QsIHJlbmRlckNvbXBsZXRlZCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TWFwXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RNYXApKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlbmRlckNvbXBsZXRlZFwiLCByZW5kZXJDb21wbGV0ZWQudG9TdHJpbmcoKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50TG9hZGVkUHJvamVjdFwiLCBjdXJyZW50TG9hZGVkUHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YUZyb21Mb2NhbFN0b3JhZ2UoaXRlbXNEZWZhdWx0LCBwcm9qZWN0c0RlZmF1bHQsIHByb2plY3RNYXBEZWZhdWx0LCBkZWZhdWx0UHJvamVjdCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuaXRlbXNcbiAgICAgICAgJiYgbG9jYWxTdG9yYWdlLnByb2plY3RzXG4gICAgICAgICYmIGxvY2FsU3RvcmFnZS5wcm9qZWN0TWFwXG4gICAgICAgICYmIGxvY2FsU3RvcmFnZS5jdXJyZW50TG9hZGVkUHJvamVjdFxuICAgICAgICAmJiBsb2NhbFN0b3JhZ2UucmVuZGVyQ29tcGxldGVkKSB7XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXRlbXNcIikpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RNYXAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdE1hcFwiKSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMb2FkZWRQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50TG9hZGVkUHJvamVjdFwiKTtcbiAgICAgICAgY29uc3QgcmVuZGVyQ29tcGxldGVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlbmRlckNvbXBsZXRlZFwiKSk7XG4gICAgICAgIHJldHVybiB7IGl0ZW1zLCBwcm9qZWN0cywgcHJvamVjdE1hcCwgY3VycmVudExvYWRlZFByb2plY3QsIHJlbmRlckNvbXBsZXRlZCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoaXRlbXNEZWZhdWx0LCBwcm9qZWN0c0RlZmF1bHQsIHByb2plY3RNYXBEZWZhdWx0LCBkZWZhdWx0UHJvamVjdCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi4vbW9kZWwvaXRlbVwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbC9wcm9qZWN0XCI7XG5pbXBvcnQgeyBjb21taXRFbGVtVGV4dCwgZWRpdFRleHQsIHJlbW92ZUVsZW0gfSBmcm9tIFwiLi4vdmlldy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYWRkU2VsZWN0ZWQsIHJlbW92ZVNlbGVjdGVkLCByZW5kZXJBZGRDYXJkRGl2LCByZW5kZXJJdGVtQ2FyZCwgcmVuZGVyUHJvamVjdENhcmQgfSBmcm9tIFwiLi9jYXJkc1wiO1xuaW1wb3J0IHsgcmVuZGVySXRlbXMgfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vZGF0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdENhcmREYmxDbGlja0hhbmRsZXIoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uO1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnByb2plY3Q6bm90KCNkZWZhdWx0KT5oM1wiKSkge1xuICAgICAgICBlZGl0VGV4dChlLnRhcmdldCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RDYXJkQ2xpY2tIYW5kbGVyKGUsIGFwcERhdGEpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbjtcbiAgICBjb25zdCB7IGl0ZW1DYWNoZSwgcHJvamVjdENhY2hlLCBwcm9qZWN0TWFwIH0gPSBhcHBEYXRhO1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnByb2plY3Q+aDNcIikpIHtcbiAgICAgICAgYXBwRGF0YS5jdXJyZW50TG9hZGVkUHJvamVjdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgIHJlbmRlckl0ZW1zKGFwcERhdGEpO1xuICAgICAgICByZW1vdmVTZWxlY3RlZChhcHBEYXRhKTtcbiAgICAgICAgYWRkU2VsZWN0ZWQoZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIHNhdmVEYXRhKGFwcERhdGEsIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5wcm9qZWN0LWFjdGlvbnM+LmRlbGV0ZS1idXR0b25cIikpIHtcbiAgICAgICAgcHJvamVjdENhY2hlLnJlbW92ZU9iakZyb21MaXN0KGUuY3VycmVudFRhcmdldC5pZCk7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgcHJvamVjdE1hcC5nZXRQcm9qZWN0KGUuY3VycmVudFRhcmdldC5pZCkpe1xuICAgICAgICAgICAgaXRlbUNhY2hlLnJlbW92ZU9iakZyb21MaXN0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RNYXAucmVtb3ZlUHJvamVjdEZyb21NYXAoZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICAgICAgYXBwRGF0YS5jdXJyZW50TG9hZGVkUHJvamVjdCA9IE9iamVjdC5rZXlzKHByb2plY3RNYXAuZ2V0UHJvamVjdHMoKSkucG9wKCk7XG5cbiAgICAgICAgcmVtb3ZlRWxlbShlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICByZW5kZXJJdGVtcyhhcHBEYXRhKTtcbiAgICAgICAgcmVtb3ZlU2VsZWN0ZWQoYXBwRGF0YSk7XG4gICAgICAgIGFkZFNlbGVjdGVkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2FwcERhdGEuY3VycmVudExvYWRlZFByb2plY3R9YCkpO1xuICAgICAgICBzYXZlRGF0YShhcHBEYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXJkSGFuZGxlcihlLCBhcHBEYXRhKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb247XG4gICAgY29uc3QgeyBpdGVtQ2FjaGUsIHByb2plY3RDYWNoZSwgcHJvamVjdE1hcCB9ID0gYXBwRGF0YTtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5hZGQtY2FyZC1pdGVtXCIpKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIik7XG4gICAgICAgIGxldCBuZXdJdGVtID0gbmV3IEl0ZW0oXCJcIiwgXCJcIiwgMCk7XG4gICAgICAgIGl0ZW1DYWNoZS5hZGRPYmpUb0xpc3QobmV3SXRlbSk7XG4gICAgICAgIHByb2plY3RNYXAuYWRkSXRlbVRvUHJvamVjdChwcm9qZWN0SWQsIG5ld0l0ZW0uaWQpO1xuXG4gICAgICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICByZW5kZXJJdGVtQ2FyZChuZXdJdGVtLCBhcHBEYXRhLCB0cnVlKTtcbiAgICAgICAgcmVuZGVyQWRkQ2FyZERpdihhcHBEYXRhLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuYWRkLWNhcmQtcHJvamVjdFwiKSkge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiXCIpO1xuICAgICAgICBwcm9qZWN0Q2FjaGUuYWRkT2JqVG9MaXN0KG5ld1Byb2plY3QpO1xuICAgICAgICBwcm9qZWN0TWFwLmFkZFByb2plY3RUb01hcChuZXdQcm9qZWN0LmlkKTtcblxuICAgICAgICBlLnRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdENhcmQobmV3UHJvamVjdCwgYXBwRGF0YSwgdHJ1ZSk7XG4gICAgICAgIHJlbmRlckFkZENhcmREaXYoYXBwRGF0YSk7XG4gICAgfVxuICAgIHNhdmVEYXRhKGFwcERhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9jdXNPdXRIYW5kbGVyKGUsIGFwcERhdGEpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbjtcbiAgICBjb25zdCB7IGl0ZW1DYWNoZSwgcHJvamVjdENhY2hlIH0gPSBhcHBEYXRhO1xuICAgIGlmICgoKGUudHlwZSA9PT0gXCJrZXl1cFwiICYmIGUua2V5ID09PSBcIkVudGVyXCIpXG4gICAgICAgIHx8IChlLnR5cGUgPT09IFwiZm9jdXNvdXRcIlxuICAgICAgICAgICAgJiYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT09IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgfHwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJudW1iZXJcIikpXG4gICAgICAgICYmIGUudGFyZ2V0Lm1hdGNoZXMoXCJpbnB1dFwiKSkpIHtcblxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi50b2RvLXRpdGxlIGlucHV0XCIpKSB7XG4gICAgICAgICAgICBpdGVtQ2FjaGUuc2V0UHJvcFZhbHVlKGUuY3VycmVudFRhcmdldC5pZCwgXCJuYW1lXCIsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnRvZG8tZGVzYyBpbnB1dFwiKSkge1xuICAgICAgICAgICAgaXRlbUNhY2hlLnNldFByb3BWYWx1ZShlLmN1cnJlbnRUYXJnZXQuaWQsIFwiZGVzY3JpcHRpb25cIiwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIucHJvamVjdDpub3QoI2RlZmF1bHQpIGlucHV0XCIpKSB7XG4gICAgICAgICAgICBwcm9qZWN0Q2FjaGUuc2V0UHJvcFZhbHVlKGUuY3VycmVudFRhcmdldC5pZCwgXCJuYW1lXCIsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb21taXRFbGVtVGV4dChlLnRhcmdldCk7XG4gICAgICAgIHNhdmVEYXRhKGFwcERhdGEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9DYXJkQ2xpY2tIYW5kbGVyKGUsIGFwcERhdGEpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbjtcbiAgICBjb25zdCB7IGl0ZW1DYWNoZSB9ID0gYXBwRGF0YTtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi50b2RvLWRlbC1idG5cIikpIHtcbiAgICAgICAgaXRlbUNhY2hlLnJlbW92ZU9iakZyb21MaXN0KGUuY3VycmVudFRhcmdldC5pZCk7XG4gICAgICAgIHJlbW92ZUVsZW0oZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgc2F2ZURhdGEoYXBwRGF0YSk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXS5jb21wbGV0ZS1jaGVja2JveFwiKSkge1xuICAgICAgICBpdGVtQ2FjaGUuc2V0UHJvcFZhbHVlKGUuY3VycmVudFRhcmdldC5pZCwgXCJpc0NvbXBsZXRlZFwiLCBlLnRhcmdldC5jaGVja2VkKVxuICAgICAgICByZW5kZXJJdGVtcyhhcHBEYXRhKTtcbiAgICAgICAgc2F2ZURhdGEoYXBwRGF0YSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvQ2FyZERibENsaWNrSGFuZGxlcihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb247XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIudG9kby10aXRsZT5oMzpmaXJzdC1jaGlsZFwiKVxuICAgICAgICB8fCBlLnRhcmdldC5tYXRjaGVzKFwiLnRvZG8tZGVzYz5wOmZpcnN0LWNoaWxkXCIpKSB7XG4gICAgICAgIGVkaXRUZXh0KGUudGFyZ2V0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b29sQmFyQ2xpY2tIYW5kbGVyKGUsIGFwcERhdGEpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbjtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIiNzaG93LWNvbXBsZXRlZFwiKSkge1xuICAgICAgICBhcHBEYXRhLnJlbmRlckNvbXBsZXRlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHJlbmRlckl0ZW1zKGFwcERhdGEpO1xuICAgICAgICBzYXZlRGF0YShhcHBEYXRhKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVEYXRhKGFwcERhdGEpIHtcbiAgICBjb25zdCB7IGl0ZW1DYWNoZSwgcHJvamVjdENhY2hlLCBwcm9qZWN0TWFwLCBjdXJyZW50TG9hZGVkUHJvamVjdCwgcmVuZGVyQ29tcGxldGVkIH0gPSBhcHBEYXRhO1xuICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoaXRlbUNhY2hlLmdldENhY2hlKCksIHByb2plY3RDYWNoZS5nZXRDYWNoZSgpLCBwcm9qZWN0TWFwLmdldFByb2plY3RzKCksIGN1cnJlbnRMb2FkZWRQcm9qZWN0LCByZW5kZXJDb21wbGV0ZWQpXG59IiwiaW1wb3J0IHsgcmVzZXRFbGVtZW50IH0gZnJvbSBcIi4uL3ZpZXcvZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlbmRlckFkZENhcmREaXYsIHJlbmRlclByb2plY3RDYXJkLCByZW5kZXJJdGVtQ2FyZCwgYWRkU2VsZWN0ZWQgfSBmcm9tIFwiLi9jYXJkc1wiO1xuaW1wb3J0IHsgdG9vbEJhckNsaWNrSGFuZGxlciB9IGZyb20gXCIuL2V2ZW50LWhhbmRsZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJdGVtcyhhcHBEYXRhKSB7XG4gICAgY29uc3QgeyBpdGVtQ29udGFpbmVyLCBwcm9qZWN0TWFwLCBpdGVtQ2FjaGUsIHJlbmRlckNvbXBsZXRlZCwgY3VycmVudExvYWRlZFByb2plY3QgfSA9IGFwcERhdGE7XG4gICAgcmVzZXRFbGVtZW50KGl0ZW1Db250YWluZXIpO1xuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdE1hcC5nZXRQcm9qZWN0KGN1cnJlbnRMb2FkZWRQcm9qZWN0KTtcbiAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdCA9IHByb2plY3RNYXAuZ2V0UHJvamVjdChcImRlZmF1bHRcIik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpdGVtSWQgPSBwcm9qZWN0W2ldO1xuICAgICAgICBsZXQgaXRlbSA9IGl0ZW1DYWNoZS5nZXRPYmooaXRlbUlkKTtcblxuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHByb2plY3RNYXAucmVtb3ZlSXRlbUZyb21MaXN0KGN1cnJlbnRMb2FkZWRQcm9qZWN0LCBpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZW5kZXJDb21wbGV0ZWQgJiYgaXRlbS5pc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJJdGVtQ2FyZChpdGVtLCBhcHBEYXRhKTsgICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIHJlbmRlckFkZENhcmREaXYoYXBwRGF0YSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKGFwcERhdGEpIHtcbiAgICBjb25zdCB7IHByb2plY3RDYWNoZX0gPSBhcHBEYXRhO1xuICAgIGxldCBwcm9qZWN0cyA9IHByb2plY3RDYWNoZS5nZXRPYmpzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZW5kZXJQcm9qZWN0Q2FyZChwcm9qZWN0c1tpXSwgYXBwRGF0YSwgZmFsc2UpO1xuICAgIH1cbiAgICByZW5kZXJBZGRDYXJkRGl2KGFwcERhdGEpO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hDaGVja2JveChjaGVja2JveCwgdmFsdWUpIHtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkKGl0ZW1Db250YWluZXIsXG4gICAgcHJvamVjdENvbnRhaW5lcixcbiAgICB0b29sYmFyLFxuICAgIHByb2plY3RDYWNoZSxcbiAgICBpdGVtQ2FjaGUsXG4gICAgcHJvamVjdE1hcCxcbiAgICBjdXJyZW50TG9hZGVkUHJvamVjdCxcbiAgICByZW5kZXJDb21wbGV0ZWRcbikge1xuXG4gICAgY29uc3QgYXBwRGF0YSA9IHtcbiAgICAgICAgaXRlbUNvbnRhaW5lcixcbiAgICAgICAgcHJvamVjdENvbnRhaW5lcixcbiAgICAgICAgcHJvamVjdENhY2hlLFxuICAgICAgICBpdGVtQ2FjaGUsXG4gICAgICAgIHByb2plY3RNYXAsXG4gICAgICAgIHJlbmRlckNvbXBsZXRlZCxcbiAgICAgICAgY3VycmVudExvYWRlZFByb2plY3RcbiAgICB9XG4gICAgcmVuZGVySXRlbXMoYXBwRGF0YSwgY3VycmVudExvYWRlZFByb2plY3QpO1xuICAgIHJlbmRlclByb2plY3RzKGFwcERhdGEpO1xuICAgIHN3aXRjaENoZWNrYm94KHRvb2xiYXIucXVlcnlTZWxlY3RvcihcIiNzaG93LWNvbXBsZXRlZFwiKSwgcmVuZGVyQ29tcGxldGVkKTtcbiAgICB0b29sYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0b29sQmFyQ2xpY2tIYW5kbGVyKGUsIGFwcERhdGEpKTtcbn1cbiIsImltcG9ydCBjcmVhdGVVSUQgZnJvbSBcIi4uLy4uL2hlbHBlcnMvdWlkXCI7XG5cbmV4cG9ydCBjbGFzcyBJdGVte1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaWQgKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSBpZCA/IGlkIDogY3JlYXRlVUlEKFwiaXRlbVwiKTtcbiAgICB9O1xuICAgIFxuICAgIFxufVxuIiwiaW1wb3J0IGNyZWF0ZVVJRCBmcm9tIFwiLi4vLi4vaGVscGVycy91aWRcIlxuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgaWQpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkID8gaWQgOiBjcmVhdGVVSUQoXCJwcm9qZWN0XCIpO1xuICAgICAgICB0aGlzLmlzRGVmYXVsdCA9IHRoaXMuaWQgPT09IFwiZGVmYXVsdFwiO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FjaGUoY2xhc3NUZW1wbGF0ZSkge1xuICAgIGxldCBjYWNoZSA9IHt9O1xuICAgIGZ1bmN0aW9uIGFkZE9ialRvTGlzdChvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopICE9PSBjbGFzc1RlbXBsYXRlLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNhY2hlW29iai5pZF0gPSBvYmo7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBzZXRQcm9wVmFsdWUob2JqSWQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIGlmICghT2JqZWN0Lmhhc093bihjYWNoZVtvYmpJZF0sIHByb3ApIHx8IChwcm9wID09PSBcImlkXCIpKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYWNoZVtvYmpJZF1bcHJvcF0gPSB2YWx1ZTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHJlbW92ZU9iakZyb21MaXN0KG9iaklkKSB7XG4gICAgICAgIGRlbGV0ZSBjYWNoZVtvYmpJZF07XG4gICAgfTtcbiAgICBmdW5jdGlvbiBnZXRPYmoob2JqSWQpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlW29iaklkXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0T2JqcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY2FjaGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDYWNoZSgpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRDYWNoZShuZXdDYWNoZSkge1xuICAgICAgICBjYWNoZSA9IG5ld0NhY2hlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRPYmpUb0xpc3QsXG4gICAgICAgIGdldE9iaixcbiAgICAgICAgc2V0UHJvcFZhbHVlLFxuICAgICAgICBnZXRPYmpzLFxuICAgICAgICBnZXRDYWNoZSxcbiAgICAgICAgc2V0Q2FjaGUsXG4gICAgICAgIHJlbW92ZU9iakZyb21MaXN0XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdE1hcCgpIHtcbiAgICBsZXQgcHJvamVjdHMgPSB7IFwiZGVmYXVsdFwiOiBbXSB9O1xuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RUb01hcChwcm9qZWN0SWQpIHtcbiAgICAgICAgaWYgKHByb2plY3RzLmhhc093blByb3BlcnR5KHByb2plY3RJZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SWRdID0gW107XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tTWFwKHByb2plY3RJZCkge1xuICAgICAgICBkZWxldGUgcHJvamVjdHNbcHJvamVjdElkXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkSXRlbVRvUHJvamVjdChwcm9qZWN0SWQsIGl0ZW1JZCkge1xuICAgICAgICBpZiAoIXByb2plY3RzLmhhc093blByb3BlcnR5KHByb2plY3RJZCkpIHtcbiAgICAgICAgICAgIGFkZFByb2plY3RUb01hcChwcm9qZWN0SWQpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJZF0ucHVzaChpdGVtSWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0KHByb2plY3RJZCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdElkXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlSXRlbUZyb21MaXN0KHByb2plY3RJZCwgaW5kZXgpe1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SWRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRQcm9qZWN0TWFwKHByb2plY3RPYmplY3QpIHtcbiAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0T2JqZWN0O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0VG9NYXAsXG4gICAgICAgIHJlbW92ZVByb2plY3RGcm9tTWFwLFxuICAgICAgICBhZGRJdGVtVG9Qcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0cyxcbiAgICAgICAgZ2V0UHJvamVjdCxcbiAgICAgICAgbG9hZFByb2plY3RNYXAsXG4gICAgICAgIHJlbW92ZUl0ZW1Gcm9tTGlzdFxuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtKGVsZW0gPSBcImRpdlwiLCBjbGFzc05hbWVzID0gW10sIHBhcmVudEVsZW0gPSBudWxsLCBpZCA9IG51bGwpIHtcbiAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcbiAgICBpZiAocGFyZW50RWxlbSkge1xuICAgICAgICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKG5ld0VsZW0pO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lcy5sZW5ndGggIT0gMCkge1xuICAgICAgICBuZXdFbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XG4gICAgfVxuICAgIGlmIChpZCkge1xuICAgICAgICBuZXdFbGVtLmlkID0gaWQ7XG4gICAgfVxuICAgIHJldHVybiBuZXdFbGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRFbGVtZW50KGVsZW0sIGtlZXBDbGFzcyA9IGZhbHNlKSB7XG4gICAgaWYgKCFrZWVwQ2xhc3MpIHtcbiAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBcIlwiO1xuICAgIH1cbiAgICBlbGVtLnJlcGxhY2VDaGlsZHJlbigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRWxlbShjb250YWluZXIsIGNoaWxkcmVuKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoLi4uY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZHJlbilcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXRFbGVtKGNvbnRhaW5lciwgZWxlbVRleHQpIHtcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGNyZWF0ZUVsZW0oXCJpbnB1dFwiLCBbXSwgY29udGFpbmVyKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZWxlbVRleHQpO1xuICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUZXh0KGVsZW0pIHtcbiAgICBsZXQgZWxlbVRleHQgPSBlbGVtLnRleHRDb250ZW50O1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNyZWF0ZUlucHV0RWxlbShlbGVtLCBlbGVtVGV4dCk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVsZW0oZWxlbSkge1xuICAgIGVsZW0ucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRFbGVtVGV4dChlbGVtKSB7XG4gICAgbGV0IGVsZW1QYXJlbnQgPSBlbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IGVsZW1UZXh0ID0gZWxlbS52YWx1ZTtcbiAgICBlbGVtUGFyZW50LnRleHRDb250ZW50ID0gZWxlbVRleHQ7XG5cbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtIH0gZnJvbSBcIi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZE5ld0NhcmQoY29udGFpbmVyLCBkaXN0aW5ndWlzaGVyLCBwcm9qZWN0SWQgPSBudWxsKXtcbiAgICBsZXQgYWRkQ2FyZERpdiA9IGNyZWF0ZUVsZW0oXCJkaXZcIixbYGFkZC1jYXJkLSR7ZGlzdGluZ3Vpc2hlcn1gLCAnYWRkLXN5bWJvbCddLGNvbnRhaW5lcik7XG4gICAgYWRkQ2FyZERpdi50ZXh0Q29udGVudCA9IFwiYWRkXCI7XG4gICAgaWYgKHByb2plY3RJZCkge1xuICAgICAgICBhZGRDYXJkRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLHByb2plY3RJZCk7XG4gICAgfVxuICAgIHJldHVybiBhZGRDYXJkRGl2O1xufSIsImV4cG9ydCBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLWNvbnRlbnRcIik7XG5leHBvcnQgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1jb250ZW50XCIpO1xuZXhwb3J0IGNvbnN0IHRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtdG9vbGJhclwiKTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtLCBjcmVhdGVJbnB1dEVsZW0gfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocCwgaXNOZXdJdGVtLCBjb250YWluZXIpIHtcbiAgICBsZXQgcHJvamVjdCA9IGNyZWF0ZUVsZW0oXCJkaXZcIiwgW1wicHJvamVjdFwiXSwgY29udGFpbmVyLCBwLmlkKTtcbiAgICBsZXQgcHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbShcImgzXCIsIFtdLCBwcm9qZWN0KTtcbiAgICBpZiAoaXNOZXdJdGVtKSB7XG4gICAgICAgIGNyZWF0ZUlucHV0RWxlbShwcm9qZWN0VGl0bGUsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHAubmFtZTtcbiAgICB9XG5cbiAgICBpZiAoIXAuaXNEZWZhdWx0KSB7XG4gICAgICAgIGxldCBwcm9qZWN0QWN0aW9ucyA9IGNyZWF0ZUVsZW0oXCJkaXZcIiwgW1wicHJvamVjdC1hY3Rpb25zXCJdLCBwcm9qZWN0KTtcbiAgICAgICAgbGV0IGRlbGV0ZVByb2plY3QgPSBjcmVhdGVFbGVtKFwiYnV0dG9uXCIsIFtcImRlbGV0ZS1idXR0b25cIiwgXCJkZWxldGUtc3ltYm9sXCJdLCBwcm9qZWN0QWN0aW9ucyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIH1cbiAgICByZXR1cm4gcHJvamVjdDtcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtLCBjcmVhdGVJbnB1dEVsZW0gfSBmcm9tIFwiLi9lbGVtZW50c1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvQ2FyZChuYW1lID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiLCBpc0NvbXBsZXRlZCA9IGZhbHNlLCBpZCwgaXNOZXdJdGVtQ2FyZCwgY29udGFpbmVyKSB7XG4gICAgbGV0IHRvZG9FbGVtID0gY3JlYXRlRWxlbShcImRpdlwiLCBbXCJ0b2RvLWNhcmRcIl0sIGNvbnRhaW5lciwgaWQpO1xuICAgIGxldCB0b2RvVGl0bGUgPSBjcmVhdGVFbGVtKFwiZGl2XCIsIFtcInRvZG8tdGl0bGVcIl0sIHRvZG9FbGVtKTtcbiAgICBsZXQgdG9kb0Rlc2MgPSBjcmVhdGVFbGVtKFwiZGl2XCIsIFtcInRvZG8tZGVzY1wiXSwgdG9kb0VsZW0pO1xuICAgIGxldCB0b2RvVGl0bGVUZXh0ID0gY3JlYXRlRWxlbShcImgzXCIsIFtdLCB0b2RvVGl0bGUpO1xuICAgIGxldCB0b2RvRGVzY1RleHQgPSBjcmVhdGVFbGVtKFwicFwiLCBbXSwgdG9kb0Rlc2MpO1xuICAgIGlmIChpc05ld0l0ZW1DYXJkKSB7XG4gICAgICAgIGNyZWF0ZUlucHV0RWxlbSh0b2RvVGl0bGVUZXh0LCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvVGl0bGVUZXh0LnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB9XG4gICAgdG9kb0Rlc2NUZXh0LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb24gPT09IFwiXCIgPyBcIkRlc2NyaXB0aW9uXCIgOiBkZXNjcmlwdGlvbjtcblxuXG4gICAgbGV0IHRvZ2dsZUlkID0gYHRvZ2dsZSR7aWR9YDtcbiAgICBsZXQgdG9kb0NvbXBsZXRlZERpdiA9IGNyZWF0ZUVsZW0oXCJkaXZcIiwgW1widG9kby1jb21wbGV0ZVwiXSwgdG9kb0VsZW0pO1xuICAgIGxldCB0b2RvQ29tcGxldGVkID0gY3JlYXRlRWxlbShcImlucHV0XCIsIFtcImNvbXBsZXRlLWNoZWNrYm94XCJdLCB0b2RvQ29tcGxldGVkRGl2LCB0b2dnbGVJZCk7XG4gICAgdG9kb0NvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgaWYgKGlzQ29tcGxldGVkKSB0b2RvQ29tcGxldGVkLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJcIik7XG5cbiAgICBsZXQgdG9kb0NvbXBsZXRlID0gY3JlYXRlRWxlbShcImxhYmVsXCIsIFtdLCB0b2RvQ29tcGxldGVkRGl2KTtcbiAgICB0b2RvQ29tcGxldGUudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlZD9cIjtcblxuICAgIGxldCB0b2RvRWxlbUFjdGlvbnMgPSBjcmVhdGVFbGVtKFwiZGl2XCIsIFtcInRvZG8tYWN0aW9uc1wiXSwgdG9kb0VsZW0pO1xuICAgIHRvZG9Db21wbGV0ZS5odG1sRm9yID0gdG9nZ2xlSWQ7XG5cbiAgICBsZXQgdG9kb0RlbEJ1dHRvbiA9IGNyZWF0ZUVsZW0oXCJidXR0b25cIiwgW1widG9kby1kZWwtYnRuXCIsIFwiZGVsZXRlLWJ1dHRvblwiLCBcImRlbGV0ZS1zeW1ib2xcIl0sIHRvZG9FbGVtQWN0aW9ucyk7XG4gICAgdG9kb0RlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgICByZXR1cm4gdG9kb0VsZW07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBtYWluQ29udGFpbmVyLCBzaWRlYmFyQ29udGFpbmVyLCB0b29sYmFyIH0gZnJvbSAnLi9tb2R1bGVzL29iamVjdHMvdmlldy9odG1sLWVsZW1lbnRzLmpzJztcbmltcG9ydCB7IGxvYWQgfSBmcm9tICcuL21vZHVsZXMvb2JqZWN0cy9jb250cm9sbGVyL3RvZG8uanMnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vbW9kdWxlcy9vYmplY3RzL21vZGVsL2l0ZW0uanMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vbW9kdWxlcy9vYmplY3RzL21vZGVsL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FjaGUsIGNyZWF0ZVByb2plY3RNYXAgfSBmcm9tICcuL21vZHVsZXMvb2JqZWN0cy9tb2RlbC90b2RvLmpzJztcbmltcG9ydCB7IGxvYWREYXRhRnJvbUxvY2FsU3RvcmFnZSwgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gJy4vbW9kdWxlcy9vYmplY3RzL2NvbnRyb2xsZXIvZGF0YS5qcyc7XG5cbmNvbnN0IGl0ZW1DYWNoZSA9IGNyZWF0ZUNhY2hlKEl0ZW0pO1xuY29uc3QgcHJvamVjdENhY2hlID0gY3JlYXRlQ2FjaGUoUHJvamVjdCk7XG5jb25zdCBwcm9qZWN0TWFwID0gY3JlYXRlUHJvamVjdE1hcCgpO1xuXG5jb25zdCBkZWZhdWx0SWQgPSBcImRlZmF1bHRcIjtcbmxldCBjdXJyZW50TG9hZGVkUHJvamVjdCA9IGRlZmF1bHRJZDtcbmxldCByZW5kZXJDb21wbGV0ZWQgPSBmYWxzZTtcbmxldCBkZWZQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJHZW5lcmFsXCIsIGRlZmF1bHRJZCk7XG5wcm9qZWN0Q2FjaGUuYWRkT2JqVG9MaXN0KGRlZlByb2plY3QpO1xuXG5jb25zdCBleGlzdGluZ0RhdGEgPSBsb2FkRGF0YUZyb21Mb2NhbFN0b3JhZ2UoaXRlbUNhY2hlLmdldENhY2hlKCksIHByb2plY3RDYWNoZS5nZXRDYWNoZSgpLCBwcm9qZWN0TWFwLmdldFByb2plY3RzKCksIGRlZmF1bHRJZCk7XG5pZiAoZXhpc3RpbmdEYXRhKSB7XG4gICAgaXRlbUNhY2hlLnNldENhY2hlKGV4aXN0aW5nRGF0YS5pdGVtcyk7XG4gICAgcHJvamVjdENhY2hlLnNldENhY2hlKGV4aXN0aW5nRGF0YS5wcm9qZWN0cyk7XG4gICAgcHJvamVjdE1hcC5sb2FkUHJvamVjdE1hcChleGlzdGluZ0RhdGEucHJvamVjdE1hcCk7XG4gICAgY3VycmVudExvYWRlZFByb2plY3QgPSBleGlzdGluZ0RhdGEuY3VycmVudExvYWRlZFByb2plY3Q7XG4gICAgcmVuZGVyQ29tcGxldGVkID0gZXhpc3RpbmdEYXRhLnJlbmRlckNvbXBsZXRlZDtcbn1cblxubG9hZChtYWluQ29udGFpbmVyLCBcbiAgICBzaWRlYmFyQ29udGFpbmVyLCBcbiAgICB0b29sYmFyLCBcbiAgICBwcm9qZWN0Q2FjaGUsIFxuICAgIGl0ZW1DYWNoZSwgXG4gICAgcHJvamVjdE1hcCwgXG4gICAgY3VycmVudExvYWRlZFByb2plY3QsIFxuICAgIHJlbmRlckNvbXBsZXRlZCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9