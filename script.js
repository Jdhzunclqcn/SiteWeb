// Sélection des éléments
const loginButton = document.querySelector('.login-button');
const loginBox = document.querySelector('.box-login');
const formBox = document.querySelector('.form-box');
const inMenu = document.querySelector('#inMenu');

// Affiche la boîte de connexion lorsqu'on clique sur le bouton "Connexion"
loginButton.addEventListener('click', () => {
    loginBox.style.display = 'block'; // Afficher la boîte de connexion
    inMenu.style.display = 'none'; // Masquer la section in-menu
});

// Ferme la boîte de connexion lorsqu'on clique en dehors
document.addEventListener('click', (event) => {
    const isClickInside = formBox.contains(event.target) || loginButton.contains(event.target);
    if (!isClickInside) {
        loginBox.style.display = 'none'; // Masquer la boîte
        inMenu.style.display = 'block'; // Réafficher la section in-menu
    }
});

// Empêche la boîte de disparaître lorsque l'utilisateur interagit avec le formulaire
formBox.addEventListener('click', (event) => {
    event.stopPropagation();
});
