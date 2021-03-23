var user_name = document.login.field1;
var email = document.login.field2;
var password = document.login.field3;


var userName = () =>{
    if (user_name.value == ""){
        user_name.style.border = "1px solid red";
        return false;
    }
    let min = 5;
    if (user_namae.value.length < min){
        alert("Please input name");
        user_name.style.border = "2px solid red";
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if(user_name.value.match(letters)){
        return true;
    }else {
        alert("User name shouldnot have numbers");
        user_name.style.border = "2px solid red";
    }
};