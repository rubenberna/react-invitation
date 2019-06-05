import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

// Shortcuts for db collections
const guests = db.collection('guests')

export default {
  db,
  guests
}