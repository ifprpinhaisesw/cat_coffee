// Função para verificar se o usuário está autenticado
function isAuthenticated() {
    return localStorage.getItem('authToken') !== null;
}

// Função para redirecionar com base no estado de autenticação
function checkAuth() {
    if (isAuthenticated()) {
        if (window.location.pathname.endsWith('login.html')) {
            window.location.href = 'home2.html';
        }
    } else {
        window.location.href = 'login.html';
        
    }
}

// Função para logout
function logout() {
    localStorage.removeItem('authToken');
    window.location.href = 'login.html';
}

// Verificar estado de autenticação quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
});
