const menu = document.querySelector('#mobile-view');
const menulinks = document.querySelector('ul');
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});