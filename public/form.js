// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCSFfLk5TQTlDvUtjoSkTaAJU1f3Np-7MI",
    authDomain: "iccin-2020.firebaseapp.com",
    databaseURL: "https://iccin-2020.firebaseio.com",
    projectId: "iccin-2020",
    storageBucket: "iccin-2020.appspot.com",
    messagingSenderId: "50828421751",
    appId: "1:50828421751:web:bd51ea2e259a29e0137472"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('Papers');

document.getElementById("submitform").addEventListener("submit", submitform);

function submitform(e){
    e.preventDefault();

    var salute = getInputVal("salute");
    var name = getInputVal("name");
    var title = getInputVal("title");
    var abstract = getInputVal("abstract");
    var keywords = getInputVal("keywords");
    var email = getInputVal("email");
    var ele = document.getElementsByName('gridRadios'); 
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
        var series = ele[i].value; 
    } 

    saveMessage(salute, name, title, abstract, keywords, email, series);



    window.open('https://easychair.org/conferences/?conf=iccin2020', '_blank');
}

function getInputVal(id){
    return document.getElementById(id).value;
}


function saveMessage(salute, name, title, abstract, keywords, email, series){
    var newMessageRef  = messagesRef.push();
    newMessageRef.set({
        salute:salute,
        name:name, 
        title:title,
        abstract:abstract,
        keywords:keywords,
        email:email,
        series:series
    });
}