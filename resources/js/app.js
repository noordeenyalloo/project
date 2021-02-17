const menuIcon = document.querySelector('.menu-icon');
const mainNav = document.querySelector('#nav');  

function toggleMenuIcon() {
  menuIcon.classList.toggle('active')
}
menuIcon.addEventListener('click', toggleMenuIcon)


// responsive navigation 
$(document).ready(function () {
    $(window).on('resize', function() {
        if($(window).width() < 808) {
            $('#i-con').addClass('dis-block');
            $('#i-con').removeClass('dis-none');
            $('#nav').addClass('dis-none');
        }else{
           
            // $('#nav').removeClass('dis-block');
            $('#i-con').addClass('dis-none');
            $('#i-con').removeClass('dis-block');
            $('#nav').removeClass('dis-none');
        }
    });

});


// display on click

menuIcon.addEventListener('click', e => {

    if(mainNav.classList.value.search('dis-none')){
        mainNav.classList.toggle('dis-block');
    }
    else if (mainNav.classList.value.search('dis-block')) {
        mainNav.classList.toggle('dis-none');
    }
});


