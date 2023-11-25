import ExceptionInvalidInput from "../../../exception/src/exception/invalid/Input.js";

export default class BootstrapInput {
    static on(o) {
        o.addEventListener('change', event => {
            if(o.classList.contains('is-invalid')) o.classList.remove('is-invalid');
        });

        o.addEventListener('keydown', event => {
            if(o.classList.contains('is-invalid')) o.classList.remove('is-invalid');
        });
    }

    static validate(o) {
        if(o.validity.valid) return true;

        if(!o.classList.contains('is-invalid')) o.classList.add('is-invalid');
        o.focus();

        throw new ExceptionInvalidInput();
    }
}