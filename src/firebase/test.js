import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("7LjUHneVt5ifiyEhOlIE")
  .collection("cartItems")
  .doc("vABIzZIzAIrIlzIMcUdN");

// firestore.doc("/users/7LjUHneVt5ifiyEhOlIE/cartItems/vABIzZIzAIrIlzIMcUdN");

firestore.collection("/users/7LjUHneVt5ifiyEhOlIE/cartItems");
