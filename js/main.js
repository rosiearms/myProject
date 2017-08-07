$(document).ready(function(){
    $('.link').fadeto(0.5);
    $('.link').mouseenter(function() {
        $('.link').fadeTo('fast', 1);
    });
    $('.link').mouseleave(function(){
        $('.link').fadeTo('fast', 0.5);
        });
    });