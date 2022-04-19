function verifyPassword() {  
    let pw = document.getElementById("pswd").value;  
     
    //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "Password length must be atleast 8 characters";  
       return false;  
    }  
    
    //maximum length of password validation  
    else if(pw.length > 20) {  
       document.getElementById("message").innerHTML = "Password length must not exceed 20 characters";  
       return false;  
    }

    else {  
       alert("Login success!");
       return true;  
    }  
  }  