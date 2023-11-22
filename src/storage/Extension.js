
export default class StorageExtension {
    #url = null;

    get url(){ return this.#url; }

    constructor(url) {
        this.#url = new URL(url);
    }

    async close() {
        
    }
}