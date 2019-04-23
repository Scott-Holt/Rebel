const hamIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById('close-icon');
const mobileNav = document.getElementById('mobile-nav');
const overlay = document.getElementById('overlay');


function openNav(e) {
    console.log('fuck');

    overlay.style.display = 'block';
    mobileNav.style = 'left:0px; display:block;';


}

function closeNav() {
    overlay.style.display = 'none';
    mobileNav.style = 'left:-250px;';
}



hamIcon.addEventListener('click', openNav);
closeIcon.addEventListener('click', closeNav);



//took away header-text FLEX..so put that back in
//commented out OVERLAY, MOBILE-NAV AND CLOSE ICON
//commented out PHONE NAV in HTML