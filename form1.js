window.onload= function()
{
    document.getElementById("submit").onclick=validateFields;
}

function validateFields()
{
    var passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/;
    var isValidpassword=document.getElementById("password").value.match(passwordRegex);

    var urlRegex= /((http||https):\/\/\w{1,})$/;
    var isValidUrl=document.getElementById("url").value.match(urlRegex);

    if(!isValidUrl && !isValidpassword)
    {
        alert("Password and url values are invalid");
        return false;
    }
    else if(isValidUrl && !isValidpassword)
    {
        alert("Entered password is invalid");
        return true;
    }
    else if(isValidUrl && !isValidpassword)
    {
        alert("Entered password is invalid");
        return false;
    }
    if(!isValidUrl && isValidpassword)
    {
        alert("Invalid url");
        return false;
    }
    else
    {
        alert("Entered password and url are valid");
        return true;
    }   
       
}