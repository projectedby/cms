export default class Fetch {
    #url = null;

    get url(){ return this.#url; }

    constructor(url) {
        this.#url = new URL(url);
    }

    async get(path, query = null) {
        const parameters = query ? new URLSearchParams(query) : null;

        const url = `${this.url.origin}${path ? path : this.url.pathname}${parameters ? `?${parameters.toString()}` : ''}`;

        const response = await fetch(url, {
            method: 'GET'
        });

        return {
            status: response.status,
            json: await response.json()
        }
    }

    async post(path, body) {
        console.log(body);

        const url = `${this.url.origin}${path ? path : this.url.pathname}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body, null, 2)
        });

        return {
            status: response.status,
            json: await response.json()
        }
    }
}