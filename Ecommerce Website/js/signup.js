import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDaqrO-t81ZX-i-PiywljntZXd-s4kip-4",
    authDomain: "login-with-firebase-dde11.firebaseapp.com",
    databaseURL: "https://login-with-firebase-dde11-default-rtdb.firebaseio.com",
    projectId: "login-with-firebase-dde11",
    storageBucket: "login-with-firebase-dde11.appspot.com",
    messagingSenderId: "541922918170",
    appId: "1:541922918170:web:8f03e7af3c492be237b6a3"
  };

const firebase = initializeApp(firebaseConfig);
const authorize = firebase.auth()                    
const database = firebase.database()

function register()
{
    full_name = document.getElementById('name').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    number = document.getElementById('number').value


    if(validate_email(email) == false || validate_password(password) == false)
    {
        alert('Email or Password is Wrong ')
        return
    }
    else if(validate_name(full_name == false))
    {
        alert('Check Name Field')
        return
    }
    else if(validate_num(number) == false)
    {
        alert("Enter Valid Number")
        return
    }
   
}

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;

    var database_ref = database.ref()

    var user_data = {
      full_name : full_name,
      email:email,
      number : number,
      last_login : Date.now()
    }

    database_ref.child('user/' + user.uid).set(user_data) 

    alert('user created')
     
  })


  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    alert(errorMessage)
    
  });


function validate_email(email)
{
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if(expression.test(email) == true)
    {
        return true
    }
    else{
        return false
    }
}

function validate_password(password)
{
    if(password < 6){
        return false
    }
    else{
        return true
    }
}

function validate_name(full_name)
{
    if(full_name == null)
    {
        return false
    }

    if(full_name.length() <= 0)
    {
        return false
    }
    else{
        return true
    }
}

function validate_num(number)
{
    if(number.length() < 11 || number.length > 11)
    return false
    else{
        return true
    }
}

register()