import {initializeApp} from 'firebase/app'
import{
    getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD6VT9oWg9hnVhfNFJ_4AGShoqI_6M9aPw",
    authDomain: "create-eb1b2.firebaseapp.com",
    projectId: "create-eb1b2",
    storageBucket: "create-eb1b2.appspot.com",
    messagingSenderId: "53761629389",
    appId: "1:53761629389:web:b2982a80942affa4cddd84",
    measurementId: "G-H7CWSR0BKD"
  };
// init firebase app 
  initializeApp(firebaseConfig)

//   init service
const db = getFirestore()

//collection ref
const colRef = collection(db, 'book')

//get collection datas
getDocs(colRef)
.then((snapshot) => {
let books = []
snapshot.docs.forEach((doc) => {
  books.push({ ...doc.data(), id: doc.id})
})
console.log(books);
}) 
.catch(err => {
   console.log(err.messages); 
})


//adding documents
const delete_book_from = document.querySelector()

