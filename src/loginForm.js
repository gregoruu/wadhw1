const form = document.getElementById('login-form');

form.addEventListener('submit', () => {
    const email = document.getElementById('email').value.trim();
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
});