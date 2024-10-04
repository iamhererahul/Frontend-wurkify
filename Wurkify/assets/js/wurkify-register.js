document.addEventListener('DOMContentLoaded', function() {
    const signupBtn = document.getElementById('signupBtn');
    const loginBtn = document.getElementById('loginBtn');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    signupBtn.addEventListener('click', function() {
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    loginBtn.addEventListener('click', function() {
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your signup logic here
        window.location.href = '../index.html';
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your login logic here
        window.location.href = '../index.html';
    });
});
