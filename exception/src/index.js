import Exception from "./Exception.js";

import ExceptionUnsupported from "./exception/Unsupported.js";
import ExceptionUnsupportedMethod from "./exception/unsupported/Method.js";

import ExceptionExternal from "./exception/External.js";
import ExceptionExternalHttp from "./exception/external/Http.js";

export default Exception;

export {
    ExceptionUnsupported,
    ExceptionUnsupportedMethod,

    ExceptionExternal,
    ExceptionExternalHttp
}