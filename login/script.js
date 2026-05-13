// Neumorphism Login Form

class NeumorphismLoginForm extends FormUtils.LoginFormBase {

    constructor() {

        super({

            hideOnSuccess: [
                '.social-login',
                '.signup-link'
            ],

            cardSelector: '.login-card',

            validators: {

                username: (value) => {

                    if (!value) {

                        return {
                            isValid: false,
                            message: 'Username wajib diisi'
                        };
                    }

                    return {
                        isValid: true
                    };
                },

                password: (value) => {

                    if (!value) {

                        return {
                            isValid: false,
                            message: 'Password wajib diisi'
                        };
                    }

                    return {
                        isValid: true
                    };
                }
            }
        });

        // submit form
        this.form = document.getElementById('loginForm');

        this.form.addEventListener(
            'submit',
            this.handleSubmit.bind(this)
        );
    }

    async handleSubmit(e) {

        e.preventDefault();

        const username =
            document.getElementById('username').value;

        const password =
            document.getElementById('password').value;

        try {

            const response = await fetch(
                '../php/login.php',
                {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({
                        username,
                        password
                    })
                }
            );

            const result = await response.json();

if (result.success) {

    alert('Login berhasil');

    localStorage.setItem('isLogin', 'true');
    localStorage.setItem('username', username);

    setTimeout(() => {

        window.location.replace('../index.html');

    }, 500);

} else {

    alert(result.message);
}
            
                // simpan status login
                localStorage.setItem(
                    'isLogin',
                    'true'
                );

                localStorage.setItem(
                    'username',
                    username
                );

                // redirect ke web utama
                window.location.href =
                    '../index.html';

            } else {

                alert(result.message);
            }

        } catch (error) {

            console.error(error);

            alert('Server error');
        }
    }

    decorate() {

        // Hover effect
        document.querySelectorAll(
            '.neu-icon, .neu-checkbox, .neu-social'
        ).forEach(el => {

            el.addEventListener(
                'mouseenter',
                () => {
                    el.style.transform = 'scale(1.05)';
                }
            );

            el.addEventListener(
                'mouseleave',
                () => {
                    el.style.transform = 'scale(1)';
                }
            );
        });

        // Ambient shadow
        const card =
            document.querySelector('.login-card');

        if (card) {

            document.addEventListener(
                'mousemove',
                (e) => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        (e.clientX - rect.left
                        - rect.width / 2)
                        / (rect.width / 2);

                    const y =
                        (e.clientY - rect.top
                        - rect.height / 2)
                        / (rect.height / 2);

                    card.style.boxShadow =
                        `${x * 30}px ${y * 30}px 60px #bec3cf,
                        ${-x * 30}px ${-y * 30}px 60px #ffffff`;
                }
            );
        }

        // Toggle password
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

    onInputFocus(e) {

        super.onInputFocus(e);

        const group =
            e.target.closest('.neu-input');

        if (group) {

            group.style.transform =
                'scale(0.98)';
        }
    }

    onInputBlur(e) {

        super.onInputBlur(e);

        const group =
            e.target.closest('.neu-input');

        if (group) {

            group.style.transform =
                'scale(1)';
        }
    }
}

document.addEventListener(
    'DOMContentLoaded',
    () => new NeumorphismLoginForm()
);
