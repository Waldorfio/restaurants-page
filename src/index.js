console.clear()


import './style.css';
import Icon from './ana.jpg';

// A constructor to create menu item objects easily
function createFood(title,img,desc) {
    return {
        title: title,
        img: img,
        desc: desc,
        addToDom() {
            const foodContainer = document.createElement('div');
            foodContainer.className = 'food-class';
            menuContainer.appendChild(foodContainer);

            const foodTitle = document.createElement('div');
            foodTitle.className = 'food-title';
            foodTitle.innerHTML = this.title;
            foodContainer.appendChild(foodTitle);

            const foodImg = document.createElement('div');
            foodImg.className = 'food-img';
            foodImg.innerHTML = this.img;
            foodContainer.appendChild(foodImg);

            const foodDesc = document.createElement('div');
            foodDesc.className = 'food-desc';
            foodDesc.innerHTML = this.desc;
            foodContainer.appendChild(foodDesc);
        },
    };
}

function switchHome() {
    // Clear the DOM
    const contentDiv = document.getElementById('content-page');
    contentDiv.innerHTML = '';
    // Add a container div to hold the home grid
    const homeContainer = document.createElement('div');
    homeContainer.id = 'container-home';
    contentDiv.appendChild(homeContainer);
    const homeContent1 = document.createElement('div');
    homeContent1.className = 'content-class';
    homeContent1.innerHTML = 
    'The best authentic tacos in Australia.</br>'+
    'Come try our award winning tacos by Chef <b>Ana Sanchez</b> today.'

    const homeContent2 = document.createElement('img');
    homeContent2.src = Icon;
    homeContent2.id = 'chef-img';

    const homeContent3 = document.createElement('div');
    homeContent3.className = 'content-class';
    homeContent3.innerHTML = '<em>Why not both? - <b>Ana Sanchez</b></em>'
    // Append the child elements to the DOM
    homeContainer.appendChild(homeContent1);
    homeContainer.appendChild(homeContent2);
    homeContainer.appendChild(homeContent3);

    return
}
const home = document.getElementById('home');
home.addEventListener('click', () => switchHome());


function switchMenu() {
    // Clear the DOM
    const contentDiv = document.getElementById('content-page');
    contentDiv.innerHTML = '';
    // Add a container div to hold the menu grid
    const menuContainer = document.createElement('div');
    menuContainer.id = 'container-menu';
    contentDiv.appendChild(menuContainer);
    
    let food1 = createFood('item1','img1','desc1');
    food1.addToDom();

    let food2 = createFood('item2','img2','desc2');
    food2.addToDom();

    let food3 = createFood('item3','img3','desc3');
    food3.addToDom();

    return
}
const menu = document.getElementById('menu');
menu.addEventListener('click', () => switchMenu());


function switchContact() {
    // Clear the DOM
    const contentDiv = document.getElementById('content-page');
    contentDiv.innerHTML = '';
    // Add a container div to hold the home grid
    const contactContainer = document.createElement('div');
    contactContainer.id = 'container-contacts';
    contentDiv.appendChild(contactContainer);
    
    const contactContent1 = document.createElement('div');
    contactContent1.className = 'content-class2';
    contactContent1.innerHTML = 
    '&#9742;&#65039 123 456 789</br>'+
    '&#127968 12 Diddy Street, Donkey Town, DC'

    const contactContent2 = document.createElement('img');
    contactContent2.src = 'a2.png';
    contactContent2.id = 'map-img';

    // Append the child elements to the DOM
    contactContainer.appendChild(contactContent1);
    contactContainer.appendChild(contactContent2);

    return
}
const contact = document.getElementById('contact');
contact.addEventListener('click', () => switchContact());


switchHome();

console.log('------')