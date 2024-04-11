/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/editor.js":
/*!*******************************!*\
  !*** ./src/scripts/editor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar classNames = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n\n// Blocks to add the animate option to\nvar enableAnimateOptionsOnBlocks = ['core/heading'];\n\n// Add custom attribute to block for animate\nfunction setToolbarButtonAttribute(settings, name) {\n  if (!enableAnimateOptionsOnBlocks.includes(name)) {\n    return settings;\n  }\n  return Object.assign({}, settings, {\n    attributes: Object.assign({}, settings.attributes, {\n      animation: {\n        type: 'string',\n        \"default\": 'up'\n      }\n    })\n  });\n}\nwp.hooks.addFilter('blocks.registerBlockType', 'custom-attributes/animation', setToolbarButtonAttribute);\n\n// Add button to settings panel to activate/deactivate animation\nvar el = wp.element.createElement;\nvar InspectorControls = wp.blockEditor.InspectorControls;\nvar _wp$components = wp.components,\n  PanelBody = _wp$components.PanelBody,\n  SelectControl = _wp$components.SelectControl;\nvar __ = wp.i18n.__;\nvar withAnimateButton = wp.compose.createHigherOrderComponent(function (BlockEdit) {\n  return function (props) {\n    if (!enableAnimateOptionsOnBlocks.includes(props.name)) {\n      return el(BlockEdit, _objectSpread({}, props));\n    }\n    var attributes = props.attributes,\n      setAttributes = props.setAttributes;\n    return el(wp.element.Fragment, {}, el(InspectorControls, {}, el(PanelBody, {\n      title: __('Animation', 'mmb')\n    }, el(SelectControl, {\n      label: __('Animation Options'),\n      value: attributes.animation,\n      options: [{\n        value: 'none',\n        label: 'None'\n      }, {\n        value: 'up',\n        label: 'Fade Up'\n      }],\n      onChange: function onChange(value) {\n        setAttributes({\n          animation: value\n        });\n      }\n    }))), el(BlockEdit, _objectSpread({}, props)));\n  };\n}, 'withAnimateButton');\nwp.hooks.addFilter('editor.BlockEdit', 'custom-attributes/with-animate-button', withAnimateButton);\n\n// Save animation attribute to blocks\n\nvar saveAnimationAttribute = function saveAnimationAttribute(extraProps, blockType, attributes) {\n  // Do nothing if it's another block than our defined ones\n  if (enableAnimateOptionsOnBlocks.includes(blockType.name)) {\n    var animation = attributes.animation;\n    if (animation && animation === 'up') {\n      extraProps.className = classNames(extraProps.className, 'animation-up');\n    }\n  }\n  return extraProps;\n};\nwp.hooks.addFilter('blocks.getSaveContent.extraProps', 'custom-attributes/save-animation-attribute', saveAnimationAttribute);\n\n// Add css class to block wrapper based on attribute\nvar withAnimationProp = wp.compose.createHigherOrderComponent(function (BlockListBlock) {\n  return function (props) {\n    // If current block is not allowed\n    if (!enableAnimateOptionsOnBlocks.includes(props.name)) {\n      return el(BlockListBlock, _objectSpread({}, props));\n    }\n    var attributes = props.attributes;\n    var animation = attributes.animation;\n    if (animation && animation === 'up') {\n      return el(BlockListBlock, _objectSpread({\n        className: 'animation-up'\n      }, props));\n    } else {\n      return el(BlockListBlock, _objectSpread({}, props));\n    }\n  };\n}, 'withAnimationProp');\nwp.hooks.addFilter('editor.BlockListBlock', 'custom-attributes/with-animation-prop', withAnimationProp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lZGl0b3IuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBUUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW90aGVycy1taWxrLWJhbmsvLi9zcmMvc2NyaXB0cy9lZGl0b3IuanM/MDJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG4vLyBCbG9ja3MgdG8gYWRkIHRoZSBhbmltYXRlIG9wdGlvbiB0b1xuY29uc3QgZW5hYmxlQW5pbWF0ZU9wdGlvbnNPbkJsb2NrcyA9IFsnY29yZS9oZWFkaW5nJ107XG5cbi8vIEFkZCBjdXN0b20gYXR0cmlidXRlIHRvIGJsb2NrIGZvciBhbmltYXRlXG5mdW5jdGlvbiBzZXRUb29sYmFyQnV0dG9uQXR0cmlidXRlKHNldHRpbmdzLCBuYW1lKSB7XG4gIGlmICghZW5hYmxlQW5pbWF0ZU9wdGlvbnNPbkJsb2Nrcy5pbmNsdWRlcyhuYW1lKSkge1xuICAgIHJldHVybiBzZXR0aW5ncztcbiAgfVxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MsIHtcbiAgICBhdHRyaWJ1dGVzOiBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5ncy5hdHRyaWJ1dGVzLCB7XG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGRlZmF1bHQ6ICd1cCcsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KTtcbn1cbndwLmhvb2tzLmFkZEZpbHRlcignYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlJywgJ2N1c3RvbS1hdHRyaWJ1dGVzL2FuaW1hdGlvbicsIHNldFRvb2xiYXJCdXR0b25BdHRyaWJ1dGUpO1xuXG4vLyBBZGQgYnV0dG9uIHRvIHNldHRpbmdzIHBhbmVsIHRvIGFjdGl2YXRlL2RlYWN0aXZhdGUgYW5pbWF0aW9uXG5jb25zdCBlbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudDtcblxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7IFBhbmVsQm9keSwgU2VsZWN0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHdpdGhBbmltYXRlQnV0dG9uID0gd3AuY29tcG9zZS5jcmVhdGVIaWdoZXJPcmRlckNvbXBvbmVudChCbG9ja0VkaXQgPT4ge1xuICByZXR1cm4gcHJvcHMgPT4ge1xuICAgIGlmICghZW5hYmxlQW5pbWF0ZU9wdGlvbnNPbkJsb2Nrcy5pbmNsdWRlcyhwcm9wcy5uYW1lKSkge1xuICAgICAgcmV0dXJuIGVsKEJsb2NrRWRpdCwgeyAuLi5wcm9wcyB9KTtcbiAgICB9XG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcblxuICAgIHJldHVybiBlbChcbiAgICAgIHdwLmVsZW1lbnQuRnJhZ21lbnQsXG4gICAgICB7fSxcbiAgICAgIGVsKFxuICAgICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgICAge30sXG4gICAgICAgIGVsKFxuICAgICAgICAgIFBhbmVsQm9keSxcbiAgICAgICAgICB7IHRpdGxlOiBfXygnQW5pbWF0aW9uJywgJ21tYicpIH0sXG4gICAgICAgICAgZWwoU2VsZWN0Q29udHJvbCwge1xuICAgICAgICAgICAgbGFiZWw6IF9fKCdBbmltYXRpb24gT3B0aW9ucycpLFxuICAgICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuYW5pbWF0aW9uLFxuICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICB7IHZhbHVlOiAnbm9uZScsIGxhYmVsOiAnTm9uZScgfSxcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ3VwJywgbGFiZWw6ICdGYWRlIFVwJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBhbmltYXRpb246IHZhbHVlIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgZWwoQmxvY2tFZGl0LCB7IC4uLnByb3BzIH0pXG4gICAgKTtcbiAgfTtcbn0sICd3aXRoQW5pbWF0ZUJ1dHRvbicpO1xud3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tFZGl0JywgJ2N1c3RvbS1hdHRyaWJ1dGVzL3dpdGgtYW5pbWF0ZS1idXR0b24nLCB3aXRoQW5pbWF0ZUJ1dHRvbik7XG5cbi8vIFNhdmUgYW5pbWF0aW9uIGF0dHJpYnV0ZSB0byBibG9ja3NcblxuY29uc3Qgc2F2ZUFuaW1hdGlvbkF0dHJpYnV0ZSA9IChleHRyYVByb3BzLCBibG9ja1R5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgLy8gRG8gbm90aGluZyBpZiBpdCdzIGFub3RoZXIgYmxvY2sgdGhhbiBvdXIgZGVmaW5lZCBvbmVzXG4gIGlmIChlbmFibGVBbmltYXRlT3B0aW9uc09uQmxvY2tzLmluY2x1ZGVzKGJsb2NrVHlwZS5uYW1lKSkge1xuICAgIGNvbnN0IHsgYW5pbWF0aW9uIH0gPSBhdHRyaWJ1dGVzO1xuICAgIGlmIChhbmltYXRpb24gJiYgYW5pbWF0aW9uID09PSAndXAnKSB7XG4gICAgICBleHRyYVByb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoZXh0cmFQcm9wcy5jbGFzc05hbWUsICdhbmltYXRpb24tdXAnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV4dHJhUHJvcHM7XG59O1xuXG53cC5ob29rcy5hZGRGaWx0ZXIoJ2Jsb2Nrcy5nZXRTYXZlQ29udGVudC5leHRyYVByb3BzJywgJ2N1c3RvbS1hdHRyaWJ1dGVzL3NhdmUtYW5pbWF0aW9uLWF0dHJpYnV0ZScsIHNhdmVBbmltYXRpb25BdHRyaWJ1dGUpO1xuXG4vLyBBZGQgY3NzIGNsYXNzIHRvIGJsb2NrIHdyYXBwZXIgYmFzZWQgb24gYXR0cmlidXRlXG5jb25zdCB3aXRoQW5pbWF0aW9uUHJvcCA9IHdwLmNvbXBvc2UuY3JlYXRlSGlnaGVyT3JkZXJDb21wb25lbnQoQmxvY2tMaXN0QmxvY2sgPT4ge1xuICByZXR1cm4gcHJvcHMgPT4ge1xuICAgIC8vIElmIGN1cnJlbnQgYmxvY2sgaXMgbm90IGFsbG93ZWRcbiAgICBpZiAoIWVuYWJsZUFuaW1hdGVPcHRpb25zT25CbG9ja3MuaW5jbHVkZXMocHJvcHMubmFtZSkpIHtcbiAgICAgIHJldHVybiBlbChCbG9ja0xpc3RCbG9jaywgeyAuLi5wcm9wcyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgYW5pbWF0aW9uIH0gPSBhdHRyaWJ1dGVzO1xuXG4gICAgaWYgKGFuaW1hdGlvbiAmJiBhbmltYXRpb24gPT09ICd1cCcpIHtcbiAgICAgIHJldHVybiBlbChCbG9ja0xpc3RCbG9jaywgeyBjbGFzc05hbWU6ICdhbmltYXRpb24tdXAnLCAuLi5wcm9wcyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsKEJsb2NrTGlzdEJsb2NrLCB7IC4uLnByb3BzIH0pO1xuICAgIH1cbiAgfTtcbn0sICd3aXRoQW5pbWF0aW9uUHJvcCcpO1xud3AuaG9va3MuYWRkRmlsdGVyKCdlZGl0b3IuQmxvY2tMaXN0QmxvY2snLCAnY3VzdG9tLWF0dHJpYnV0ZXMvd2l0aC1hbmltYXRpb24tcHJvcCcsIHdpdGhBbmltYXRpb25Qcm9wKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/editor.js\n");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tCopyright (c) 2018 Jed Watson.\n\tLicensed under the MIT License (MIT), see\n\thttp://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = '';\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (arg) {\n\t\t\t\tclasses = appendClass(classes, parseValue(arg));\n\t\t\t}\n\t\t}\n\n\t\treturn classes;\n\t}\n\n\tfunction parseValue (arg) {\n\t\tif (typeof arg === 'string' || typeof arg === 'number') {\n\t\t\treturn arg;\n\t\t}\n\n\t\tif (typeof arg !== 'object') {\n\t\t\treturn '';\n\t\t}\n\n\t\tif (Array.isArray(arg)) {\n\t\t\treturn classNames.apply(null, arg);\n\t\t}\n\n\t\tif (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n\t\t\treturn arg.toString();\n\t\t}\n\n\t\tvar classes = '';\n\n\t\tfor (var key in arg) {\n\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\tclasses = appendClass(classes, key);\n\t\t\t}\n\t\t}\n\n\t\treturn classes;\n\t}\n\n\tfunction appendClass (value, newClass) {\n\t\tif (!newClass) {\n\t\t\treturn value;\n\t\t}\n\t\n\t\tif (value) {\n\t\t\treturn value + ' ' + newClass;\n\t\t}\n\t\n\t\treturn value + newClass;\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdGhlcnMtbWlsay1iYW5rLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanM/YzBkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcblx0Q29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG5cdExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG5cdGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKGFyZykge1xuXHRcdFx0XHRjbGFzc2VzID0gYXBwZW5kQ2xhc3MoY2xhc3NlcywgcGFyc2VWYWx1ZShhcmcpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcztcblx0fVxuXG5cdGZ1bmN0aW9uIHBhcnNlVmFsdWUgKGFyZykge1xuXHRcdGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuXHRcdFx0cmV0dXJuIGFyZztcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIGFyZyAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdH1cblxuXHRcdGlmIChhcmcudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgJiYgIWFyZy50b1N0cmluZy50b1N0cmluZygpLmluY2x1ZGVzKCdbbmF0aXZlIGNvZGVdJykpIHtcblx0XHRcdHJldHVybiBhcmcudG9TdHJpbmcoKTtcblx0XHR9XG5cblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRjbGFzc2VzID0gYXBwZW5kQ2xhc3MoY2xhc3Nlcywga2V5KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcztcblx0fVxuXG5cdGZ1bmN0aW9uIGFwcGVuZENsYXNzICh2YWx1ZSwgbmV3Q2xhc3MpIHtcblx0XHRpZiAoIW5ld0NsYXNzKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHRcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdHJldHVybiB2YWx1ZSArICcgJyArIG5ld0NsYXNzO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIHZhbHVlICsgbmV3Q2xhc3M7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/classnames/index.js\n");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/editor.js");
/******/ 	
/******/ })()
;