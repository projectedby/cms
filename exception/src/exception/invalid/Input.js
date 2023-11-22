import ExceptionInvalid from "../Invalid.js";

export default class ExceptionInvalidInput extends ExceptionInvalid {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}
