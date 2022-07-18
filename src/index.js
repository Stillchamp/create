import {initializeApp} from 'firebase/app'
import{
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc
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
const add_book_from = document.querySelector(' .add')
add_book_from.addEventListener('submt', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    title: add_book_from.title.value,
    author: add_book_from.author.value,
  })
  .then(() =>{
   add_book_from.reset()
  })

})


//delete the document
const delete_book_from = document.querySelector(' .delete')
add_book_from.addEventListener('submt', (e) => {
  e.preventDefault()

   const docRef = doc(db, 'book', delete_book_from.id.value)

   deleteDoc(docRef)
   .then(()=> {
    delete_book_from.reset()
   })
})



