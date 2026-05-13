/ Neumorphism Login Form
class NeumorphismRegisterForm {

    constructor() {

        this.form =
            document.getElementById('registerForm');

        this.form.addEventListener(
            'submit',
            this.handleSubmit.bind(this)
        );

        this.initPasswordToggle();
    }

    initPasswordToggle() {

        document.querySelectorAll(
            '.password-toggle'
        ).forEach(button => {

            button.addEventListener(
                'click',
                () => {

                    const input =
                        button.closest('.password-group')
                        .querySelector('input');

                    input.type =
                        input.type === 'password'
                        ? 'text'
                        : 'password';
                }
            );
        });
    }

    async handleSubmit(e) {

        e.preventDefault();

        const fullname =
            document.getElementById('fullname').value;

        const username =
            document.getElementById('username').value;

        const password =
            document.getElementById('password').value;

        const confirmPassword =
            document.getElementById('confirmPassword').value;

        const terms =
            document.getElementById('terms').checked;

        // validasi
        if (!fullname || !username || !password) {

            alert('Semua field wajib diisi');
            return;
        }

        if (password !== confirmPassword) {

            alert('Konfirmasi password tidak cocok');
            return;
        }

        if (!terms) {

            alert('Setujui syarat & ketentuan');
            return;
        }

        try {

            // simulasi register
            // simpan ke localStorage

            localStorage.setItem(
                'isLogin',
                'true'
            );

            localStorage.setItem(
                'fullname',
                fullname
            );

            localStorage.setItem(
                'username',
                username
            );

            alert('Register berhasil');

            // redirect ke landing page
            window.location.href =
                '../index.html';

        } catch (error) {

            console.error(error);

            alert('Terjadi kesalahan');
        }
    }
}

document.addEventListener(
    'DOMContentLoaded',
    () => new NeumorphismRegisterForm()
);
