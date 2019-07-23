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

$("#add-user").on("click", function (event) {
  // Don't refresh the page!
  event.preventDefault();

  var name = $("#name-input").val().trim();
  var role = $("#role-input").val().trim();
  var startDate = $("#date-input").val().trim();
  var monthlyRate = $("#rate-input").val().trim();
  
  console.log("name: " + name);
  console.log("role: " + role);
  console.log("startDate: " + startDate);
  console.log("monthlyRate: " + monthlyRate);

  name = "John F Kennedy",
  role = "CEO",
  startDate = "01/21/1963",
  monthlyRate = 450 

  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate
  });

});

// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("child_added", function(snapshot) {

  var sv = snapshot.val();

  // Log everything that's coming out of snapshot
  console.log(sv.name);
  console.log(sv.role);
  console.log(sv.startDate);
  console.log(sv.monthlyRate);

  // Change the HTML to reflect
  $("#nameData").text(sv.name);
  $("#roleData").text(sv.role);
  $("#dateData").text(sv.startDate);
  $("#monthData").text(sv.monthlyRate);

  // Handle the errors
}, function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

var newRow = $("<tr>").append(
  $("<td>").text(empName),
  $("<td>").text(empRole),
  $("<td>").text(empStartDate),
  $("<td>").text(empMonths),
  $("<td>").text(empRate),
  $("<td>").text(empBilled),
);
