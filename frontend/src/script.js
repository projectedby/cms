import Backend from "./script/Backend.js";
import Bootstrap from "./script/Bootstrap.js";

async function subscribe(email) {
    const response = await Backend.post('/subscribe', { email });

    console.log(response);

    return true;
}

const projectedby = {
    subscribe,
    bootstrap: Bootstrap,
    backend: Backend
};

window.projectedby = projectedby;

export default projectedby;