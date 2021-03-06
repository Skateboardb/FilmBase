var firebaseConfig = {
    apiKey: "AIzaSyChhYquphq9TwGjBw2eDltnRKXRcaHiN_c",
    authDomain: "filmbase-847bf.firebaseapp.com",
    databaseURL: "https://filmbase-847bf.firebaseio.com",
    projectId: "filmbase-847bf",
    storageBucket: "filmbase-847bf.appspot.com",
    messagingSenderId: "54580608272",
    appId: "1:54580608272:web:248cc3ca697223346e7995",
    measurementId: "G-TV2F9TKHEL"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();


//reference the database 
var database = firebase.database();


var userSearchTerm = "";

//on click function 
$("#submitBtn").on("click", function () {

    // Don't refresh the page!
    event.preventDefault();

    //values for each input 

    userSearchTerm = $("#movieSearch").val().trim();

    //save new values to Firebase 
    database.ref().push({
        userSearchTerm: userSearchTerm,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
})