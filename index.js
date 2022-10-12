// my js code.....
const form = document.getElementById("form");
const firstName = document.getElementById("fastName");
const lastName = document.getElementById("lastName");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const birthday = document.getElementById("birthday");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");

//prevent default set here..
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    validate();
});


const validate = ()=> {
    const firsttNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const fullNameVal = fullName.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const birthdayVal = birthday.value.trim();
    const passwordVal = password.value.trim();
    const repeatPasswordVal = repeatPassword.value.trim();

    // for first name feild...
    if(firsttNameVal === ""){
        document.getElementById('error1').innerText = "Cannot be blank First Name!"
        clear();
        return false;
    }else if(firsttNameVal.length >= 10){
        document.getElementById("error1").innerText = "Should not be more than 10 characters First Name";
        clear();
        return false;
    }
    else if(firsttNameVal === firsttNameVal.toLowerCase()){
        document.getElementById("error1").innerText = "Must start with capital letter Your First Name";
        clear();
        return false;
    }

    // for last name feild...
    if(lastNameVal === ""){
        document.getElementById('error2').innerText = "Cannot be blank Last Name!"
        clear();
        return false;
    }else if(lastNameVal.length >= 10){
        document.getElementById("error2").innerText = "Should not be more than 10 characters Last Name";
        clear();
        return false;
    }
    else if(lastNameVal === lastNameVal.toLowerCase()){
        document.getElementById("error2").innerText = "Must start with capital letter Your Last Name";
        clear();
        return false;
    }
   
      // for last email feild...
      let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      if(emailVal === ""){
        document.getElementById('error4').innerText = "Cannot be blank email!"
        clear();
        return false;
    }else if(emailVal.match(!regex)){
        document.getElementById("error4").innerText = "Please enter your valid email and must be include @ ";
        clear();
        return false;
    }

      // for last email feild...
      let phoneRgex =  /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
      if(phoneVal === ""){
        document.getElementById('error5').innerText = "Cannot be blank phone number!"
        clear();
        return false;
    }else if(phoneVal.match(!phoneRgex)){
        document.getElementById("error5").innerText = "Please enter your valid phone number and must be start with 01 and digit will be 11 ";
        clear();
        return false;
    }
   
     // for last birthday feild...
     if(birthdayVal === ""){
       document.getElementById('error6').innerText = "Cannot be blank phone birthday date!"
       clear();
       return false;
   }else if(birthdayVal >= 18){
       document.getElementById("error6").innerText = "Please enter your birthday date, which will be more then 18";
       clear();
       return false;
   }

    // for last birthday feild...
    if(passwordVal === ""){
        document.getElementById('error6').innerText = "Cannot be blank phone Password"
        clear();
        return false;
    }else if(password >= 6){
        document.getElementById("error6").innerText = "must be 6 character";
        clear();
        return false;
    }

      // for last birthday feild...
      if(repeatPasswordVal === ""){
        document.getElementById('error6').innerText = "Cannot be blank phone repeat Password"
        clear();
        return false;
    }else if(repeatPasswordVal == passwordVal){
        document.getElementById("error6").innerText = "must be acurate to password";
        clear();
        return false;
    }

};

const clear = () =>{
    firstName.value = "";
    lastName.value = "";
    fullName.value = "";
    email.value = "";
    phone.value = "";
}

