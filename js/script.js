$(document).ready(function () {
    $('.btnCollapse').on('click',function(){
        $('.menu').slideToggle();
    })
   $('nav ul li').on('click',function(){
       $(this).removeClass('active');
       $(this).addClass('active');
   })
});