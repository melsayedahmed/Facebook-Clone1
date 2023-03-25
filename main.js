function formValidate() {

    let UserName = document.getElementById("login_email").value;
    let uPassword = document.getElementById("login_pass").value;
    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");
    let text = '';

    if (UserName.length < 6) {
        //error
        text = "Please Enter 6 Charcters";
        userError.innerHTML = text;
        return false;
    }
    else if ((isNaN (uPassword)) , (uPassword === "")){
        //error
        text = "Please Enter a Vailed password";
        passError.innerHTML = text;
        console.log("not ok");
        return false;
    }
    
    else{
        // alert("Done");
        return true;
    }
}


function closePopUp(){
    document.getElementById("popUp").style.display= "none";
    document.getElementById("foot").style.display = "block";
}

function openPopUp(){
    document.getElementById("popUp").style.display = "block";
    document.getElementById("foot").style.display = "none";
}

function signUpValidate() {

    let firstName = document.getElementById("firstname").value;
    let surName = document.getElementById("surname").value;
    let mailMobName = document.getElementById("mob_mail").value;
    let passow = document.getElementById("pass").value;
    let f_name_Error = document.getElementById("f_nameError");
    let s_name_Error = document.getElementById("s_nameError");
    let mail_Error = document.getElementById("mail_error");
    let pass_Error = document.getElementById("pass_error");
    let message = "";
    
    if (firstName === ""){
        // error
        message = "Enter Your First Name";
        f_nameError.innerHTML = message;
        return false;
    }
    else if (surName === ""){
        // error
        message = "Enter Your Last Name";
        s_name_Error.innerHTML = message;
        return false;
    }
    else if (mailMobName === "" || mailMobName.indexOf("@") === -1){
        // error
        message = "Enter Your email or Phone Number";
        mail_Error.innerHTML = message;
        return false;
    }
    
    else if ( passow === "" ){
        // error
        message = "Enter Your Password";
        pass_Error.innerHTML = message;
        return false;
    }

    else {
        return true;
    }



}
// onsubmit="return false"
// validation
// UserName.indexOf("@") == -1




