document.addEventListener('DOMContentLoaded', () => {

    const isLogin =
        localStorage.getItem('isLogin');

    const username =
        localStorage.getItem('username');

    const loginMenu = document.querySelector(
        'a[href="login/index.html"]'
    );

    if (isLogin === 'true' && loginMenu) {

        loginMenu.innerHTML =
            `Halo, ${username}`;

        loginMenu.href = "#";

        loginMenu.addEventListener(
            'click',
            () => {

                const logout =
                    confirm('Yakin logout?');

                if (logout) {

                    localStorage.removeItem('isLogin');

                    localStorage.removeItem('username');

                    window.location.reload();
                }
            }
        );
    }
});
