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

///FORM VALIDATION//////////////////////////////////////////////////////

const submit = document.querySelector('.submit');

submit.addEventListener('click', checkInputs);

function checkInputs(e) {
    const inputField = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea')
    const notify = document.querySelectorAll('.validate');

    inputField.forEach(input => {
        if (input.value === '' || textArea.value === '') {
            // console.log(input);
            notify.forEach(notification => notification.style.display = 'inline');
            e.preventDefault();
        } else {
            console.log('yay');
        }
    });


}