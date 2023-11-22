import { ExceptionInvalidInput } from "exception";

export default class BootstrapInput {
    static validate(o) {
        o = typeof o === 'string' ? document.getElementById(o) : o;

        if(!o.validity.valid) {
            if(!o.classList.contains('is-invalid')) {
                o.classList.add('is-invalid');
            }
            
            throw new ExceptionInvalidInput();
        }

        return true;
    }
    static initialize(o) {
        o = typeof o === 'string' ? document.getElementById(o) : o;

        o.addEventListener('change', event => {
            if(o.classList.contains('is-invalid')) {
                o.classList.remove('is-invalid');
            }
        });

        o.addEventListener('keydown', event => {
            if(o.classList.contains('is-invalid')) {
                o.classList.remove('is-invalid');
            }
        });
    }
}