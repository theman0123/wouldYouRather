import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDnY5OxIOrJ4HVRNE8qhoE2yzLf7KX1uAE",
    authDomain: "wouldyou-289f3.firebaseapp.com",
    databaseURL: "https://wouldyou-289f3.firebaseio.com",
    projectId: "wouldyou-289f3",
    storageBucket: "wouldyou-289f3.appspot.com",
    messagingSenderId: "1086899690591"
  }

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
