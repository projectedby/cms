import ExceptionExternal from "../External.js";

export default class ExceptionExternalHttp extends ExceptionExternal {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}
