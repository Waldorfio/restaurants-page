console.clear()

import './style.css';

// A constructor to create menu item objects easily
function createFood(title,img,desc) {
    return {
        title: title,
        img: img,
        desc: desc,
        addToDom() {
            foodContainer = document.createElement('div');
            foodContainer.className = 'food-class';
            document.getElementById('content-page').appendChild(foodContainer);

            foodTitle = document.createElement('div');
            foodTitle.className = 'food-title';
            foodTitle.innerHTML = this.title;
            foodContainer.appendChild(foodTitle);

            foodImg = document.createElement('div');
            foodImg.className = 'food-img';
            foodImg.innerHTML = this.img;
            foodContainer.appendChild(foodImg);

            foodDesc = document.createElement('div');
            foodDesc.className = 'food-desc';
            foodDesc.innerHTML = this.desc;
            foodContainer.appendChild(foodDesc);
        },
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
    document.getElementById('content-page').innerHTML = '';
    
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
    document.getElementById('content-page').innerHTML = 'CONTACTS PAGE';

    return
}
const contact = document.getElementById('contact');
contact.addEventListener('click', () => switchContact());

switchHome();

console.log('------')