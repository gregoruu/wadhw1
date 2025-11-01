const dropdown = document.getElementById('profileDropdown');
const profileButton = document.getElementById('profileButton');
const logoutButton = document.getElementById('logoutButton');
const emailText = document.getElementById('email');

profileButton.addEventListener('click', () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        emailText.textContent = localStorage.getItem('userEmail')
        dropdown.classList.toggle('open');
    } else {
        window.location.href = "login.html"
    }
});

logoutButton.addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.setItem('userEmail', '')
    dropdown.classList.toggle('open');
});