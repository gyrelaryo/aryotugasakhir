document
.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const fullname =
        document.getElementById("fullname").value;

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){

        alert("Password tidak cocok");
        return;
    }

    localStorage.setItem(
        "fullname",
        fullname
    );

    localStorage.setItem(
        "username",
        username
    );

    localStorage.setItem(
        "password",
        password
    );

    alert("Registrasi berhasil");

    window.location.href =
        "index.html";
});
