document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === 'login.html') {
                window.location.href = targetId;
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error('Target element not found');
                }
            }
        });
    });

    // Toggle mobile menu (only if mobile menu button exists)
    const mobileMenuButton = document.querySelector('#mobile_btn');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const mobileMenu = document.querySelector('#mobile_menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('active');
            } else {
                console.error('Mobile menu not found');
            }
        });
    }

    // Login form submission (only if login form exists)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username === 'admin' && password === 'admin') {
                alert('Seu login deu certo!');
                window.location.href = 'index.html'; // Redireciona para a página inicial
            } else {
                alert('Usuário ou senha incorretos. Tente novamente.');
            }
        });
    }
});
