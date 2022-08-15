console.clear()

import './style.css';

// A constructor to create menu item objects easily
function createFood() {
    return {
        title: title,
        img: img,
        desc: desc,
    };
}

function switchHome() {
    document.getElementById('content-page').innerHTML = '';       // Clears the container div
    
    homeContent1 = document.createElement('div');
    homeContent1.className = 'content-class';
    homeContent1.innerHTML = 
    'The best authentic tacos in Australia.</br>'+
    'Come try our award winning tacos by Chef <b>Ana Sanchez</b> today.'

    homeContent2 = document.createElement('img');
    homeContent2.src = 'a.png'
    homeContent2.id = 'chef-img';

    homeContent3 = document.createElement('div');
    homeContent3.className = 'content-class';
    homeContent3.innerHTML = '<em>Why not both? - <b>Ana Sanchez</b></em>'

    // Append the child elements to the DOM
    document.getElementById('content-page').appendChild(homeContent1);
    document.getElementById('content-page').appendChild(homeContent2);
    document.getElementById('content-page').appendChild(homeContent3);

    return
}
const home = document.getElementById('home');
home.addEventListener('click', () => switchHome());


function switchMenu() {
    // Clear the DOM
    document.getElementById('content-page').innerHTML = 'MENU PAGE';
    
    return
}
const menu = document.getElementById('menu');
menu.addEventListener('click', () => switchMenu());


function switchContact() {
    // Clear the DOM
    document.getElementById('content-page').innerHTML = 'CONTACTS PAGE';

    return
}
const contact = document.getElementById('contact');
contact.addEventListener('click', () => switchContact());

switchHome();

console.log('------')