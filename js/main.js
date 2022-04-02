// remove fade once page is loaded
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

// validate form
function validateForm() {
    let name = document.forms["contact"]["name"].value;
    if (name == "") {
        alert("Please provide a name before submitting.\nThank you!");
        return false;
    }
}