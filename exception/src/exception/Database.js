import Exception from "../Exception.js";

export default class ExceptionDatabase extends Exception {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}