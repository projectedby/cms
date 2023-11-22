export default class ContentManagementSystemPost {
    #o = null;

    id = null;
    date = null;
    modified = null;
    title = null;
    content = null;
    summary = null;
    author = null;
    media = null;
    url = null;
    reaction = null;

    get o(){ return this.#o; }

    constructor(o) {
        this.#o = o;
    }
}