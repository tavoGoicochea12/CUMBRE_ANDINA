document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var data = {
        username: username,
        password: password
    };

    // Enviar solicitud al servidor
    fetch('register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error(data.error);
            // Aquí puedes manejar el error en la interfaz de usuario si es necesario
        } else {
            console.log(data.success);
            // Redirigir a login.html si el registro es exitoso
            window.location.href = 'login.html';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Manejar errores de conexión aquí si es necesario
    });
});
