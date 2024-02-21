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
  transition: background 0.2s ease-in-out;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"AAoBA;;;EAGI,sBAAA;AAlBJ;;AAoBA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;AAjBJ;;AAmBA;EACI,gBAAA;AAhBJ;;AAkBA;EACI,kBAAA;EACA,4CAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAfJ;;AAiBA;EACI;IACI,8BAjCkB;EAmBxB;AACF;AAeA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;AAbJ;;AAgBA;EACI,mBAAA;EACA,aAAA;EACA,oCAAA;EACA,kBAAA;EACA,SAAA;AAbJ;;AAeA;EACI;IACI,gBAAA;IACA,gBAAA;IACA,4BArDA;IAsDA,mBAAA;IACA,yBAAA;EAZN;AACF;AAaA;EACI,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAXJ;AAYI;EACI,aAAA;EACA,mBAAA;EACA,YAAA;AAVR;AAWQ;EACI,iBAAA;EACA,gBAAA;AATZ;AAUQ;EACI,8BAzEL;EA0EK,uBAvEJ;EAwEI,sBAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;AARZ;AASI;EACI,qBAAA;EACA,iBAAA;EACA,yBA1EY;EA2EZ,sBAAA;EACA,kCAAA;AAPR;AAQQ;EACI,yBAtFL;AAgFP;;AAQA;EACI,eAAA;EACA,aAAA;EACA,SAAA;AALJ;AAMI;EACI,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,aAAA;EACA,SAAA;EACA,kBAAA;EACA,uCAAA;AAJR;AAKQ;EACI,8BAjGc;AA8F1B;AAIQ;EACI,iBAAA;EACA,cAAA;EACA,oBAAA;AAFZ;AAGQ;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,yBAtGQ;EAuGR,WAAA;AADZ;AAEY;EACI,yBAxGC;EAyGD,gBAAA;EACA,qBAAA;AAAhB;AACY;EACI,gBAAA;EACA,oBAAA;AAChB;AAAY;EACI,gBAAA;EACA,yBAzHT;EA0HS,oBAAA;AAEhB;AADY;EACI,yBArHD;AAwHf;AAFY;EACI,kBAAA;EACA,oCAAA;EACA,4BAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,uCAAA;AAIhB;AAHQ;EACI,iBAAA;EACA,cAAA;EACA,oBAAA;EACA,eAAA;EACA,qCAAA;AAKZ;AAJY;EACI,oCAAA;EACA,eAAA;EACA,kBAAA;AAMhB;;AAJA;EACI,eAAA;EACA,kCAAA;AAOJ;;AALA;EACI,yBArJG;AA6JP;;AANA;EACI,8BAnJmB;AA4JvB;;AAPA;EACI;IACI,eAAA;EAUN;AACF;AATA;EACI,aAAA;AAWJ;;AATA;EACI,qBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,4BAxKE;EAyKF,mBAAA;AAYJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap')\n\n// need 'Plus Jakarta Sans', sans-serif at 500 and 800\n\n// Primary Colors\n$red: hsl(1, 90%, 64%)\n$blue: hsl(219, 85%, 26%)\n\n// Neutral\n$white: hsl(0, 0%, 100%)\n$very_light_grayish_blue: hsl(210, 60%, 98%)\n$light_grayish_blue_1: hsl(211, 68%, 94%)\n$light_grayish_blue_2: hsl(205, 33%, 90%)\n$grayish_blue: hsl(219, 14%, 63%)\n$dark_grayish_blue: hsl(219, 12%, 42%)\n$very_dark_blue: hsl(224, 21%, 14%)\n\n// Font-sizes\n$font_size_paragraph: 16px\n\n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nbody\n    position: relative\n    font-family: 'Plus Jakarta Sans', sans-serif\n    font-size: 1.6rem\n    display: flex\n    flex-direction: column\n    align-items: center\n    \n@media screen and (min-width: 600px)\n    body\n        background: $very_light_grayish_blue\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\n// unread comments will have the unread data attribute to give it a light blue background\n.container\n    max-width: 32.75rem\n    display: grid\n    grid-template-areas: \"header\" \"main\"\n    padding: 2rem 1rem\n    gap: 2rem\n\n@media screen and (min-width: 600px)\n    .container\n        margin-top: 5rem\n        max-width: 56rem\n        background: $white\n        border-radius: 12px\n        padding: 3rem 2rem .5rem\n\nheader\n    grid-area: header\n    display: flex\n    align-items: center\n    justify-content: space-between\n    .counter_container\n        display: flex\n        align-items: center\n        gap: .75rem\n        h1\n            font-size: 1.8rem\n            font-weight: 800\n        .notification_counter\n            background: $blue\n            color: $white\n            padding-block: .15rem\n            padding-inline: 1rem\n            border-radius: 4px\n            font-weight: 800\n    a\n        text-decoration: none\n        font-size: 1.4rem\n        color: $dark_grayish_blue\n        letter-spacing: -0.5px\n        transition: color 0.2s ease-in-out\n        &:hover\n            color: $blue\n\nmain\n    grid-area: main\n    display: grid\n    gap: 1rem\n    .notification_container\n        display: flex\n        align-items: center\n        font-size: 1.3rem\n        padding: 1rem\n        gap: 1rem\n        border-radius: 8px\n        transition: background 0.2s ease-in-out\n        &[unread=\"\"]\n            background: $very_light_grayish_blue\n        .user_img\n            max-width: 3.5rem\n            height: 3.5rem\n            align-self: baseline\n        .post_container\n            display: flex\n            flex-direction: column\n            gap: .25rem\n            color: $dark_grayish_blue\n            width: 100%\n            & p:first-child .user_name\n                color: $very_dark_blue\n                font-weight: 800\n                margin-right: .25rem\n            & p:first-child .user_event\n                font-weight: 800\n                margin-left: .25rem\n            & p:first-child .user_group\n                font-weight: 800\n                color: $blue\n                margin-left: .25rem\n            .date_posted\n                color: $grayish_blue\n            .private_message\n                margin-top: .5rem\n                border: 1px solid $light_grayish_blue_2\n                padding: 1rem 2rem 1rem 1rem\n                font-size: 1.3rem\n                border-radius: 4px\n                cursor: pointer\n                transition: background 0.2s ease-in-out\n        .pic_comment\n            max-width: 3.5rem\n            height: 3.5rem\n            align-self: baseline\n            cursor: pointer\n            transition: padding 0.05s ease-in-out\n            &:hover\n                border: 1px solid $light_grayish_blue_2\n                padding: .1rem\n                border-radius: 4px\n\nmain .notification_container .post_container p a\n    cursor: pointer\n    transition: color 0.2s ease-in-out\n\nmain .notification_container .post_container p:hover a:hover\n    color: $blue\n\nmain .notification_container .post_container .private_message:hover\n    background: $light_grayish_blue_1\n\n@media screen and (min-width: 600px)\n    main .notification_container .post_container .private_message\n        padding: 1.5rem \n\nmain .notification_container .post_container p:first-child .unread_dot\n    display: none\n    \nmain .notification_container[unread=\"\"] .post_container p:first-child .unread_dot\n    display: inline-block\n    width: 100%\n    max-width: .75rem\n    height: .75rem\n    border-radius: 50%\n    background: $red\n    margin-left: .5rem\n\n\n\n"],"sourceRoot":""}]);
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

// How long I want the animation to take, in ms
const animationDuration = 2000;

// Calculate how long each 'frame' should last
const frameDuration = 1000 / 60;

// Use that to calculate how many frames to complete the animation
const totalFrames = Math.round(animationDuration / frameDuration);

// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * (2 - t);

class Notifications {
    constructor() {
        this.unread = notificationCounter.textContent;
    }
    
    reduceUnreadByStep() {
        const notificationCounter = document.querySelector('.notification_counter');
        let notificationValue = Number(notificationCounter.textContent)

        if (notificationValue > 0) {
            this.unread--;
            animateCountDownByOne(notificationCounter, this.unread);
        }
    }
    
    reduceUnreadToZero() {
        const notificationCounter = document.querySelector('.notification_counter');
        let notificationValue = Number(notificationCounter.textContent);
        
        if (notificationValue > 0) {
            animateCountDownToZero(notificationCounter, this.unread)
            this.unread = 0;
            // notificationCounter.textContent = this.unread;
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

function animateCountDownByOne(el, diff) {
    let countTo = parseInt(diff, 10);
    // Start the animation running 60 times per second
    const counter = setInterval(() => {
        // If the current count has changed, update the element
    
        el.textContent = countTo--;
        clearInterval(counter)
    }, 150);
}

function animateCountDownToZero(el, diff) {
    let countTo = parseInt(diff, 10);
    for (let i = countTo; i >= 0; i--) {
        const counter = setInterval(() => {
            el.textContent = countTo--;
            clearInterval(counter)
        }, 200)
    }
}



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

// make it so that the counter reduces slower like in my last project instead of instantly
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNJQUFzSSx5QkFBeUI7QUFDL0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJGQUEyRixXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtB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Ozs7Ozs7Ozs7Ozs7QUNBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRCwwRiIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlmaWNhdGlvbnMtcGFnZS1tYWluLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzIiwid2VicGFjazovL25vdGlmaWNhdGlvbnMtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdGlmaWNhdGlvbnMtcGFnZS1tYWluLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzP2JmYWQiLCJ3ZWJwYWNrOi8vbm90aWZpY2F0aW9ucy1wYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbm90aWZpY2F0aW9ucy1wYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25vdGlmaWNhdGlvbnMtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25vdGlmaWNhdGlvbnMtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25vdGlmaWNhdGlvbnMtcGFnZS1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbm90aWZpY2F0aW9ucy1wYWdlLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm90aWZpY2F0aW9ucy1wYWdlLW1haW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25vdGlmaWNhdGlvbnMtcGFnZS1tYWluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ub3RpZmljYXRpb25zLXBhZ2UtbWFpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsdXMrSmFrYXJ0YStTYW5zOml0YWwsd2dodEAwLDIwMC4uODAwOzEsMjAwLi44MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBsdXMgSmFrYXJ0YSBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiBoc2woMjEwLCA2MCUsIDk4JSk7XG4gIH1cbn1cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAzMi43NXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXJcIiBcIm1haW5cIjtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBnYXA6IDJyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgbWF4LXdpZHRoOiA1NnJlbTtcbiAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEwMCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogM3JlbSAycmVtIDAuNXJlbTtcbiAgfVxufVxuaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmhlYWRlciAuY291bnRlcl9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNzVyZW07XG59XG5oZWFkZXIgLmNvdW50ZXJfY29udGFpbmVyIGgxIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5oZWFkZXIgLmNvdW50ZXJfY29udGFpbmVyIC5ub3RpZmljYXRpb25fY291bnRlciB7XG4gIGJhY2tncm91bmQ6IGhzbCgyMTksIDg1JSwgMjYlKTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIHBhZGRpbmctYmxvY2s6IDAuMTVyZW07XG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5oZWFkZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiBoc2woMjE5LCAxMiUsIDQyJSk7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5oZWFkZXIgYTpob3ZlciB7XG4gIGNvbG9yOiBoc2woMjE5LCA4NSUsIDI2JSk7XG59XG5cbm1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMXJlbTtcbn1cbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZ2FwOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcbn1cbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXJbdW5yZWFkPVwiXCJdIHtcbiAgYmFja2dyb3VuZDogaHNsKDIxMCwgNjAlLCA5OCUpO1xufVxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAudXNlcl9pbWcge1xuICBtYXgtd2lkdGg6IDMuNXJlbTtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xufVxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAucG9zdF9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuMjVyZW07XG4gIGNvbG9yOiBoc2woMjE5LCAxMiUsIDQyJSk7XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAucG9zdF9jb250YWluZXIgcDpmaXJzdC1jaGlsZCAudXNlcl9uYW1lIHtcbiAgY29sb3I6IGhzbCgyMjQsIDIxJSwgMTQlKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xufVxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAucG9zdF9jb250YWluZXIgcDpmaXJzdC1jaGlsZCAudXNlcl9ldmVudCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xufVxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAucG9zdF9jb250YWluZXIgcDpmaXJzdC1jaGlsZCAudXNlcl9ncm91cCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiBoc2woMjE5LCA4NSUsIDI2JSk7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xufVxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAucG9zdF9jb250YWluZXIgLmRhdGVfcG9zdGVkIHtcbiAgY29sb3I6IGhzbCgyMTksIDE0JSwgNjMlKTtcbn1cbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXIgLnBvc3RfY29udGFpbmVyIC5wcml2YXRlX21lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMDUsIDMzJSwgOTAlKTtcbiAgcGFkZGluZzogMXJlbSAycmVtIDFyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5waWNfY29tbWVudCB7XG4gIG1heC13aWR0aDogMy41cmVtO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjA1cyBlYXNlLWluLW91dDtcbn1cbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXIgLnBpY19jb21tZW50OmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDIwNSwgMzMlLCA5MCUpO1xuICBwYWRkaW5nOiAwLjFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAucG9zdF9jb250YWluZXIgcCBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciBwOmhvdmVyIGE6aG92ZXIge1xuICBjb2xvcjogaHNsKDIxOSwgODUlLCAyNiUpO1xufVxuXG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciAucHJpdmF0ZV9tZXNzYWdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogaHNsKDIxMSwgNjglLCA5NCUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBtYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciAucHJpdmF0ZV9tZXNzYWdlIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbn1cbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXIgLnBvc3RfY29udGFpbmVyIHA6Zmlyc3QtY2hpbGQgLnVucmVhZF9kb3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyW3VucmVhZD1cIlwiXSAucG9zdF9jb250YWluZXIgcDpmaXJzdC1jaGlsZCAudW5yZWFkX2RvdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMC43NXJlbTtcbiAgaGVpZ2h0OiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGhzbCgxLCA5MCUsIDY0JSk7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBb0JBOzs7RUFHSSxzQkFBQTtBQWxCSjs7QUFvQkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBakJKOztBQW1CQTtFQUNJLGdCQUFBO0FBaEJKOztBQWtCQTtFQUNJLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBaUJBO0VBQ0k7SUFDSSw4QkFqQ2tCO0VBbUJ4QjtBQUNGO0FBZUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFiSjs7QUFlQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLDRCQXJEQTtJQXNEQSxtQkFBQTtJQUNBLHlCQUFBO0VBWk47QUFDRjtBQWFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVhKO0FBWUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBVlI7QUFXUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFUWjtBQVVRO0VBQ0ksOEJBekVMO0VBMEVLLHVCQXZFSjtFQXdFSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVJaO0FBU0k7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBMUVZO0VBMkVaLHNCQUFBO0VBQ0Esa0NBQUE7QUFQUjtBQVFRO0VBQ0kseUJBdEZMO0FBZ0ZQOztBQVFBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBTEo7QUFNSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBSlI7QUFLUTtFQUNJLDhCQWpHYztBQThGMUI7QUFJUTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBRlo7QUFHUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkF0R1E7RUF1R1IsV0FBQTtBQURaO0FBRVk7RUFDSSx5QkF4R0M7RUF5R0QsZ0JBQUE7RUFDQSxxQkFBQTtBQUFoQjtBQUNZO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQUNoQjtBQUFZO0VBQ0ksZ0JBQUE7RUFDQSx5QkF6SFQ7RUEwSFMsb0JBQUE7QUFFaEI7QUFEWTtFQUNJLHlCQXJIRDtBQXdIZjtBQUZZO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtBQUloQjtBQUhRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUFLWjtBQUpZO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFNaEI7O0FBSkE7RUFDSSxlQUFBO0VBQ0Esa0NBQUE7QUFPSjs7QUFMQTtFQUNJLHlCQXJKRztBQTZKUDs7QUFOQTtFQUNJLDhCQW5KbUI7QUE0SnZCOztBQVBBO0VBQ0k7SUFDSSxlQUFBO0VBVU47QUFDRjtBQVRBO0VBQ0ksYUFBQTtBQVdKOztBQVRBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkF4S0U7RUF5S0YsbUJBQUE7QUFZSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbHVzK0pha2FydGErU2FuczppdGFsLHdnaHRAMCwyMDAuLjgwMDsxLDIwMC4uODAwJmRpc3BsYXk9c3dhcCcpXFxuXFxuLy8gbmVlZCAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmIGF0IDUwMCBhbmQgODAwXFxuXFxuLy8gUHJpbWFyeSBDb2xvcnNcXG4kcmVkOiBoc2woMSwgOTAlLCA2NCUpXFxuJGJsdWU6IGhzbCgyMTksIDg1JSwgMjYlKVxcblxcbi8vIE5ldXRyYWxcXG4kd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSlcXG4kdmVyeV9saWdodF9ncmF5aXNoX2JsdWU6IGhzbCgyMTAsIDYwJSwgOTglKVxcbiRsaWdodF9ncmF5aXNoX2JsdWVfMTogaHNsKDIxMSwgNjglLCA5NCUpXFxuJGxpZ2h0X2dyYXlpc2hfYmx1ZV8yOiBoc2woMjA1LCAzMyUsIDkwJSlcXG4kZ3JheWlzaF9ibHVlOiBoc2woMjE5LCAxNCUsIDYzJSlcXG4kZGFya19ncmF5aXNoX2JsdWU6IGhzbCgyMTksIDEyJSwgNDIlKVxcbiR2ZXJ5X2RhcmtfYmx1ZTogaHNsKDIyNCwgMjElLCAxNCUpXFxuXFxuLy8gRm9udC1zaXplc1xcbiRmb250X3NpemVfcGFyYWdyYXBoOiAxNnB4XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxcblxcbipcXG4gICAgbWFyZ2luOiAwXFxuICAgIHBhZGRpbmc6IDBcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGhcXG5cXG5odG1sXFxuICAgIGZvbnQtc2l6ZTogNjIuNSVcXG5cXG5ib2R5XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZlxcbiAgICBmb250LXNpemU6IDEuNnJlbVxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICBcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgYm9keVxcbiAgICAgICAgYmFja2dyb3VuZDogJHZlcnlfbGlnaHRfZ3JheWlzaF9ibHVlXFxuXFxuaW1nXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIGhlaWdodDogYXV0b1xcbiAgICBvYmplY3QtZml0OiBjb3Zlclxcblxcbi8vIHVucmVhZCBjb21tZW50cyB3aWxsIGhhdmUgdGhlIHVucmVhZCBkYXRhIGF0dHJpYnV0ZSB0byBnaXZlIGl0IGEgbGlnaHQgYmx1ZSBiYWNrZ3JvdW5kXFxuLmNvbnRhaW5lclxcbiAgICBtYXgtd2lkdGg6IDMyLjc1cmVtXFxuICAgIGRpc3BsYXk6IGdyaWRcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlclxcXCIgXFxcIm1haW5cXFwiXFxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbVxcbiAgICBnYXA6IDJyZW1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmNvbnRhaW5lclxcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbVxcbiAgICAgICAgbWF4LXdpZHRoOiA1NnJlbVxcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4XFxuICAgICAgICBwYWRkaW5nOiAzcmVtIDJyZW0gLjVyZW1cXG5cXG5oZWFkZXJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXJcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxcbiAgICAuY291bnRlcl9jb250YWluZXJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgICAgIGdhcDogLjc1cmVtXFxuICAgICAgICBoMVxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMFxcbiAgICAgICAgLm5vdGlmaWNhdGlvbl9jb3VudGVyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWVcXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlXFxuICAgICAgICAgICAgcGFkZGluZy1ibG9jazogLjE1cmVtXFxuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW1cXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgIGFcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cXG4gICAgICAgIGNvbG9yOiAkZGFya19ncmF5aXNoX2JsdWVcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHhcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICBjb2xvcjogJGJsdWVcXG5cXG5tYWluXFxuICAgIGdyaWQtYXJlYTogbWFpblxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGdhcDogMXJlbVxcbiAgICAubm90aWZpY2F0aW9uX2NvbnRhaW5lclxcbiAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW1cXG4gICAgICAgIHBhZGRpbmc6IDFyZW1cXG4gICAgICAgIGdhcDogMXJlbVxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4XFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICZbdW5yZWFkPVxcXCJcXFwiXVxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR2ZXJ5X2xpZ2h0X2dyYXlpc2hfYmx1ZVxcbiAgICAgICAgLnVzZXJfaW1nXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzLjVyZW1cXG4gICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbVxcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lXFxuICAgICAgICAucG9zdF9jb250YWluZXJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICAgICAgICAgIGdhcDogLjI1cmVtXFxuICAgICAgICAgICAgY29sb3I6ICRkYXJrX2dyYXlpc2hfYmx1ZVxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICAgICAgJiBwOmZpcnN0LWNoaWxkIC51c2VyX25hbWVcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR2ZXJ5X2RhcmtfYmx1ZVxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjI1cmVtXFxuICAgICAgICAgICAgJiBwOmZpcnN0LWNoaWxkIC51c2VyX2V2ZW50XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDBcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC4yNXJlbVxcbiAgICAgICAgICAgICYgcDpmaXJzdC1jaGlsZCAudXNlcl9ncm91cFxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZVxcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjI1cmVtXFxuICAgICAgICAgICAgLmRhdGVfcG9zdGVkXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheWlzaF9ibHVlXFxuICAgICAgICAgICAgLnByaXZhdGVfbWVzc2FnZVxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbVxcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRfZ3JheWlzaF9ibHVlXzJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW0gMXJlbVxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbVxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgLnBpY19jb21tZW50XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzLjVyZW1cXG4gICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbVxcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjA1cyBlYXNlLWluLW91dFxcbiAgICAgICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0X2dyYXlpc2hfYmx1ZV8yXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IC4xcmVtXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweFxcblxcbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXIgLnBvc3RfY29udGFpbmVyIHAgYVxcbiAgICBjdXJzb3I6IHBvaW50ZXJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dFxcblxcbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXIgLnBvc3RfY29udGFpbmVyIHA6aG92ZXIgYTpob3ZlclxcbiAgICBjb2xvcjogJGJsdWVcXG5cXG5tYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciAucHJpdmF0ZV9tZXNzYWdlOmhvdmVyXFxuICAgIGJhY2tncm91bmQ6ICRsaWdodF9ncmF5aXNoX2JsdWVfMVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICBtYWluIC5ub3RpZmljYXRpb25fY29udGFpbmVyIC5wb3N0X2NvbnRhaW5lciAucHJpdmF0ZV9tZXNzYWdlXFxuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gXFxuXFxubWFpbiAubm90aWZpY2F0aW9uX2NvbnRhaW5lciAucG9zdF9jb250YWluZXIgcDpmaXJzdC1jaGlsZCAudW5yZWFkX2RvdFxcbiAgICBkaXNwbGF5OiBub25lXFxuICAgIFxcbm1haW4gLm5vdGlmaWNhdGlvbl9jb250YWluZXJbdW5yZWFkPVxcXCJcXFwiXSAucG9zdF9jb250YWluZXIgcDpmaXJzdC1jaGlsZCAudW5yZWFkX2RvdFxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgbWF4LXdpZHRoOiAuNzVyZW1cXG4gICAgaGVpZ2h0OiAuNzVyZW1cXG4gICAgYm9yZGVyLXJhZGl1czogNTAlXFxuICAgIGJhY2tncm91bmQ6ICRyZWRcXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNhc3MnO1xuXG5jb25zdCBub3RpZmljYXRpb25Db3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbl9jb3VudGVyJyk7XG5jb25zdCB1c2VyTmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXNlcl9uYW1lJyk7XG5jb25zdCB1c2VyR3JvdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVzZXJfZ3JvdXAnKTtcbmNvbnN0IHVzZXJFdmVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudXNlcl9ldmVudCcpO1xuY29uc3QgcmVhZE1hcmtlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWFkX21hcmtlcicpO1xuY29uc3Qgbm90aWZpY2F0aW9uQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RpZmljYXRpb25fY29udGFpbmVyJyk7XG5cbi8vIEhvdyBsb25nIEkgd2FudCB0aGUgYW5pbWF0aW9uIHRvIHRha2UsIGluIG1zXG5jb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IDIwMDA7XG5cbi8vIENhbGN1bGF0ZSBob3cgbG9uZyBlYWNoICdmcmFtZScgc2hvdWxkIGxhc3RcbmNvbnN0IGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjA7XG5cbi8vIFVzZSB0aGF0IHRvIGNhbGN1bGF0ZSBob3cgbWFueSBmcmFtZXMgdG8gY29tcGxldGUgdGhlIGFuaW1hdGlvblxuY29uc3QgdG90YWxGcmFtZXMgPSBNYXRoLnJvdW5kKGFuaW1hdGlvbkR1cmF0aW9uIC8gZnJhbWVEdXJhdGlvbik7XG5cbi8vIEFuIGVhc2Utb3V0IGZ1bmN0aW9uIHRoYXQgc2xvd3MgdGhlIGNvdW50IGFzIGl0IHByb2dyZXNzZXNcbmNvbnN0IGVhc2VPdXRRdWFkID0gdCA9PiB0ICogKDIgLSB0KTtcblxuY2xhc3MgTm90aWZpY2F0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudW5yZWFkID0gbm90aWZpY2F0aW9uQ291bnRlci50ZXh0Q29udGVudDtcbiAgICB9XG4gICAgXG4gICAgcmVkdWNlVW5yZWFkQnlTdGVwKCkge1xuICAgICAgICBjb25zdCBub3RpZmljYXRpb25Db3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbl9jb3VudGVyJyk7XG4gICAgICAgIGxldCBub3RpZmljYXRpb25WYWx1ZSA9IE51bWJlcihub3RpZmljYXRpb25Db3VudGVyLnRleHRDb250ZW50KVxuXG4gICAgICAgIGlmIChub3RpZmljYXRpb25WYWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudW5yZWFkLS07XG4gICAgICAgICAgICBhbmltYXRlQ291bnREb3duQnlPbmUobm90aWZpY2F0aW9uQ291bnRlciwgdGhpcy51bnJlYWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlZHVjZVVucmVhZFRvWmVybygpIHtcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb25fY291bnRlcicpO1xuICAgICAgICBsZXQgbm90aWZpY2F0aW9uVmFsdWUgPSBOdW1iZXIobm90aWZpY2F0aW9uQ291bnRlci50ZXh0Q29udGVudCk7XG4gICAgICAgIFxuICAgICAgICBpZiAobm90aWZpY2F0aW9uVmFsdWUgPiAwKSB7XG4gICAgICAgICAgICBhbmltYXRlQ291bnREb3duVG9aZXJvKG5vdGlmaWNhdGlvbkNvdW50ZXIsIHRoaXMudW5yZWFkKVxuICAgICAgICAgICAgdGhpcy51bnJlYWQgPSAwO1xuICAgICAgICAgICAgLy8gbm90aWZpY2F0aW9uQ291bnRlci50ZXh0Q29udGVudCA9IHRoaXMudW5yZWFkO1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCd1bnJlYWQnKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIElmIHlvdSBjbGljayBNYXJrIGFsbCBhcyByZWFkLCBpdCB3aWxsIHJlbW92ZSB0aGUgYmFja2dyb3VuZCBvbiB0aGUgcmVhZCBwb3N0c1xuYW5kIHRoZSByZWQgZG90cyBhcyB3ZWxsLiBBbHNvLCBtYWtlIGl0IHRvIHdoZXJlIGlmIHlvdSBjbGljayBvbiB0aGUgdXNlcl9uYW1lIG9yIHRoZSBcbnVzZXJfZ3JvdXAvdXNlcl9ldmVudCwgaXQgd2lsbCBtYXJrIGl0IGFzIHJlYWQgYXMgd2VsbC4gKi9cblxuLy8gUmVkdWNlcyB0aGUgbm90aWZpY2F0aW9ucyBjb3VudGVyIGRlY3JlYXNlcyBieSAxIGlmIGNsaWNraW5nIHRoZSB1c2VyX25hbWUvZXZlbnRcblxuLy8gUmVkdWNlcyB0aGUgbm90aWZpY2F0aW9ucyBjb3VudGVyIGRlY3JlYXNlcyB0byAwIGlmIGNsaWNraW5nIE1hcmsgYWxsIGFzIHJlYWRcblxuY29uc3QgdXNlck5vdGlmaWNhdGlvbnMgPSBuZXcgTm90aWZpY2F0aW9ucygpO1xuXG5mdW5jdGlvbiBhbmltYXRlQ291bnREb3duQnlPbmUoZWwsIGRpZmYpIHtcbiAgICBsZXQgY291bnRUbyA9IHBhcnNlSW50KGRpZmYsIDEwKTtcbiAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uIHJ1bm5pbmcgNjAgdGltZXMgcGVyIHNlY29uZFxuICAgIGNvbnN0IGNvdW50ZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGNvdW50IGhhcyBjaGFuZ2VkLCB1cGRhdGUgdGhlIGVsZW1lbnRcbiAgICBcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBjb3VudFRvLS07XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRlcilcbiAgICB9LCAxNTApO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlQ291bnREb3duVG9aZXJvKGVsLCBkaWZmKSB7XG4gICAgbGV0IGNvdW50VG8gPSBwYXJzZUludChkaWZmLCAxMCk7XG4gICAgZm9yIChsZXQgaSA9IGNvdW50VG87IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IGNvdW50VG8tLTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRlcilcbiAgICAgICAgfSwgMjAwKVxuICAgIH1cbn1cblxuXG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBcIk1hcmsgYWxsIGFzIHJlYWRcIiB0aGF0IHJlZHVjZXMgY291bnRlciB0byAwIGJ5IGNhbGxpbmcgcmVkdWNlVW5yZWFkVG9aZXJvXG5cbnJlYWRNYXJrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHVzZXJOb3RpZmljYXRpb25zLnJlZHVjZVVucmVhZFRvWmVybygpO1xufSlcblxuLy8gRXZlbnQgbGlzdGVuZXJzIGZvciBhbGwgb2YgdGhlIGRpZmZlcmVudCBhIHRhZ3MgbG9jYXRlZCBpbiB0aGUgbm90aWZpY2F0aW9uIGNvbnRhaW5lcnNcblxudXNlck5hbWVzLmZvckVhY2goKHVzZXIpID0+IHtcbiAgICAvLyBjaGVja3MgaWYgdGhlIGNvbnRhaW5lciBvZiB0aGUgY2xpY2tlZCBlbGVtZW50IGhhcyB0aGUgdW5yZWFkIGF0dHJpYnV0ZVxuXG4gICAgLy8gaWYgaXQgZG9lcywgaXQgcmVtb3ZlcyBpdCBhbmQgbGVzc2VucyB0aGUgY291bnRlciBieSAxXG4gICAgdXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGdyYW5kUGFyZW50ID0gdXNlci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgXG4gICAgICAgIGlmIChncmFuZFBhcmVudC5oYXNBdHRyaWJ1dGUoJ3VucmVhZCcpKSB7XG4gICAgICAgICAgICBncmFuZFBhcmVudC5yZW1vdmVBdHRyaWJ1dGUoJ3VucmVhZCcpO1xuICAgICAgICAgICAgdXNlck5vdGlmaWNhdGlvbnMucmVkdWNlVW5yZWFkQnlTdGVwKCk7XG4gICAgICAgIH1cbiAgICB9KVxufSlcblxudXNlckdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgIGdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZ3JhbmRQYXJlbnQgPSBncm91cC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgXG4gICAgICAgIGlmIChncmFuZFBhcmVudC5oYXNBdHRyaWJ1dGUoJ3VucmVhZCcpKSB7XG4gICAgICAgICAgICBncmFuZFBhcmVudC5yZW1vdmVBdHRyaWJ1dGUoJ3VucmVhZCcpO1xuICAgICAgICAgICAgdXNlck5vdGlmaWNhdGlvbnMucmVkdWNlVW5yZWFkQnlTdGVwKCk7XG4gICAgICAgIH1cbiAgICB9KVxufSlcblxudXNlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgIGV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZ3JhbmRQYXJlbnQgPSBldmVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgICAgICBpZiAoZ3JhbmRQYXJlbnQuaGFzQXR0cmlidXRlKCd1bnJlYWQnKSkge1xuICAgICAgICAgICAgZ3JhbmRQYXJlbnQucmVtb3ZlQXR0cmlidXRlKCd1bnJlYWQnKTtcbiAgICAgICAgICAgIHVzZXJOb3RpZmljYXRpb25zLnJlZHVjZVVucmVhZEJ5U3RlcCgpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbi8vIG1ha2UgaXQgc28gdGhhdCB0aGUgY291bnRlciByZWR1Y2VzIHNsb3dlciBsaWtlIGluIG15IGxhc3QgcHJvamVjdCBpbnN0ZWFkIG9mIGluc3RhbnRseSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==