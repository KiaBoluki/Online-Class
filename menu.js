// window.alert('Salam Az javascript.')

const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');


menuIcon.addEventListener('click', (e) => {
    if ( mobileMenu.style.visibility === 'visible'){
        mobileMenu.style.visibility = "hidden"
    }
    else{

        mobileMenu.style.visibility = 'visible';
    }
    
})