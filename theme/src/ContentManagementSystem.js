import Firebase from "./Firebase.js";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default class ContentManagementSystem {
    static #db = firebase.firestore();
    static async subscribe(email) {
        if(email.validity.valid) {
            try {
                await ContentManagementSystem.#db.collection("subscriber")
                                                 .doc(email.value)
                                                 .set({ free: true });
            } catch(e) {
                console.log(e);
                // FirebaseError: Missing or insufficient permissions.
            }
        }
    }
}