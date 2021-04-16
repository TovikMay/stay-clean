var firstname =document.querySelector("#firstname");
var lastname =document.querySelector("#lastname");
var username =document.querySelector("#username");
var nin =document.querySelector("#NIN");
var dob =document.querySelector("#DoB");
var city =document.querySelector("#city");
var licence =document.querySelector("#licence");
var gender =document.queryselectorall(".gender");
var status =document.queryselectorall(".status");
var incidences =document.queryselectorall(".incidences");
var imageupload =document.querySelector("#imageupload");


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

