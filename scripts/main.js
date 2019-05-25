////////MOBILE NAV BAR////////////////////////

const hamIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById('close-icon');
const mobileNav = document.getElementById('mobile-nav');
const overlay = document.getElementById('overlay');
const listItem = document.querySelectorAll('.list-item');


function openNav(e) {
    overlay.style.display = 'block';
    mobileNav.style = 'left:0px; display:block;';
}

function closeNav() {
    overlay.style.display = 'none';
    mobileNav.style = 'left:-800px;';
}


hamIcon.addEventListener('click', openNav);
closeIcon.addEventListener('click', closeNav);
listItem.forEach(item => item.addEventListener('click', closeNav));

//////////CAROUSEL//////////////////////

// let counter = 0;
const carousel = document.getElementById('carousel');
const imgText = document.getElementById('image-text');
// const img = document.getElementById('carousel-img');
// const button = document.getElementById('slide-button');
// const buttonDiv = document.getElementById('slide-buttons');
// const button = buttonDiv.querySelectorAll('.slide-button');
const anchorButton = document.getElementById('button2');
const button1 = anchorButton.previousElementSibling;
const button3 = anchorButton.nextElementSibling;
// const buttons = [button1, button2, button3];
const allImgs = ['../images/Services/IMG-Crossdock.jpg', '../images/Services/IMG-FinalMile.jpg', '../images/Services/IMG-Retail.jpg'];

// function changeImg() {
//     ++counter;

//     if (counter >= allImgs.length) {
//         counter = 0;
//         img.src = allImgs[counter];

//     } else {
//         img.src = allImgs[counter];
//         console.log(img.src);
//     }

// }


function changeImg(e) {
    if (e.target === anchorButton.previousElementSibling) {
        carousel.style.backgroundImage = `url(${allImgs[0]})`;

    } else if (e.target === anchorButton.nextElementSibling) {
        carousel.style.backgroundImage = `url(${allImgs[2]})`;
    } else {
        carousel.style.backgroundImage = `url(${allImgs[1]})`;
    }

}

// function changeImg1() {
//     carousel.style.backgroundImage = `url(${allImgs[0]})`;

//     setTimeout(function () {
//         imgText.style.right = '0px';
//     }, 500);
// }
// function changeImg2() {
//     carousel.style.backgroundImage = `url(${allImgs[1]})`;

//     setTimeout(function () {
//         imgText.style.right = '0px';
//     }, 500);
// }
// function changeImg3() {
//     carousel.style.backgroundImage = `url(${allImgs[2]})`;

//     setTimeout(function () {
//         imgText.style.right = '0px';
//     }, 500);
// }

// function loadFirstImg() {
//     img.src = allImgs[counter];
// }


carousel.addEventListener('click', changeImg);


/////////NOTES//////////////

// SET UP A  MOBILE SLIDE SHOW SO FAR ITS ONLY SET UP FOR COMPUTERS

// MAKE AN ACTIVE BUTTON JUST LIKE THE NAV ITEMS

//ADD ANIMATION TO SLIDES

//FIX THE POSITIONING OF THE THREE DOTS