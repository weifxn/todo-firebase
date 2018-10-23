import * as firebase from "../firebase"
const dbRef = firebase.database().ref()
const ref = dbRef.child("todo")

export const addItem = newItem => {
  ref.push().set(newItem)
}

export const deleteItem = deleteItem => {
  ref.child(deleteItem).remove()
}

export const fetchItem = () => {
  ref.on("value", snapshot => {
    var items = [];
      snapshot.forEach((child) => {
        items.push({
          title: child.title,
          desc: child.desc
        });
      });
  })
}