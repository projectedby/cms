import Fetch from "fetch";

import StorageExtension from "../Extension.js";

export default class StorageExtensionRest extends StorageExtension {
    #fetch = null;

    constructor(url) {
        super(url);
        
        this.#fetch = new Fetch(url);
    }

    async post(path, body) {
        return await this.#fetch.post(path, body);
    }

    async get(path, query = null) {
        return await this.#fetch.get(path, query);
    }
}