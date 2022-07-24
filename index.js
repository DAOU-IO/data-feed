const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

console.log(db);

(async () => {
    const docRef = db.collection('developerdao-projects').doc('web3-ui');
    await docRef.set({});

    const devdaoProjects = await db.collection('developerdao-projects').get();
    devdaoProjects.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });
})();
