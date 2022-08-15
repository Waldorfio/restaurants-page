console.clear()

import './style.css';

function switchHome() {
    container = document.getElementById('content-page');
    container.innerHTML = 'This is now the HOME page!';       // Clear the DOM
    return
}
home = document.getElementById('home');
home.addEventListener('click', () => switchHome());

function switchMenu() {
    container = document.getElementById('content-page');
    container.innerHTML = 'This is now the MENU page!';       // Clear the DOM
    return
}
menu = document.getElementById('menu');
menu.addEventListener('click', () => switchMenu());


function switchContact() {
    container = document.getElementById('content-page');
    container.innerHTML = 'This is now the CONTACTS page!';       // Clear the DOM
    return
}
contact = document.getElementById('contact');
contact.addEventListener('click', () => switchContact());


console.log('------')