// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/app-check";


// TODO: FIREBASE 키를 환경에 따라서 적용할 수 있는 방법을 찾자. CMS 좋지 않구나....
export default class Firebase {
    static #config = {
        apiKey: "AIzaSyCVQlwQXor5tPqwrZfUzOdjMFPW9h1uLkE",
        authDomain: "projectedby-1fb36.firebaseapp.com",
        databaseURL: "https://projectedby-1fb36-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "projectedby-1fb36",
        storageBucket: "projectedby-1fb36.appspot.com",
        messagingSenderId: "997313119928",
        appId: "1:997313119928:web:894a2949463705d6fd964d",
        measurementId: "G-VZ51NY0GG1"
    };

    static #application = firebase.initializeApp(Firebase.#config);
    static #analytics = firebase.analytics();

    static #appcheck = firebase.appCheck();

//    static #appCheck = firebase.appCheck();
// // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// // key is the counterpart to the secret key you set in the Firebase console.
// appCheck.activate(
//   'abcdefghijklmnopqrstuvwxy-1234567890abcd',

//   // Optional argument. If true, the SDK automatically refreshes App Check
//   // tokens as needed.
//   true);

    static get application(){ return Firebase.#application; }
    static get analytics(){ return Firebase.#analytics; }

    static {
        Firebase.#appcheck.activate('6LfR5zQpAAAAAAeJg8zH1XnarR7Ea8XXvguz5_fo', true);
    }
}
