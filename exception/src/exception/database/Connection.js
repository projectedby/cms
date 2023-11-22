import ExceptionDatabase from "../Database.js";

export default class ExceptionDatabaseConnection extends ExceptionDatabase {
    constructor(message = '', origin = null) {
        super(message, origin);
    }
}
