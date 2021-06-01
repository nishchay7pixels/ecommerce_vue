import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "<replace-with-your-details-from-firebase>",
    authDomain: "<replace-with-your-details-from-firebase>",
    projectId: "<replace-with-your-details-from-firebase>",
    storageBucket: "<replace-with-your-details-from-firebase>",
    messagingSenderId: "<replace-with-your-details-from-firebase>",
    appId: "<replace-with-your-details-from-firebase>",
    measurementId: "<replace-with-your-details-from-firebase>"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
