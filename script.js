const iconMenu = document.querySelector('.menu_icon');


const menuBody = document.querySelector('.header_right_row');
if(iconMenu){
    iconMenu.addEventListener('click', function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
window.addEventListener('orientationchange', function(){
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
});