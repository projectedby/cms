import Exception from "./Exception.js";

import ExceptionUnsupported from "./exception/Unsupported.js";
import ExceptionUnsupportedMethod from "./exception/unsupported/Method.js";

import ExceptionExternal from "./exception/External.js";
import ExceptionExternalHttp from "./exception/external/Http.js";

import ExceptionInvalid from "./exception/Invalid.js";
import ExceptionInvalidInput from "./exception/invalid/Input.js";

import ExceptionDatabase from "./exception/Database.js";
import ExceptionDatabaseConnection from "./exception/database/Connection.js";

export default Exception;

export {
    ExceptionUnsupported,
    ExceptionUnsupportedMethod,

    ExceptionExternal,
    ExceptionExternalHttp,

    ExceptionInvalid,
    ExceptionInvalidInput,

    ExceptionDatabase,
    ExceptionDatabaseConnection
}