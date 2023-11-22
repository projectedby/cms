import StorageExtension from "../Extension.js";

export default class StorageExtensionRest extends StorageExtension {
    constructor(url) {
        super(url);
    }

    async get(path, query = null) {
        const parameters = query ? new URLSearchParams(query) : null;

        const url = `${this.url.origin}${path ? path : this.url.pathname}${parameters ? `?${parameters.toString()}` : ''}`;

        const response = await fetch(url, {
            method: 'GET'
        });

        return {
            status: response.status,
            json: await response.json()
        }
    }
}