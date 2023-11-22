import { StorageExtension, StorageExtensionRest } from "storage";

export default class StorageExtensionContentManagementSystemWordpress extends StorageExtension {
    #http = null;
    
    constructor(url) {
        super(url);

        this.#http = new StorageExtensionRest(url);
    }
}