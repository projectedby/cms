import Response from "../Response.js";

export default class ResponseException extends Response {
    constructor(exception, status = "fail", type = "exception") {
        super(null, status, type);

        this.message = exception;
    }
}
