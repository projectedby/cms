import Exception from "../Exception.js";

export default class ExceptionUnsupported extends Exception {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}
