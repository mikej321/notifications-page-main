/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%;
}

body {
  position: relative;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 600px) {
  body {
    background: hsl(210, 60%, 98%);
  }
}
img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.container {
  max-width: 32.75rem;
  display: grid;
  grid-template-areas: "header" "main";
  padding: 2rem 1rem;
  gap: 2rem;
}

@media screen and (min-width: 600px) {
  .container {
    margin-top: 5rem;
    max-width: 56rem;
    background: hsl(0, 0%, 100%);
    border-radius: 12px;
    padding: 3rem 2rem 0.5rem;
  }
}
header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header .counter_container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
header .counter_container h1 {
  font-size: 1.8rem;
  font-weight: 800;
}
header .counter_container .notification_counter {
  background: hsl(219, 85%, 26%);
  color: hsl(0, 0%, 100%);
  padding-block: 0.15rem;
  padding-inline: 1rem;
  border-radius: 4px;
  font-weight: 800;
}
header a {
  text-decoration: none;
  font-size: 1.4rem;
  color: hsl(219, 12%, 42%);
  letter-spacing: -0.5px;
  transition: color 0.2s ease-in-out;
}
header a:hover {
  color: hsl(219, 85%, 26%);
}

main {
  grid-area: main;
  display: grid;
  gap: 1rem;
}
main .notification_container {
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  padding: 1rem;
  gap: 1rem;
  border-radius: 8px;
}
main .notification_container[unread=""] {
  background: hsl(210, 60%, 98%);
}
main .notification_container .user_img {
  max-width: 3.5rem;
  height: 3.5rem;
  align-self: baseline;
}
main .notification_container .post_container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: hsl(219, 12%, 42%);
  width: 100%;
}
main .notification_container .post_container p:first-child .user_name {
  color: hsl(224, 21%, 14%);
  font-weight: 800;
  margin-right: 0.25rem;
}
main .notification_container .post_container p:first-child .user_event {
  font-weight: 800;
  margin-left: 0.25rem;
}
main .notification_container .post_container p:first-child .user_group {
  font-weight: 800;
  color: hsl(219, 85%, 26%);
  margin-left: 0.25rem;
}
main .notification_container .post_container .date_posted {
  color: hsl(219, 14%, 63%);
}
main .notification_container .post_container .private_message {
  margin-top: 0.5rem;
  border: 1px solid hsl(205, 33%, 90%);
  padding: 1rem 2rem 1rem 1rem;
  font-size: 1.3rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}
main .notification_container .pic_comment {
  max-width: 3.5rem;
  height: 3.5rem;
  align-self: baseline;
  cursor: pointer;
  transition: padding 0.05s ease-in-out;
}
main .notification_container .pic_comment:hover {
  border: 1px solid hsl(205, 33%, 90%);
  padding: 0.1rem;
  border-radius: 4px;
}

main .notification_container .post_container p a {
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

main .notification_container .post_container p:hover a:hover {
  color: hsl(219, 85%, 26%);
}

main .notification_container .post_container .private_message:hover {
  background: hsl(211, 68%, 94%);
}

@media screen and (min-width: 600px) {
  main .notification_container .post_container .private_message {
    padding: 1.5rem;
  }
}
main .notification_container .post_container p:first-child .unread_dot {
  display: none;
}

main .notification_container[unread=""] .post_container p:first-child .unread_dot {
  display: inline-block;
  width: 100%;
  max-width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: hsl(1, 90%, 64%);
  margin-left: 0.5rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"AAoBA;;;EAGI,sBAAA;AAlBJ;;AAoBA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;AAjBJ;;AAmBA;EACI,gBAAA;AAhBJ;;AAkBA;EACI,kBAAA;EACA,4CAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAfJ;;AAiBA;EACI;IACI,8BAjCkB;EAmBxB;AACF;AAeA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;AAbJ;;AAgBA;EACI,mBAAA;EACA,aAAA;EACA,oCAAA;EACA,kBAAA;EACA,SAAA;AAbJ;;AAeA;EACI;IACI,gBAAA;IACA,gBAAA;IACA,4BArDA;IAsDA,mBAAA;IACA,yBAAA;EAZN;AACF;AAaA;EACI,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAXJ;AAYI;EACI,aAAA;EACA,mBAAA;EACA,YAAA;AAVR;AAWQ;EACI,iBAAA;EACA,gBAAA;AATZ;AAUQ;EACI,8BAzEL;EA0EK,uBAvEJ;EAwEI,sBAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;AARZ;AASI;EACI,qBAAA;EACA,iBAAA;EACA,yBA1EY;EA2EZ,sBAAA;EACA,kCAAA;AAPR;AAQQ;EACI,yBAtFL;AAgFP;;AAQA;EACI,eAAA;EACA,aAAA;EACA,SAAA;AALJ;AAMI;EACI,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,aAAA;EACA,SAAA;EACA,kBAAA;AAJR;AAKQ;EACI,8BAhGc;AA6F1B;AAIQ;EACI,iBAAA;EACA,cAAA;EACA,oBAAA;AAFZ;AAGQ;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,yBArGQ;EAsGR,WAAA;AADZ;AAEY;EACI,yBAvGC;EAwGD,gBAAA;EACA,qBAAA;AAAhB;AACY;EACI,gBAAA;EACA,oBAAA;AAChB;AAAY;EACI,gBAAA;EACA,yBAxHT;EAyHS,oBAAA;AAEhB;AADY;EACI,yBApHD;AAuHf;AAFY;EACI,kBAAA;EACA,oCAAA;EACA,4BAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,uCAAA;AAIhB;AAHQ;EACI,iBAAA;EACA,cAAA;EACA,oBAAA;EACA,eAAA;EACA,qCAAA;AAKZ;AAJY;EACI,oCAAA;EACA,eAAA;EACA,kBAAA;AAMhB;;AAJA;EACI,eAAA;EACA,kCAAA;AAOJ;;AALA;EACI,yBApJG;AA4JP;;AANA;EACI,8BAlJmB;AA2JvB;;AAPA;EACI;IACI,eAAA;EAUN;AACF;AATA;EACI,aAAA;AAWJ;;AATA;EACI,qBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,4BAvKE;EAwKF,mBAAA;AAYJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap')\n\n// need 'Plus Jakarta Sans', sans-serif at 500 and 800\n\n// Primary Colors\n$red: hsl(1, 90%, 64%)\n$blue: hsl(219, 85%, 26%)\n\n// Neutral\n$white: hsl(0, 0%, 100%)\n$very_light_grayish_blue: hsl(210, 60%, 98%)\n$light_grayish_blue_1: hsl(211, 68%, 94%)\n$light_grayish_blue_2: hsl(205, 33%, 90%)\n$grayish_blue: hsl(219, 14%, 63%)\n$dark_grayish_blue: hsl(219, 12%, 42%)\n$very_dark_blue: hsl(224, 21%, 14%)\n\n// Font-sizes\n$font_size_paragraph: 16px\n\n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nbody\n    position: relative\n    font-family: 'Plus Jakarta Sans', sans-serif\n    font-size: 1.6rem\n    display: flex\n    flex-direction: column\n    align-items: center\n    \n@media screen and (min-width: 600px)\n    body\n        background: $very_light_grayish_blue\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\n// unread comments will have the unread data attribute to give it a light blue background\n.container\n    max-width: 32.75rem\n    display: grid\n    grid-template-areas: \"header\" \"main\"\n    padding: 2rem 1rem\n    gap: 2rem\n\n@media screen and (min-width: 600px)\n    .container\n        margin-top: 5rem\n        max-width: 56rem\n        background: $white\n        border-radius: 12px\n        padding: 3rem 2rem .5rem\n\nheader\n    grid-area: header\n    display: flex\n    align-items: center\n    justify-content: space-between\n    .counter_container\n        display: flex\n        align-items: center\n        gap: .75rem\n        h1\n            font-size: 1.8rem\n            font-weight: 800\n        .notification_counter\n            background: $blue\n            color: $white\n            padding-block: .15rem\n            padding-inline: 1rem\n            border-radius: 4px\n            font-weight: 800\n    a\n        text-decoration: none\n        font-size: 1.4rem\n        color: $dark_grayish_blue\n        letter-spacing: -0.5px\n        transition: color 0.2s ease-in-out\n        &:hover\n            color: $blue\n\nmain\n    grid-area: main\n    display: grid\n    gap: 1rem\n    .notification_container\n        display: flex\n        align-items: center\n        font-size: 1.3rem\n        padding: 1rem\n        gap: 1rem\n        border-radius: 8px\n        &[unread=\"\"]\n            background: $very_light_grayish_blue\n        .user_img\n            max-width: 3.5rem\n            height: 3.5rem\n            align-self: baseline\n        .post_container\n            display: flex\n            flex-direction: column\n            gap: .25rem\n            color: $dark_grayish_blue\n            width: 100%\n            & p:first-child .user_name\n                color: $very_dark_blue\n                font-weight: 800\n                margin-right: .25rem\n            & p:first-child .user_event\n                font-weight: 800\n                margin-left: .25rem\n            & p:first-child .user_group\n                font-weight: 800\n                color: $blue\n                margin-left: .25rem\n            .date_posted\n                color: $grayish_blue\n            .private_message\n                margin-top: .5rem\n                border: 1px solid $light_grayish_blue_2\n                padding: 1rem 2rem 1rem 1rem\n                font-size: 1.3rem\n                border-radius: 4px\n                cursor: pointer\n                transition: background 0.2s ease-in-out\n        .pic_comment\n            max-width: 3.5rem\n            height: 3.5rem\n            align-self: baseline\n            cursor: pointer\n            transition: padding 0.05s ease-in-out\n            &:hover\n                border: 1px solid $light_grayish_blue_2\n                padding: .1rem\n                border-radius: 4px\n\nmain .notification_container .post_container p a\n    cursor: pointer\n    transition: color 0.2s ease-in-out\n\nmain .notification_container .post_container p:hover a:hover\n    color: $blue\n\nmain .notification_container .post_container .private_message:hover\n    background: $light_grayish_blue_1\n\n@media screen and (min-width: 600px)\n    main .notification_container .post_container .private_message\n        padding: 1.5rem \n\nmain .notification_container .post_container p:first-child .unread_dot\n    display: none\n    \nmain .notification_container[unread=\"\"] .post_container p:first-child .unread_dot\n    display: inline-block\n    width: 100%\n    max-width: .75rem\n    height: .75rem\n    border-radius: 50%\n    background: $red\n    margin-left: .5rem\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");


const notificationCounter = document.querySelector('.notification_counter');
const userNames = document.querySelectorAll('.user_name');
const userGroups = document.querySelectorAll('.user_group');
const userEvents = document.querySelectorAll('.user_event');
const readMarker = document.querySelector('.read_marker');
const notificationContainers = document.querySelectorAll('.notification_container');

class Notifications {
    constructor() {
        this.unread = notificationCounter.textContent;
    }
    
    reduceUnreadByStep() {
        const notificationCounter = document.querySelector('.notification_counter');
        let notificationValue = Number(notificationCounter.textContent)

        if (notificationValue > 0) {
            this.unread--;
            notificationCounter.textContent = this.unread;
        }
    }
    
    reduceUnreadToZero() {
        const notificationCounter = document.querySelector('.notification_counter');
        let notificationValue = Number(notificationCounter.textContent);
        
        if (notificationValue > 0) {
            this.unread = 0;
            notificationCounter.textContent = this.unread;
            notificationContainers.forEach(container => container.removeAttribute('unread'));
        }
    }
}

/* If you click Mark all as read, it will remove the background on the read posts
and the red dots as well. Also, make it to where if you click on the user_name or the 
user_group/user_event, it will mark it as read as well. */

// Reduces the notifications counter decreases by 1 if clicking the user_name/event

// Reduces the notifications counter decreases to 0 if clicking Mark all as read

const userNotifications = new Notifications();

// Event listener for "Mark all as read" that reduces counter to 0 by calling reduceUnreadToZero

readMarker.addEventListener('click', (e) => {
    e.preventDefault();

    userNotifications.reduceUnreadToZero();
})

// Event listeners for all of the different a tags located in the notification containers

userNames.forEach((user) => {
    // checks if the container of the clicked element has the unread attribute

    // if it does, it removes it and lessens the counter by 1
    user.addEventListener('click', (e) => {
        e.preventDefault();
        let grandParent = user.parentElement.parentElement.parentElement;
        
        if (grandParent.hasAttribute('unread')) {
            grandParent.removeAttribute('unread');
            userNotifications.reduceUnreadByStep();
        }
    })
})

userGroups.forEach((group) => {
    group.addEventListener('click', (e) => {
        e.preventDefault();
        let grandParent = group.parentElement.parentElement.parentElement;
        
        if (grandParent.hasAttribute('unread')) {
            grandParent.removeAttribute('unread');
            userNotifications.reduceUnreadByStep();
        }
    })
})

userEvents.forEach((event) => {
    event.addEventListener('click', (e) => {
        e.preventDefault();
        let grandParent = event.parentElement.parentElement.parentElement;

        if (grandParent.hasAttribute('unread')) {
            grandParent.removeAttribute('unread');
            userNotifications.reduceUnreadByStep();
        }
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNJQUFzSSx5QkFBeUI7QUFDL0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywyRkFBMkYsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLFFB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OztBQ0E2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi8uL3NyYy9zdHlsZXMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbm90aWZpY2F0aW9ucy1wYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzcz9iZmFkIiwid2VicGFjazovL25vdGlmaWNhdGlvbnMtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25vdGlmaWNhdGlvbnMtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25vdGlmaWNhdGlvbnMtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbm90aWZpY2F0aW9ucy1wYWdlLW1haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm90aWZpY2F0aW9ucy1wYWdlLW1haW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbm90aWZpY2F0aW9ucy1wYWdlLW1haW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25vdGlmaWNhdGlvbnMtcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbm90aWZpY2F0aW9ucy1wYWdlLW1haW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbm90aWZpY2F0aW9ucy1wYWdlLW1haW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbHVzK0pha2FydGErU2FuczppdGFsLHdnaHRAMCwyMDAuLjgwMDsxLDIwMC4uODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJQbHVzIEpha2FydGEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogaHNsKDIxMCwgNjAlLCA5OCUpO1xuICB9XG59XG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzIuNzVyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyXCIgXCJtYWluXCI7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgZ2FwOiAycmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIG1heC13aWR0aDogNTZyZW07XG4gICAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDNyZW0gMnJlbSAwLjVyZW07XG4gIH1cbn1cbmhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5oZWFkZXIgLmNvdW50ZXJfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuaGVhZGVyIC5jb3VudGVyX2NvbnRhaW5lciBoMSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuaGVhZGVyIC5jb3VudGVyX2NvbnRhaW5lciAubm90aWZpY2F0aW9uX2NvdW50ZXIge1xuICBiYWNrZ3JvdW5kOiBoc2woMjE5LCA4NSUsIDI2JSk7XG4gIGNvbG9yOiBoc2woMCwgMCUsIDEwMCUpO1xuICBwYWRkaW5nLWJsb2NrOiAwLjE1cmVtO1xuICBwYWRkaW5nLWlubGluZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuaGVhZGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogaHNsKDIxOSwgMTIlLCA0MiUpO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuaGVhZGVyIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDIxOSwgODUlLCAyNiUpO1xufVxuXG5tYWluIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG59XG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGdhcDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lclt1bnJlYWQ9XCJcIl0ge1xuICBiYWNrZ3JvdW5kOiBoc2woMjEwLCA2MCUsIDk4JSk7XG59XG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC51c2VyX2ltZyB7XG4gIG1heC13aWR0aDogMy41cmVtO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG59XG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4yNXJlbTtcbiAgY29sb3I6IGhzbCgyMTksIDEyJSwgNDIlKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciBwOmZpcnN0LWNoaWxkIC51c2VyX25hbWUge1xuICBjb2xvcjogaHNsKDIyNCwgMjElLCAxNCUpO1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59XG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciBwOmZpcnN0LWNoaWxkIC51c2VyX2V2ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG59XG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciBwOmZpcnN0LWNoaWxkIC51c2VyX2dyb3VwIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IGhzbCgyMTksIDg1JSwgMjYlKTtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG59XG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciAuZGF0ZV9wb3N0ZWQge1xuICBjb2xvcjogaHNsKDIxOSwgMTQlLCA2MyUpO1xufVxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAucG9zdF9jb250YWluZXIgLnByaXZhdGVfbWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDIwNSwgMzMlLCA5MCUpO1xuICBwYWRkaW5nOiAxcmVtIDJyZW0gMXJlbSAxcmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcbn1cbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXIgLnBpY19jb21tZW50IHtcbiAgbWF4LXdpZHRoOiAzLjVyZW07XG4gIGhlaWdodDogMy41cmVtO1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuMDVzIGVhc2UtaW4tb3V0O1xufVxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAucGljX2NvbW1lbnQ6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjA1LCAzMyUsIDkwJSk7XG4gIHBhZGRpbmc6IDAuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciBwIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXIgLnBvc3RfY29udGFpbmVyIHA6aG92ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMjE5LCA4NSUsIDI2JSk7XG59XG5cbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXIgLnBvc3RfY29udGFpbmVyIC5wcml2YXRlX21lc3NhZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBoc2woMjExLCA2OCUsIDk0JSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIG1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXIgLnBvc3RfY29udGFpbmVyIC5wcml2YXRlX21lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxufVxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAucG9zdF9jb250YWluZXIgcDpmaXJzdC1jaGlsZCAudW5yZWFkX2RvdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXJbdW5yZWFkPVwiXCJdIC5wb3N0X2NvbnRhaW5lciBwOmZpcnN0LWNoaWxkIC51bnJlYWRfZG90IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAwLjc1cmVtO1xuICBoZWlnaHQ6IDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogaHNsKDEsIDkwJSwgNjQlKTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFvQkE7OztFQUdJLHNCQUFBO0FBbEJKOztBQW9CQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFqQko7O0FBbUJBO0VBQ0ksZ0JBQUE7QUFoQko7O0FBa0JBO0VBQ0ksa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFmSjs7QUFpQkE7RUFDSTtJQUNJLDhCQWpDa0I7RUFtQnhCO0FBQ0Y7QUFlQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFiSjs7QUFnQkE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQWJKOztBQWVBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsNEJBckRBO0lBc0RBLG1CQUFBO0lBQ0EseUJBQUE7RUFaTjtBQUNGO0FBYUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBWEo7QUFZSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFWUjtBQVdRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQVRaO0FBVVE7RUFDSSw4QkF6RUw7RUEwRUssdUJBdkVKO0VBd0VJLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUlo7QUFTSTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkExRVk7RUEyRVosc0JBQUE7RUFDQSxrQ0FBQTtBQVBSO0FBUVE7RUFDSSx5QkF0Rkw7QUFnRlA7O0FBUUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFMSjtBQU1JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBSlI7QUFLUTtFQUNJLDhCQWhHYztBQTZGMUI7QUFJUTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBRlo7QUFHUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFyR1E7RUFzR1IsV0FBQTtBQURaO0FBRVk7RUFDSSx5QkF2R0M7RUF3R0QsZ0JBQUE7RUFDQSxxQkFBQTtBQUFoQjtBQUNZO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQUNoQjtBQUFZO0VBQ0ksZ0JBQUE7RUFDQSx5QkF4SFQ7RUF5SFMsb0JBQUE7QUFFaEI7QUFEWTtFQUNJLHlCQXBIRDtBQXVIZjtBQUZZO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtBQUloQjtBQUhRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUFLWjtBQUpZO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFNaEI7O0FBSkE7RUFDSSxlQUFBO0VBQ0Esa0NBQUE7QUFPSjs7QUFMQTtFQUNJLHlCQXBKRztBQTRKUDs7QUFOQTtFQUNJLDhCQWxKbUI7QUEySnZCOztBQVBBO0VBQ0k7SUFDSSxlQUFBO0VBVU47QUFDRjtBQVRBO0VBQ0ksYUFBQTtBQVdKOztBQVRBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkF2S0U7RUF3S0YsbUJBQUE7QUFZSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbHVzK0pha2FydGErU2FuczppdGFsLHdnaHRAMCwyMDAuLjgwMDsxLDIwMC4uODAwJmRpc3BsYXk9c3dhcCcpXFxuXFxuLy8gbmVlZCAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmIGF0IDUwMCBhbmQgODAwXFxuXFxuLy8gUHJpbWFyeSBDb2xvcnNcXG4kcmVkOiBoc2woMSwgOTAlLCA2NCUpXFxuJGJsdWU6IGhzbCgyMTksIDg1JSwgMjYlKVxcblxcbi8vIE5ldXRyYWxcXG4kd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSlcXG4kdmVyeV9saWdodF9ncmF5aXNoX2JsdWU6IGhzbCgyMTAsIDYwJSwgOTglKVxcbiRsaWdodF9ncmF5aXNoX2JsdWVfMTogaHNsKDIxMSwgNjglLCA5NCUpXFxuJGxpZ2h0X2dyYXlpc2hfYmx1ZV8yOiBoc2woMjA1LCAzMyUsIDkwJSlcXG4kZ3JheWlzaF9ibHVlOiBoc2woMjE5LCAxNCUsIDYzJSlcXG4kZGFya19ncmF5aXNoX2JsdWU6IGhzbCgyMTksIDEyJSwgNDIlKVxcbiR2ZXJ5X2RhcmtfYmx1ZTogaHNsKDIyNCwgMjElLCAxNCUpXFxuXFxuLy8gRm9udC1zaXplc1xcbiRmb250X3NpemVfcGFyYWdyYXBoOiAxNnB4XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxcblxcbipcXG4gICAgbWFyZ2luOiAwXFxuICAgIHBhZGRpbmc6IDBcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGhcXG5cXG5odG1sXFxuICAgIGZvbnQtc2l6ZTogNjIuNSVcXG5cXG5ib2R5XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZlxcbiAgICBmb250LXNpemU6IDEuNnJlbVxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICBcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgYm9keVxcbiAgICAgICAgYmFja2dyb3VuZDogJHZlcnlfbGlnaHRfZ3JheWlzaF9ibHVlXFxuXFxuaW1nXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIGhlaWdodDogYXV0b1xcbiAgICBvYmplY3QtZml0OiBjb3Zlclxcblxcbi8vIHVucmVhZCBjb21tZW50cyB3aWxsIGhhdmUgdGhlIHVucmVhZCBkYXRhIGF0dHJpYnV0ZSB0byBnaXZlIGl0IGEgbGlnaHQgYmx1ZSBiYWNrZ3JvdW5kXFxuLmNvbnRhaW5lclxcbiAgICBtYXgtd2lkdGg6IDMyLjc1cmVtXFxuICAgIGRpc3BsYXk6IGdyaWRcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlclxcXCIgXFxcIm1haW5cXFwiXFxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbVxcbiAgICBnYXA6IDJyZW1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmNvbnRhaW5lclxcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbVxcbiAgICAgICAgbWF4LXdpZHRoOiA1NnJlbVxcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4XFxuICAgICAgICBwYWRkaW5nOiAzcmVtIDJyZW0gLjVyZW1cXG5cXG5oZWFkZXJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXJcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxcbiAgICAuY291bnRlcl9jb250YWluZXJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgICAgIGdhcDogLjc1cmVtXFxuICAgICAgICBoMVxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMFxcbiAgICAgICAgLm5vdGlmaWNhdGlvbl9jb3VudGVyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWVcXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlXFxuICAgICAgICAgICAgcGFkZGluZy1ibG9jazogLjE1cmVtXFxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW1cXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgIGFcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cXG4gICAgICAgIGNvbG9yOiAkZGFya19ncmF5aXNoX2JsdWVcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHhcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICBjb2xvcjogJGJsdWVcXG5cXG5tYWluXFxuICAgIGdyaWQtYXJlYTogbWFpblxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGdhcDogMXJlbVxcbiAgICAubm90aWZpY2F0aW9uX2NvbnRhaW5lclxcbiAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW1cXG4gICAgICAgIHBhZGRpbmc6IDFyZW1cXG4gICAgICAgIGdhcDogMXJlbVxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4XFxuICAgICAgICAmW3VucmVhZD1cXFwiXFxcIl1cXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdmVyeV9saWdodF9ncmF5aXNoX2JsdWVcXG4gICAgICAgIC51c2VyX2ltZ1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMy41cmVtXFxuICAgICAgICAgICAgaGVpZ2h0OiAzLjVyZW1cXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZVxcbiAgICAgICAgLnBvc3RfY29udGFpbmVyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgICAgICAgICBnYXA6IC4yNXJlbVxcbiAgICAgICAgICAgIGNvbG9yOiAkZGFya19ncmF5aXNoX2JsdWVcXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgICAgICYgcDpmaXJzdC1jaGlsZCAudXNlcl9uYW1lXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdmVyeV9kYXJrX2JsdWVcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMFxcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC4yNXJlbVxcbiAgICAgICAgICAgICYgcDpmaXJzdC1jaGlsZCAudXNlcl9ldmVudFxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuMjVyZW1cXG4gICAgICAgICAgICAmIHA6Zmlyc3QtY2hpbGQgLnVzZXJfZ3JvdXBcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMFxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWVcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC4yNXJlbVxcbiAgICAgICAgICAgIC5kYXRlX3Bvc3RlZFxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXlpc2hfYmx1ZVxcbiAgICAgICAgICAgIC5wcml2YXRlX21lc3NhZ2VcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW1cXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0X2dyYXlpc2hfYmx1ZV8yXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtIDFyZW1cXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW1cXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgIC5waWNfY29tbWVudFxcbiAgICAgICAgICAgIG1heC13aWR0aDogMy41cmVtXFxuICAgICAgICAgICAgaGVpZ2h0OiAzLjVyZW1cXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZVxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMC4wNXMgZWFzZS1pbi1vdXRcXG4gICAgICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodF9ncmF5aXNoX2JsdWVfMlxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuMXJlbVxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcXG5cXG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciBwIGFcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXRcXG5cXG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciBwOmhvdmVyIGE6aG92ZXJcXG4gICAgY29sb3I6ICRibHVlXFxuXFxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAucG9zdF9jb250YWluZXIgLnByaXZhdGVfbWVzc2FnZTpob3ZlclxcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHRfZ3JheWlzaF9ibHVlXzFcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgbWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAucG9zdF9jb250YWluZXIgLnByaXZhdGVfbWVzc2FnZVxcbiAgICAgICAgcGFkZGluZzogMS41cmVtIFxcblxcbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXIgLnBvc3RfY29udGFpbmVyIHA6Zmlyc3QtY2hpbGQgLnVucmVhZF9kb3RcXG4gICAgZGlzcGxheTogbm9uZVxcbiAgICBcXG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyW3VucmVhZD1cXFwiXFxcIl0gLnBvc3RfY29udGFpbmVyIHA6Zmlyc3QtY2hpbGQgLnVucmVhZF9kb3RcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIG1heC13aWR0aDogLjc1cmVtXFxuICAgIGhlaWdodDogLjc1cmVtXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJVxcbiAgICBiYWNrZ3JvdW5kOiAkcmVkXFxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5zYXNzJztcblxuY29uc3Qgbm90aWZpY2F0aW9uQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb25fY291bnRlcicpO1xuY29uc3QgdXNlck5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVzZXJfbmFtZScpO1xuY29uc3QgdXNlckdyb3VwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51c2VyX2dyb3VwJyk7XG5jb25zdCB1c2VyRXZlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVzZXJfZXZlbnQnKTtcbmNvbnN0IHJlYWRNYXJrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVhZF9tYXJrZXInKTtcbmNvbnN0IG5vdGlmaWNhdGlvbkNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm90aWZpY2F0aW9uX2NvbnRhaW5lcicpO1xuXG5jbGFzcyBOb3RpZmljYXRpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51bnJlYWQgPSBub3RpZmljYXRpb25Db3VudGVyLnRleHRDb250ZW50O1xuICAgIH1cbiAgICBcbiAgICByZWR1Y2VVbnJlYWRCeVN0ZXAoKSB7XG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbkNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uX2NvdW50ZXInKTtcbiAgICAgICAgbGV0IG5vdGlmaWNhdGlvblZhbHVlID0gTnVtYmVyKG5vdGlmaWNhdGlvbkNvdW50ZXIudGV4dENvbnRlbnQpXG5cbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvblZhbHVlID4gMCkge1xuICAgICAgICAgICAgdGhpcy51bnJlYWQtLTtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvdW50ZXIudGV4dENvbnRlbnQgPSB0aGlzLnVucmVhZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZWR1Y2VVbnJlYWRUb1plcm8oKSB7XG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbkNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uX2NvdW50ZXInKTtcbiAgICAgICAgbGV0IG5vdGlmaWNhdGlvblZhbHVlID0gTnVtYmVyKG5vdGlmaWNhdGlvbkNvdW50ZXIudGV4dENvbnRlbnQpO1xuICAgICAgICBcbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvblZhbHVlID4gMCkge1xuICAgICAgICAgICAgdGhpcy51bnJlYWQgPSAwO1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ291bnRlci50ZXh0Q29udGVudCA9IHRoaXMudW5yZWFkO1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCd1bnJlYWQnKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIElmIHlvdSBjbGljayBNYXJrIGFsbCBhcyByZWFkLCBpdCB3aWxsIHJlbW92ZSB0aGUgYmFja2dyb3VuZCBvbiB0aGUgcmVhZCBwb3N0c1xuYW5kIHRoZSByZWQgZG90cyBhcyB3ZWxsLiBBbHNvLCBtYWtlIGl0IHRvIHdoZXJlIGlmIHlvdSBjbGljayBvbiB0aGUgdXNlcl9uYW1lIG9yIHRoZSBcbnVzZXJfZ3JvdXAvdXNlcl9ldmVudCwgaXQgd2lsbCBtYXJrIGl0IGFzIHJlYWQgYXMgd2VsbC4gKi9cblxuLy8gUmVkdWNlcyB0aGUgbm90aWZpY2F0aW9ucyBjb3VudGVyIGRlY3JlYXNlcyBieSAxIGlmIGNsaWNraW5nIHRoZSB1c2VyX25hbWUvZXZlbnRcblxuLy8gUmVkdWNlcyB0aGUgbm90aWZpY2F0aW9ucyBjb3VudGVyIGRlY3JlYXNlcyB0byAwIGlmIGNsaWNraW5nIE1hcmsgYWxsIGFzIHJlYWRcblxuY29uc3QgdXNlck5vdGlmaWNhdGlvbnMgPSBuZXcgTm90aWZpY2F0aW9ucygpO1xuXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgXCJNYXJrIGFsbCBhcyByZWFkXCIgdGhhdCByZWR1Y2VzIGNvdW50ZXIgdG8gMCBieSBjYWxsaW5nIHJlZHVjZVVucmVhZFRvWmVyb1xuXG5yZWFkTWFya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB1c2VyTm90aWZpY2F0aW9ucy5yZWR1Y2VVbnJlYWRUb1plcm8oKTtcbn0pXG5cbi8vIEV2ZW50IGxpc3RlbmVycyBmb3IgYWxsIG9mIHRoZSBkaWZmZXJlbnQgYSB0YWdzIGxvY2F0ZWQgaW4gdGhlIG5vdGlmaWNhdGlvbiBjb250YWluZXJzXG5cbnVzZXJOYW1lcy5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgLy8gY2hlY2tzIGlmIHRoZSBjb250YWluZXIgb2YgdGhlIGNsaWNrZWQgZWxlbWVudCBoYXMgdGhlIHVucmVhZCBhdHRyaWJ1dGVcblxuICAgIC8vIGlmIGl0IGRvZXMsIGl0IHJlbW92ZXMgaXQgYW5kIGxlc3NlbnMgdGhlIGNvdW50ZXIgYnkgMVxuICAgIHVzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBncmFuZFBhcmVudCA9IHVzZXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoZ3JhbmRQYXJlbnQuaGFzQXR0cmlidXRlKCd1bnJlYWQnKSkge1xuICAgICAgICAgICAgZ3JhbmRQYXJlbnQucmVtb3ZlQXR0cmlidXRlKCd1bnJlYWQnKTtcbiAgICAgICAgICAgIHVzZXJOb3RpZmljYXRpb25zLnJlZHVjZVVucmVhZEJ5U3RlcCgpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbnVzZXJHcm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICBncm91cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGdyYW5kUGFyZW50ID0gZ3JvdXAucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoZ3JhbmRQYXJlbnQuaGFzQXR0cmlidXRlKCd1bnJlYWQnKSkge1xuICAgICAgICAgICAgZ3JhbmRQYXJlbnQucmVtb3ZlQXR0cmlidXRlKCd1bnJlYWQnKTtcbiAgICAgICAgICAgIHVzZXJOb3RpZmljYXRpb25zLnJlZHVjZVVucmVhZEJ5U3RlcCgpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbnVzZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICBldmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGdyYW5kUGFyZW50ID0gZXZlbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGdyYW5kUGFyZW50Lmhhc0F0dHJpYnV0ZSgndW5yZWFkJykpIHtcbiAgICAgICAgICAgIGdyYW5kUGFyZW50LnJlbW92ZUF0dHJpYnV0ZSgndW5yZWFkJyk7XG4gICAgICAgICAgICB1c2VyTm90aWZpY2F0aW9ucy5yZWR1Y2VVbnJlYWRCeVN0ZXAoKTtcbiAgICAgICAgfVxuICAgIH0pXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==