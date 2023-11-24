
export default class Exception extends Error {
    #origin = null;

    get origin(){ return this.#origin; }

    constructor(message = '', origin = null) {
        super(message);

        this.#origin = origin;
    }
}
