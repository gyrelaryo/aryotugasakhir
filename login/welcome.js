document.addEventListener('DOMContentLoaded', () => {

    const isLogin = localStorage.getItem('isLogin');
    const username = localStorage.getItem('username');

    const loginMenu = document.querySelector(
        'a[href="login/index.html"]'
    );

    if (isLogin === 'true' && loginMenu) {

        loginMenu.innerHTML = `Halo, ${username}`;

        loginMenu.href = "#";

        // tombol logout
        loginMenu.addEventListener('click', () => {

            const confirmLogout =
                confirm('Yakin ingin logout?');

            if (confirmLogout) {

                localStorage.removeItem('isLogin');
                localStorage.removeItem('username');

                window.location.reload();
            }
        });
    }
});
