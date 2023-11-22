import Fetch from "fetch";

export default class Backend extends Fetch {
    constructor(url) {
        super(url);
    }
}