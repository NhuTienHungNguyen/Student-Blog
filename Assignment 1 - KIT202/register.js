let timeout;

// traversing the DOM and getting the input and span using their IDs

let password = document.getElementById('pswd')
let strengthMessage = document.getElementById('StrengthDisp')

// The strong and weak password Regex pattern checker

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength

    if(strongPassword.test(PasswordParameter)) {
        strengthMessage.style.backgroundColor = "green"
        strengthMessage.textContent = 'Strong'
    } else if(mediumPassword.test(PasswordParameter)){
        strengthMessage.style.backgroundColor = 'blue'
        strengthMessage.textContent = 'Medium'
    } else{
        strengthMessage.style.backgroundColor = 'red'
        strengthMessage.textContent = 'Weak'
    }
}

password.addEventListener("input", displayMessage);

function displayMessage() {
  //Show the hidden message
  strengthMessage.style.display= 'block'
  clearTimeout(timeout);

  //Check the password when user type in it

  timeout = setTimeout(() => StrengthChecker(password.value), 200);

  //Incase a user clears the text, the message is hidden again

  if(password.value.length !== 0){
      strengthMessage.style.display != 'block'
  } else{
      strengthMessage.style.display = 'none'
  }
}

function verifyPassword() {  
  let pw = document.getElementById("pswd").value;
  let confpw = document.getElementById("conf").value;

  //check empty password field  
  if(pw == "") {  
     document.getElementById("pswd_message").innerHTML = "Fill the password please!";  
     return false;  
  }  
   
  //minimum password length validation  
  else if(pw.length < 8) {  
     document.getElementById("pswd_message").innerHTML = "Password length must be atleast 8 characters";  
     return false;  
  }

  
  //maximum length of password validation  
  else if(pw.length > 20) {  
     document.getElementById("pswd_message").innerHTML = "Password length must not exceed 20 characters";  
     return false;  
  }

  else if(pw !== confpw) {
    document.getElementById("pswd_message").innerHTML = "Password not matched";
    return false;
  }

  else {  
     alert("Registration complete! Welcome you to our team");
     return true;
  }  
}