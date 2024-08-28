document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const correctUsername = "admin";
    const correctPassword = "admin";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === correctUsername && password === correctPassword) {
        alert("Login berhasil");
        window.location.href = "index.html";
    } else {
        alert("Login gagal");
    }
});