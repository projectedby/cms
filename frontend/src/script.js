import Backend from "./script/Backend.js";
import Bootstrap from "./script/Bootstrap.js";

const backend = new Backend("http://localhost:8090/");

async function subscribe(email) {
    const response = await backend.post('/subscribe', { email });

    console.log(response);

    return true;
}

const projectedby = {
    subscribe,
    bootstrap: Bootstrap,
    backend
};

window.projectedby = projectedby;

export default projectedby;