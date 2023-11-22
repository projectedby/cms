import ExceptionUnsupported from "../Unsupported.js";

export default class ExceptionUnsupportedMethod extends ExceptionUnsupported {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}
