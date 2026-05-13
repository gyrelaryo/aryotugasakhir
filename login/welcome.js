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

                const confirmLogout =
                    confirm('Yakin ingin logout?');

                if (confirmLogout) {

                    localStorage.removeItem('isLogin');
                    localStorage.removeItem('username');
                    localStorage.removeItem('fullname');

                    window.location.reload();
                }
            }
        );
    }
});
