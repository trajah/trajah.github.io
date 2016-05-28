// JavaScript Document
$(function() {  
    var pull        = $('#pull');  
        menu        = $('nav ul');  
        menuHeight  = menu.height();  
  
    $(menu).hide();

    $(pull).on('click', function(e) {  
        e.preventDefault();  
        menu.slideToggle();  
    });  
});  