
export default class Log {
    static #datetime(date) {
        function number(n, basis = 10) {
            if(basis === 10) {
                return n >= 10 ? n.toString() : `0${n}`;
            } else if(basis === 100) {
                return n >= 100 ? n.toString() : (n >= 10 ? n.toString() : `0${n}`);
            }
        }
        return `${date.getFullYear()}/` +
        `${number(date.getMonth() + 1)}/` +
        `${number(date.getDate())} ` +
        `${number(date.getHours())}:` +
        `${number(date.getMinutes())}:` +
        `${number(date.getSeconds())}.` +
        `${number(date.getMilliseconds())}`;
    }
    static #message(message) {
        return typeof message === 'string' ? message : JSON.stringify(message, null, 2);
    }

    static #name = null;

    static set name(v){ Log.#name = v; }

    static e(tag, message) {
        const prefix = 'e';
        const date = new Date();

        const string = `${Log.#datetime(date)} ${Log.#name}/${prefix} ${tag}: ${Log.#message(message)}`;

        console.log(string);
    }

    static w(tag, message) {
        const prefix = 'w';
        const date = new Date();

        const string = `${Log.#datetime(date)} ${Log.#name}/${prefix} ${tag}: ${Log.#message(message)}`;

        console.log(string);
    }

    static c(tag, message) {
        const prefix = 'c';
        const date = new Date();

        const string = `${Log.#datetime(date)} ${Log.#name}/${prefix} ${tag}: ${Log.#message(message)}`;

        console.log(string);
    }

    static i(tag, message) {
        const prefix = 'i';
        const date = new Date();

        const string = `${Log.#datetime(date)} ${Log.#name}/${prefix} ${tag}: ${Log.#message(message)}`;

        console.log(string);
    }

    static d(tag, message) {
        const prefix = 'd';
        const date = new Date();

        const string = `${Log.#datetime(date)} ${Log.#name}/${prefix} ${tag}: ${Log.#message(message)}`;

        console.log(string);
    }

    static v(tag, message) {
        const prefix = 'v';
        const date = new Date();

        const string = `${Log.#datetime(date)} ${Log.#name}/${prefix} ${tag}: ${Log.#message(message)}`;

        console.log(string);
    }
}
