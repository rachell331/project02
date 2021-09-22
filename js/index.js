//index.js

$(function(){

    //nav
    $('.depth01>li').mouseenter(function(){
        $('ul.depth02').slideUp();

        $(this).children('ul.depth02').slideDown();
    });

    $('.depth01>li').mouseleave(function(){
        $('ul.depth02').stop().slideUp();
    });


    //mainslide
$('#slider ul').css('width', $('#slider ul li').width() * $('#slider ul li').size());

$('#slider ul li:last').prependTo('#slider ul');
var chW = $('#slider ul li').width();
$("#slider ul").css('margin-left',-chW);


//버튼
$('.btnR').click(function(){
    $('#slider ul').animate({
        marginLeft: '-=' + $('#slider ul li').width()
    },1000,function(){
        $('#slider ul li:first').appendTo('#slider ul');
        $('#slider ul').css('margin-left',-chW);
    });
});

$('.btnL').click(function(){
    $('#slider ul').animate({
        marginLeft: '+=' + chW
    },1000, function(){
        $('#slider ul li:last').prependTo('#slider ul');
        $('#slider ul').css('margin-left',-chW);
    });
});



});//jQuery