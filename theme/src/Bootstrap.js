import BootstrapInput from "./bootstrap/Input.js";

export default class Bootstrap {
    static #input = BootstrapInput;

    static get input(){ return Bootstrap.#input; }
}