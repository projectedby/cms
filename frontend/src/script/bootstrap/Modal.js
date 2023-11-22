
export default class BootstrapModal {
    static #o = new Map();
    static #modal = null;
    static #submit = null;
    static #cancel = null;

    static add(name, o) {
        BootstrapModal.#o.set(name, o);
    }

    static open(name, { submit, cancel, on }) {
        const modal = BootstrapModal.#o.get(name);

        if(BootstrapModal.#modal) {
            BootstrapModal.#modal.hide();
        }

        modal._element.addEventListener('show.bs.modal', async event => {
            if(on) on();
        }, { once: true });

        modal._element.addEventListener('shown.bs.modal', async event => {
            BootstrapModal.#modal = modal;
            BootstrapModal.#submit = submit;
            BootstrapModal.#cancel = cancel;
        }, { once: true });

        modal._element.addEventListener('hidden.bs.modal', async event => {
            BootstrapModal.#modal = null;
        }, { once: true });

        modal.show();
    }

    static async submit() {
        if(BootstrapModal.#modal) {
            if(BootstrapModal.#submit) {
                await BootstrapModal.#submit();
            }
            BootstrapModal.#submit = null;
            BootstrapModal.#cancel = null;
            BootstrapModal.#modal.hide();
        }
    }

    static async cancel() {
        if(BootstrapModal.#modal) {
            if(BootstrapModal.#cancel) {
                await BootstrapModal.#cancel();
            }
            BootstrapModal.#submit = null;
            BootstrapModal.#cancel = null;
            BootstrapModal.#modal.hide();
        }
    }
}