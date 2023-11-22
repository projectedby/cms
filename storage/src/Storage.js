import { ExceptionUnsupportedMethod } from "exception";

export default class Storage {
    #extension = null;

    constructor(extension) {
        this.#extension = extension;
    }

    async call(name, ...args) {
        if(typeof this.#extension[name] === 'function') {
            return await this.#extension[name](...args);
        }
        
        throw new ExceptionUnsupportedMethod(`${this.#extension ? `${this.#extension.name}[${name}] is not a function` : 'extension is null'}`);
    }

    async close() {
        this.#extension.close();
    }
}