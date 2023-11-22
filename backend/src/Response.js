
export default class Response {
    type = null;
    message = null;
    status = null;

    constructor(message = null, status = 'ok', type = 'message') {
        this.type = type;
        this.status = status;
        this.message = message;
    }
}
