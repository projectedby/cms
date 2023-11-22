import { StorageExtension, StorageExtensionRest } from "storage";

import { ExceptionExternalHttp } from "exception";

import ContentManagementSystemPost from "../../../Post.js";

export default class StorageExtensionContentManagementSystemWordpress extends StorageExtension {
    #http = null;
    
    constructor(url) {
        super(url);

        this.#http = new StorageExtensionRest(url);
    }

    async getPost(o = null) {
        const response = await this.#http.get(null, Object.assign({ rest_route: '/wp/v2/posts' }, o));

        if(response.status === 200) {
            const posts = [];

            for(const o of response.json) {
                const post = new ContentManagementSystemPost();

                post.id = o.id;
                post.date = new Date(o.date);
                post.modified = new Date(o.modified);
                post.title = o.title.rendered;
                post.content = o.content.rendered;
                post.summary = o.excerpt.rendered;
                post.author = null; // TODO: GET USER
                post.media = null;  // TODO: GET MEDIA
                post.url = o.link;
                post.reaction = null;

                posts.push(post);
            }

            return posts;
        }

        throw new ExceptionExternalHttp();  // TODO: 
    }
}