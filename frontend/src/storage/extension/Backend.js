import { ExceptionExternalHttp } from "exception";
import { StorageExtensionRest } from "storage";

export default class StorageExtensionBackend extends StorageExtensionRest {
    constructor(url) {
        super(url);
    }

    async getPost(o) {
        const response = await this.get(`/post${o && o.id ? `/${o.id}` : ''}`);
        if(response.status === 200 && response.json.status === 'ok') {
            console.log(response);
            return response.json.message.map(post => {
                post.url = `http://localhost:8070/post/${post.id}`;

                return post;
            });
        }

        console.log(response);
        
        throw new ExceptionExternalHttp();
    }
}