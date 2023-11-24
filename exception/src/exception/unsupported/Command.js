import ExceptionUnsupported from "../Unsupported.js";

export default class ExceptionUnsupportedCommand extends ExceptionUnsupported {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}
