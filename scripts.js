function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errmsg = document.getElementById("errmsg");
    var text;

    errmsg.style.padding="10px";

    if(name.length <5){
        text="Please Enter Valid Name";
        errmsg.innerHTML=text;
        return false;
    }

    if(subject.length <10){
        text="Please Enter Correct Subject";
        errmsg.innerHTML=text;
        return false;
    }

    if(isNaN(phone) || phone.length !=10){
        text="Please Enter Valid Phone Number";
        errmsg.innerHTML=text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text="Please Enter Valid Mail Id";
        errmsg.innerHTML=text;
        return false;
    }

    if(message.length <= 140){
        text = "Please Enter more than 140 characters";
        errmsg.innerHTML=text;
        return false;
    }

    alert("Form Submitted successfully!")
    
    return true;
}
