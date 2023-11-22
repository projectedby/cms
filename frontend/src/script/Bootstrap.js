import BootstrapInput from "./bootstrap/Input.js";
import BootstrapModal from "./bootstrap/Modal.js";

export default class Bootstrap {
    static #input = BootstrapInput;
    static #modal = BootstrapModal;

    static get input(){ return Bootstrap.#input; }
    static get modal(){ return Bootstrap.#modal; }
}