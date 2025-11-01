const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
});