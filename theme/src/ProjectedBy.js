import Bootstrap from "./Bootstrap.js";

export default class ProjectedBy {
    static #bootstrap = Bootstrap;

    static get bootstrap(){ return ProjectedBy.#bootstrap; }
}
