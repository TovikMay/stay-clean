const Validate = () =>{
    var firstname =document.querySelector("#firstname");
    var lastname =document.querySelector("#lastname");
    var username =document.querySelector("#username");
    var fullname =document.querySelector("#fullname");
    var nin =document.querySelector("#NIN");
    var city =document.querySelector("#city");
    var plate =document.querySelector("#plate");
    var password =document.querySelector("#password"); 
    var number =document.querySelector("#number");
    var imageupload=document.querySelector("#imageupload");
    var licence =document.querySelector("#licence");
    var enteremail =document.querySelector("#enteremail");
    var confrimpassword =document.querySelector("#confrimpassword");
    var trucknumber =document.querySelector("#trucknumber");
    var message =document.querySelector("#message");
    var dob =document.querySelector("#DoB");
    var gender =document.queryselectorall(".gender");
    var services =document.queryselectorall(".services");
    var location =document.queryselectorall(".location");
    var incidences =document.queryelectorall(".incidences");
    var status =document.queryselectorall(".status");
    var allocated =document.queryselectorall(".allocated");
}


if (firstname.value.length <2){
    alert("please the first name must be atleast 2 letters");
    return false;
}

if(lastname.value.length <2){
    alert("please the last name must be atleast 2 letters")
}

if(username.value.length <2){
    alert("please the last name must be atleast 2 letters")
}




