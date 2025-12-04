// Simple password strength checker
function checkPassword() {
    const pwd = document.getElementById("passwordInput").value;
    const msg = document.getElementById("passwordMessage");

    if (pwd.length === 0) {
        msg.textContent = "Please enter a password.";
        msg.style.color = "yellow";
    } else if (pwd.length < 6) {
        msg.textContent = "Weak password";
        msg.style.color = "red";
    } else if (pwd.length < 10) {
        msg.textContent = "Medium password";
        msg.style.color = "orange";
    } else {
        msg.textContent = "Strong password";
        msg.style.color = "lightgreen";
    }
}
