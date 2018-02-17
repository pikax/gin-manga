import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();



admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  // storageBucket: "gin-manga.appspot.com",
  // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
  projectId: 'gin-manga'
});



const firestore = admin.firestore();


const mangahere = firestore.collection('manga_here');






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
