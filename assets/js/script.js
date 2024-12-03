let front_page = document.getElementById('front')
let signin_page = document.getElementById('sign-in')
let nav_section = document.getElementById('nav-section')
let profiles = document.getElementById('profiles')
let password = document.getElementById('password')

function showPassword() {
    if(password.type === "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
}

let correctUsername = "admin@gmail.com";
let correctPassword = "admin";

function signin() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if (correctUsername === email.value.trim() && correctPassword === password.value.trim()) {
        password.value = "";
        return true;
    } else {
        return false;
    }
}

function goToProfiles(event) {
    event.preventDefault();
    if (signin()) {
        nav_section.style.display = "none";
        signin_page.style.display = "none";
        front_page.style.display = "none";
        profiles.style.display = "flex";
    } else {
        alert("Invalid Email or Password!");
        return false;
    }
}

function goToSignIn() {
    front_page.style.display = "none"
    nav_section.style.display = "none"
    signin_page.style.display = "flex"
    profiles.style.display = "none"
}

function goToFrontpage() {
    nav_section.style.display = "block"
    signin_page.style.display = "none"
    front_page.style.display = "block"
    profiles.style.display = "none"
}
