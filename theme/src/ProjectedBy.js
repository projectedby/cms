import Bootstrap from "./Bootstrap.js";
import ContentManagementSystem from "./ContentManagementSystem.js";
import Firebase from "./Firebase.js";

export default class ProjectedBy {
    static #bootstrap = Bootstrap;
    static #firebase = Firebase;
    static #cms = ContentManagementSystem;

    static get bootstrap(){ return ProjectedBy.#bootstrap; }
    static get firebase(){ return ProjectedBy.#firebase; }

    static get cms(){ return ProjectedBy.#cms; }
}
