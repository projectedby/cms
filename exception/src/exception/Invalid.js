import Exception from "../Exception.js";

export default class ExceptionInvalid extends Exception {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}
