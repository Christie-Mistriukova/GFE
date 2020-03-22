$(document).ready(function(){
    //-----------------------------------------
    $('.header--burger').on('click', function(e){
        $('header .header--wrapper .header--left nav').slideToggle(100);
        e.preventDefault();
    });

});

