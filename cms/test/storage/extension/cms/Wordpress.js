import StorageExtensionContentManagementSystemWordpress from "../../../../src/storage/extension/cms/Wordpress.js";

describe("wordpress", () => {
    it("post", async () => {
        const extension = new StorageExtensionContentManagementSystemWordpress('http://localhost:8080');

        console.log(await extension.getPost());

        await extension.close();
    });
});