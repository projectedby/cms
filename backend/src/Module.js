
export default class Module {
    static #cms = null;

    static get cms(){ return this.#cms; }

    static cms(storage) {
        Module.#cms = storage;
    }
}