import * as functions from 'firebase-functions';
import {mangahere} from "gin-downloader";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});


export const mangas = functions.https.onRequest(((req, resp) => {
  mangahere.mangas().then(resp.send)
    .catch(resp.send);
}));
