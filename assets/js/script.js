let front_page = document.getElementById('front')
let signin_page = document.getElementById('sign-in')
let nav_section = document.getElementById('nav-section')

function goToSignIn() {
    front_page.style.display = "none"
    nav_section.style.display = "none"
    signin_page.style.display = "flex"
}

function goToFrontpage() {
    nav_section.style.display = "block"
    signin_page.style.display = "none"
    front_page.style.display = "block"
}