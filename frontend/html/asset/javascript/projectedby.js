/******/ var __webpack_modules__ = ({

/***/ "../exception/src/Exception.js":
/*!*************************************!*\
  !*** ../exception/src/Exception.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Exception)
/* harmony export */ });

class Exception extends Error {
    #origin = null;

    get origin(){ return this.#origin; }

    constructor(message = '', origin = null) {
        super(message);

        this.#origin = origin;
    }
}

/***/ }),

/***/ "../exception/src/exception/Database.js":
/*!**********************************************!*\
  !*** ../exception/src/exception/Database.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExceptionDatabase)
/* harmony export */ });
/* harmony import */ var _Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Exception.js */ "../exception/src/Exception.js");


class ExceptionDatabase extends _Exception_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}

/***/ }),

/***/ "../exception/src/exception/External.js":
/*!**********************************************!*\
  !*** ../exception/src/exception/External.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExceptionExternal)
/* harmony export */ });
/* harmony import */ var _Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Exception.js */ "../exception/src/Exception.js");


class ExceptionExternal extends _Exception_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}


/***/ }),

/***/ "../exception/src/exception/Invalid.js":
/*!*********************************************!*\
  !*** ../exception/src/exception/Invalid.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExceptionInvalid)
/* harmony export */ });
/* harmony import */ var _Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Exception.js */ "../exception/src/Exception.js");


class ExceptionInvalid extends _Exception_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}


/***/ }),

/***/ "../exception/src/exception/Unsupported.js":
/*!*************************************************!*\
  !*** ../exception/src/exception/Unsupported.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExceptionUnsupported)
/* harmony export */ });
/* harmony import */ var _Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Exception.js */ "../exception/src/Exception.js");


class ExceptionUnsupported extends _Exception_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}


/***/ }),

/***/ "../exception/src/exception/database/Connection.js":
/*!*********************************************************!*\
  !*** ../exception/src/exception/database/Connection.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExceptionDatabaseConnection)
/* harmony export */ });
/* harmony import */ var _Database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Database.js */ "../exception/src/exception/Database.js");


class ExceptionDatabaseConnection extends _Database_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}


/***/ }),

/***/ "../exception/src/exception/external/Http.js":
/*!***************************************************!*\
  !*** ../exception/src/exception/external/Http.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExceptionExternalHttp)
/* harmony export */ });
/* harmony import */ var _External_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../External.js */ "../exception/src/exception/External.js");


class ExceptionExternalHttp extends _External_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}


/***/ }),

/***/ "../exception/src/exception/invalid/Input.js":
/*!***************************************************!*\
  !*** ../exception/src/exception/invalid/Input.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExceptionInvalidInput)
/* harmony export */ });
/* harmony import */ var _Invalid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Invalid.js */ "../exception/src/exception/Invalid.js");


class ExceptionInvalidInput extends _Invalid_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}


/***/ }),

/***/ "../exception/src/exception/unsupported/Method.js":
/*!********************************************************!*\
  !*** ../exception/src/exception/unsupported/Method.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExceptionUnsupportedMethod)
/* harmony export */ });
/* harmony import */ var _Unsupported_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Unsupported.js */ "../exception/src/exception/Unsupported.js");


class ExceptionUnsupportedMethod extends _Unsupported_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}


/***/ }),

/***/ "../exception/src/index.js":
/*!*********************************!*\
  !*** ../exception/src/index.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExceptionDatabase: () => (/* reexport safe */ _exception_Database_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   ExceptionDatabaseConnection: () => (/* reexport safe */ _exception_database_Connection_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   ExceptionExternal: () => (/* reexport safe */ _exception_External_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   ExceptionExternalHttp: () => (/* reexport safe */ _exception_external_Http_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   ExceptionInvalid: () => (/* reexport safe */ _exception_Invalid_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   ExceptionInvalidInput: () => (/* reexport safe */ _exception_invalid_Input_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   ExceptionUnsupported: () => (/* reexport safe */ _exception_Unsupported_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ExceptionUnsupportedMethod: () => (/* reexport safe */ _exception_unsupported_Method_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Exception.js */ "../exception/src/Exception.js");
/* harmony import */ var _exception_Unsupported_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exception/Unsupported.js */ "../exception/src/exception/Unsupported.js");
/* harmony import */ var _exception_unsupported_Method_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exception/unsupported/Method.js */ "../exception/src/exception/unsupported/Method.js");
/* harmony import */ var _exception_External_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exception/External.js */ "../exception/src/exception/External.js");
/* harmony import */ var _exception_external_Http_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exception/external/Http.js */ "../exception/src/exception/external/Http.js");
/* harmony import */ var _exception_Invalid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exception/Invalid.js */ "../exception/src/exception/Invalid.js");
/* harmony import */ var _exception_invalid_Input_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exception/invalid/Input.js */ "../exception/src/exception/invalid/Input.js");
/* harmony import */ var _exception_Database_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exception/Database.js */ "../exception/src/exception/Database.js");
/* harmony import */ var _exception_database_Connection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exception/database/Connection.js */ "../exception/src/exception/database/Connection.js");














/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Exception_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../fetch/src/Fetch.js":
/*!*****************************!*\
  !*** ../fetch/src/Fetch.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Fetch)
/* harmony export */ });
class Fetch {
    #url = null;

    get url(){ return this.#url; }

    constructor(url) {
        this.#url = new URL(url);
    }

    async get(path, query = null) {
        const parameters = query ? new URLSearchParams(query) : null;

        const url = `${this.url.origin}${path ? path : this.url.pathname}${parameters ? `?${parameters.toString()}` : ''}`;

        const response = await fetch(url, {
            method: 'GET'
        });

        return {
            status: response.status,
            json: await response.json()
        }
    }

    async post(path, body) {
        console.log(body);

        const url = `${this.url.origin}${path ? path : this.url.pathname}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body, null, 2)
        });

        return {
            status: response.status,
            json: await response.json()
        }
    }
}

/***/ }),

/***/ "../fetch/src/index.js":
/*!*****************************!*\
  !*** ../fetch/src/index.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fetch.js */ "../fetch/src/Fetch.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Fetch_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/script/Backend.js":
/*!*******************************!*\
  !*** ./src/script/Backend.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Backend)
/* harmony export */ });
/* harmony import */ var fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fetch */ "../fetch/src/index.js");


class Backend extends fetch__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(url) {
        super(url);
    }
}

/***/ }),

/***/ "./src/script/Bootstrap.js":
/*!*********************************!*\
  !*** ./src/script/Bootstrap.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bootstrap)
/* harmony export */ });
/* harmony import */ var _bootstrap_Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap/Input.js */ "./src/script/bootstrap/Input.js");


class Bootstrap {
    static #input = _bootstrap_Input_js__WEBPACK_IMPORTED_MODULE_0__["default"];

    static get input(){ return Bootstrap.#input; }
}

/***/ }),

/***/ "./src/script/bootstrap/Input.js":
/*!***************************************!*\
  !*** ./src/script/bootstrap/Input.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BootstrapInput)
/* harmony export */ });
/* harmony import */ var exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! exception */ "../exception/src/index.js");


class BootstrapInput {
    static validate(o) {
        o = typeof o === 'string' ? document.getElementById(o) : o;

        if(!o.validity.valid) {
            if(!o.classList.contains('is-invalid')) {
                o.classList.add('is-invalid');
            }

            o.focus();
            
            throw new exception__WEBPACK_IMPORTED_MODULE_0__.ExceptionInvalidInput();
        }

        return true;
    }
    static initialize(o) {
        o = typeof o === 'string' ? document.getElementById(o) : o;

        o.addEventListener('change', event => {
            if(o.classList.contains('is-invalid')) {
                o.classList.remove('is-invalid');
            }
        });

        o.addEventListener('keydown', event => {
            if(o.classList.contains('is-invalid')) {
                o.classList.remove('is-invalid');
            }
        });
    }
}

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_Backend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/Backend.js */ "./src/script/Backend.js");
/* harmony import */ var _script_Bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/Bootstrap.js */ "./src/script/Bootstrap.js");



const backend = new _script_Backend_js__WEBPACK_IMPORTED_MODULE_0__["default"]("http://localhost:8090/");

async function subscribe(email) {
    const response = await backend.post('/subscribe', { email });

    console.log(response);

    return true;
}

const projectedby = {
    subscribe,
    bootstrap: _script_Bootstrap_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    backend
};

window.projectedby = projectedby;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectedby);
})();

var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };

//# sourceMappingURL=projectedby.js.map