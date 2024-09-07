document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar recargar la página

    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    if (usuario === 'admin' && password === '1234') {
        Swal.fire({
            title: 'Ingreso exitoso',
            text: `Bienvenido ${usuario}!`,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            document.getElementById('login-container').style.display = 'none'; // Oculta el formulario después del login
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Usuario o contraseña incorrectos',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
        });
    }
});