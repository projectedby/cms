import Exception from "../Exception.js";

export default class ExceptionExternal extends Exception {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}
