/* global moment firebase */

// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var config = {
    apiKey: "AIzaSyDjA2Lp4Qga0i6vs4xUH4-1tCm-nwOYgIk",
    authDomain: "fullstackclass-15e91.firebaseapp.com",
    databaseURL: "https://fullstackclass-15e91.firebaseio.com",
    projectId: "fullstackclass-15e91",
    storageBucket: "",
    messagingSenderId: "568587410686",
    appId: "1:568587410686:web:238e56d9c15a3c74"
  };
  firebase.initializeApp(config);
  
  // Assign the reference to the database to a variable named 'database'
  // var database = ...
  var database = firebase.database();
  
  // --------------------------------------------------------------
  // Link to Firebase Database for viewer tracking
  var connectionsRef = database.ref();
  
  // '.info/connected' is a special location provided by Firebase that is updated every time
  // the client's connection state changes.
  // '.info/connected' is a boolean value, true if the client is connected and false if they are not.
  var connectedRef = database.ref(".info/connected");
  
  name = "Abraham Lincoln",
  role = "CEO",
  startDate = "01/21/2005",
  monthlyRate = 420 

  name = "George Washington",
  role = "CEO",
  startDate = "01/21/2000",
  monthlyRate = 400 

  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate
  });



