import Firebase from 'firebase';
 let config = {
   apiKey: "AIzaSyCRRsSFxnpJ6eA96SMbpuN7RYMYjtBuIA0",
   authDomain: "proto-task.firebaseapp.com",
   databaseURL: "https://proto-task.firebaseio.com",
   projectId: "proto-task",
   storageBucket: "proto-task.appspot.com",
   messagingSenderId: "690792747899"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();
