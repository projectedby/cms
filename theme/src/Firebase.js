import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

export default class Firebase {
    static #config = {
        apiKey: "AIzaSyCVQlwQXor5tPqwrZfUzOdjMFPW9h1uLkE",
        authDomain: "projectedby-1fb36.firebaseapp.com",
        projectId: "projectedby-1fb36",
        storageBucket: "projectedby-1fb36.appspot.com",
        messagingSenderId: "997313119928",
        appId: "1:997313119928:web:894a2949463705d6fd964d",
        measurementId: "G-VZ51NY0GG1"
    };

    static #application = initializeApp(Firebase.#config);
    static #analytics = getAnalytics(Firebase.#application);

    static get application(){ return Firebase.#application; }
    static get analytics(){ return Firebase.#analytics; }
}
