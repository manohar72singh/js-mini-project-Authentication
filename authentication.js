const database = new Array;

     // switch 

function loginClick()
{
    document.querySelector(".login-box").style.display="block";
    document.querySelector(".signup-box").style.display="none";
}
function signupClick()
{
    document.querySelector(".login-box").style.display="none";
    document.querySelector(".signup-box").style.display="block";
}
function logout()
{
    alert("logout Successful");
    window.localStorage.removeItem("email");
    location.assign("login.html");
}

// if email exits 
function exitEmail(email)
{
    return database.some(function(db){
        return db.demail===email;
    });
}

// login  function
function login(email, password)
{
    return database.some(function(db){
        return db.demail===email && db.pwd===password;
    });

}

// Validate Signup Page:


function signupValidate()
{
    let n = document.getElementById("name");
    let email = document.getElementById("signupemail");
    let password = document.getElementById("signupPassword");
    let confirmPassword = document.getElementById("confirmpassword");

    var letters = /^[a-zA-Z\s-, ]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(n.value.trim()=="")
    {
        alert("Enter Name First");
        n.style.borderBottom= "1px solid red";
        n.focus();
        return;
    }
    else if(n.value.length < 4)
    {
        alert("Name Must Be More Than 4 Characters");
        n.style.borderBottom= "1px solid red";
        n.focus();
        return;
    }
    else if(n.value.match(letters)) 
    {
        n.style.borderBottom= "1px solid green";
    }
    else
    {
        alert("Enter Vallid Name");
        n.style.borderBottom= "1px solid red";
        n.focus();
        return;
    }
    if(exitEmail(email.value))
    {    
        alert("Email already used");
        email.style.borderBottom= "1px solid red";
        email.focus();
        return;
    }

    else if(email.value.trim()=="")
    {
        alert("Enter Email First");
        email.style.borderBottom= "1px solid red";
        email.focus();
        return;
    }
    else if(email.value.match(mailformat))
    {
        email.style.borderBottom= "1px solid green";
    }
    else
    {
        alert("invalid email format");
        email.style.borderBottom= "1px solid red";
        email.focus();
        return ;

    }
    if(password.value.trim()==="")
    {
        alert("Enter Password First");
        password.style.borderBottom= "1px solid red";
        password.focus()
        return;
    }
    else if(password.value.match(passw))
    {
        password.style.borderBottom= "1px solid green";
    }
    else
    {
        alert("Enter vallid Password");
        password.style.borderBottom= "1px solid red";
        password.focus();
        return;
    }

    if(password.value===confirmPassword.value)
    {
        confirmPassword.style.borderBottom= "1px solid green";
    }
    else
    {
        alert("Password Must be Matched");
        confirmPassword.style.borderBottom= "1px solid red";
        confirmPassword.focus();
        return;

    }
    
   // SET  VALUE TO DATABASE ARRAY 

    const  obj = {
        name: n.value,
        demail: email.value,
        pwd:password.value,
    }
    database.push(obj);

    // SET INTPUT VALUE IS EMPTY
    
    n.value="";
    email.value="";
    password.value="";  
    confirmPassword.value="";
    console.log(database);
    alert("Sinup Successful ");
}




// LOGIN FORM VALIDATION:--

function loginValidate()
{
    var email = document.getElementById("loginemail");
    var password = document.getElementById("loginpassword");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(email.value.trim()=="")
    {
        alert("Enter Email First");
        email.style.borderBottom= "1px solid red";
        email.focus();
        return;
    }
    else if(email.value.match(mailformat))
    {
        email.style.borderBottom= "1px solid green";
    }
    else
    {
        alert("Invalid Email");
        email.style.borderBottom= "1px solid red";
        email.focus();
        return;
    }

    if(password.value.trim()=="")
    {
        alert("Enter Password First");
        password.style.borderBottom= "1px solid red";
        password.focus();
        return;
    }
    else if(password.value.match(passw))
    {
        password.style.borderBottom= "1px solid green";
    }
    else
    {
        alert("Invalid Password Formatted");
        password.style.borderBottom= "1px solid red";
        password.focus();
        return;
    }

    e=email.value;
    p=password.value;
    console.log(login(e,p));
    if(login(e,p))
    {

        alert("login Successful");
        window.localStorage.setItem("email",e);       
        location.assign("index.html");
    }
    else{
        alert("login failed");
        return;
    }
}





