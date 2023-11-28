function submitForm(e){
    e.preventDefault();

    const name = document.getElementById("inpt-name");
    const email = document.getElementById("inpt-email");
    const number = document.getElementById("inpt-num");
    const subject = document.getElementById("inpt-subject");
    const message = document.getElementById("inpt-message");


    if(!name.value){
        alert("Please enter your name");
    }else if(!email.value){
        alert("Please enter your email address");
    }else if(!number.value){
        alert("Please enter phone number");
    }else if(!subject.value){
        alert("Please enter subject");
    }else if(!message.value){
        alert("Please enter message");
    }else{
        alert("Your Message has  been SuccessFully Send");
        name.value = "";
        email.value = "";
        number.value = "";
        subject.value = "";
        message.value = "";
    }
}