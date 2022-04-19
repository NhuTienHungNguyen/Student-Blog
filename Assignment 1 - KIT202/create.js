function verifyTitle() {  
    let title_box = document.getElementById("title_box").value;   
    
    //maximum length of password validation  
    if(title_box.length > 70) {  
       document.getElementById("message").innerHTML = "Title length must not exceed 70 characters";  
       return false;  
    }

    else {  
       alert("Post create successfully!");
       return true;  
    }  
  }  