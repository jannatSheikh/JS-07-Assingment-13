// Signup Function

function signup() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    let userObj = {
        name: name,
        email: email,
        password: password
    };


    localStorage.setItem("user", JSON.stringify(userObj));

    alert("Signup Successful");

    window.location.href = "login.html";
}


// Login Function

function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;


    let userData = JSON.parse(localStorage.getItem("user"));


    if (
        userData.email === email &&
        userData.password === password
    ) {

        localStorage.setItem(
            "currentUser",
            JSON.stringify(userData)
        );

        alert("Login Successful");

        window.location.href = "dashboard.html";

    } 
    else {

        alert("Invalid Email or Password");

    }

}


// Show User Data

function showUser() {

    let currentUser =
        JSON.parse(localStorage.getItem("currentUser"));


    if (!currentUser) {

        window.location.href = "login.html";

    }
    else {

        document.getElementById("userData").innerHTML =
            `
            Name: ${currentUser.name}<br>
            Email: ${currentUser.email}
            `;

    }

}


// Logout Function

function logout() {

    localStorage.removeItem("currentUser");

    alert("Logout Successful");

    window.location.href = "login.html";

}