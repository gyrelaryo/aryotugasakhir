document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    const savedUsername =
        localStorage.getItem("username");

    const savedPassword =
        localStorage.getItem("password");

    if(
        username === savedUsername &&
        password === savedPassword
    ){

        localStorage.setItem(
            "isLogin",
            "true"
        );

        alert("Login berhasil");

        window.location.href =
            "../index.html";

    }else{

        alert(
            "Username atau Password salah"
        );
    }

});
