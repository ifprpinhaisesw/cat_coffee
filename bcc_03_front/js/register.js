
document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const endereco = document.getElementById('endereco').value;

    const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            role: role,
            endereco: endereco
        })
    });

    const data = await response.json();

    if (response.ok) {
        window.location.href = 'login.html';
        // Você pode redirecionar o usuário para a página de login ou outra página aqui
    } else {
        document.getElementById('errorMessage').textContent = data.message || 'Erro ao registrar. Tente novamente.';
    }
});
