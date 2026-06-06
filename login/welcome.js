document.addEventListener(
"DOMContentLoaded",
() => {

    const authMenu =
        document.getElementById("authMenu");

    const isLogin =
        localStorage.getItem("isLogin");

    const username =
        localStorage.getItem("username");

    if(
        isLogin === "true"
        &&
        authMenu
    ){

        authMenu.innerHTML = `
            <a
                class="menu"
                href="#"
                id="logoutBtn"
            >
                Logout (${username})
            </a>
        `;

        document
        .getElementById("logoutBtn")
        .addEventListener(
            "click",
            function(e){

                e.preventDefault();

                localStorage.removeItem(
                    "isLogin"
                );

                alert(
                    "Logout berhasil"
                );

                location.reload();

            }
        );
    }
});
