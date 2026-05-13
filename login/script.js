// Neumorphism Register Form

class NeumorphismRegisterForm extends FormUtils.LoginFormBase {

    constructor() {
        super({

            hideOnSuccess: ['.social-login', '.signup-link'],

            cardSelector: '.login-card',

            validators: {

                fullname: (value) => {
                    if (!value) {
                        return {
                            isValid: false,
                            message: 'Nama lengkap wajib diisi'
                        };
                    }

                    return { isValid: true };
                },

                username: (value) => {
                    if (!value) {
                        return {
                            isValid: false,
                            message: 'Username wajib diisi'
                        };
                    }

                    if (value.length < 4) {
                        return {
                            isValid: false,
                            message: 'Username minimal 4 karakter'
                        };
                    }

                    return { isValid: true };
                },

                password: (value) => {

                    if (!value) {
                        return {
                            isValid: false,
                            message: 'Password wajib diisi'
                        };
                    }

                    if (value.length < 6) {
                        return {
                            isValid: false,
                            message: 'Password minimal 6 karakter'
                        };
                    }

                    return { isValid: true };
                },

                confirmPassword: (value) => {

                    const password =
                        document.getElementById('password').value;

                    if (!value) {
                        return {
                            isValid: false,
                            message: 'Konfirmasi password wajib diisi'
                        };
                    }

                    if (value !== password) {
                        return {
                            isValid: false,
                            message: 'Password tidak sama'
                        };
                    }

                    return { isValid: true };
                }
            }
        });
    }

    decorate() {

        // Hover scale effect
        document.querySelectorAll(
            '.neu-icon, .neu-checkbox, .neu-social'
        ).forEach(el => {

            el.addEventListener('mouseenter', () => {
                el.style.transform = 'scale(1.05)';
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'scale(1)';
            });
        });

        // Ambient light shadow
        const card = document.querySelector('.login-card');

        if (card) {

            document.addEventListener('mousemove', (e) => {

                const rect = card.getBoundingClientRect();

                const x =
                    (e.clientX - rect.left - rect.width / 2)
                    / (rect.width / 2);

                const y =
                    (e.clientY - rect.top - rect.height / 2)
                    / (rect.height / 2);

                card.style.boxShadow =
                    `${x * 30}px ${y * 30}px 60px #bec3cf,
                    ${-x * 30}px ${-y * 30}px 60px #ffffff`;
            });
        }

        // Toggle password visibility
        document.querySelectorAll('.password-toggle')
            .forEach(button => {

                button.addEventListener('click', () => {

                    const input =
                        button.closest('.password-group')
                        .querySelector('input');

                    if (input.type === 'password') {
                        input.type = 'text';
                    } else {
                        input.type = 'password';
                    }
                });
            });
    }

    onInputFocus(e) {

        super.onInputFocus(e);

        const group = e.target.closest('.neu-input');

        if (group) {
            group.style.transform = 'scale(0.98)';
        }
    }

    onInputBlur(e) {

        super.onInputBlur(e);

        const group = e.target.closest('.neu-input');

        if (group) {
            group.style.transform = 'scale(1)';
        }
    }
}

document.addEventListener(
    'DOMContentLoaded',
    () => new NeumorphismRegisterForm()
);
