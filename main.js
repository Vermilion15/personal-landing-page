function submitForm(e){
    e.preventDefault();

    const name = document.getElementById("inpt-name");
    const email = document.getElementById("inpt-email");
    const number = document.getElementById("inpt-num");
    const subject = document.getElementById("inpt-subject");
    const message = document.getElementById("inpt-message");


    if(!name.value || !email.value || !number.value ||!subject.value ||!message.value){
        alert("Form must be filled in");
    } else{
        alert("Your Message has been successfully send!");
        name.value = "";
        email.value = "";
        number.value = "";
        subject.value = "";
        message.value = "";
    }
}