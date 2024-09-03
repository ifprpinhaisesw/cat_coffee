document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    console.log('Form submission triggered');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Password:', password);

    try {

        const response = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const result = await response.json();

        console.log('API response:', result);

        if (response.ok) {
            localStorage.setItem('authToken', result.access_token);
            window.location.href = 'home.html';
        } else {
            document.getElementById('message').innerText = 'Login failed: ' + result.message;
            document.getElementById('message').style.color = 'red';
        }
    } catch (error) {
        console.error('Error during API call:', error);
        document.getElementById('message').innerText = 'Login failed: ' + error.message;
        document.getElementById('message').style.color = 'red';
    }
});
