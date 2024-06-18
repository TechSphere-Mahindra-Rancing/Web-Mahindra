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
            alert('Sucesso! Seu login deu certo!');
            window.location.href = 'index.html'; // Redireciona para a página inicial
        } else {
            alert('Erro! Usuário ou senha incorretos. Tente novamente.');
        }
    });
}

// Slideshow logic
let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Muda o slide a cada 4 segundos
}

// Chama a função showSlides quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});
