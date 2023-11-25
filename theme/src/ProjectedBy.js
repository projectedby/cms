import Bootstrap from "./Bootstrap.js";
import ContentManagementSystem from "./ContentManagementSystem.js";

export default class ProjectedBy {
    static #bootstrap = Bootstrap;
    static #cms = ContentManagementSystem;

    static get bootstrap(){ return ProjectedBy.#bootstrap; }

    static get cms(){ return ProjectedBy.#cms; }
}
