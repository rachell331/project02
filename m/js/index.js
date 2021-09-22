//index.js

$(function () {
    //1. menu
    $('.menu-bar').click(function () {
        $('.depth01').stop().slideToggle();

        $('.depth01 li').click(function () {
            $(this)
                .find('.depth02').slideToggle().next().slideToggle();
        });
    });
    ////////////////////////////////////////
    //2.slider

    var fncSlide = function (c) {

        $('.slideList').stop().animate({
            /* left: '-100%' */
        }, 700, function () {
            $('.slideImg').first().appendTo('.slideList').css('left', 0);
        }); //animate
    }



    ////////////슬라이드 자동실행함수/////////

    var intSlide;
    var autoSlide = function () {
        intSlide = setInterval(function () {
            fncSlide(0);
        }, 3000);
    };


    autoSlide();




    //이동버튼 클릭시 이동하기
    var moveBtn = 0; //0-클릭 전, 1-클릭후

    $('.abtn').click(function () {

        //광클금지
        if (moveBtn === 1) return false;
        moveBtn = 1;

        var idx = $(this).index('.abtn');


        if (idx) {
            fncSlide(1);

            moveBtn = 0;

        } else {
            $('.slideImg').last().prependTo('.slideList').css({
                    /* left: '-100%' */
                })
                //left값을 0으로 애니메이션
                .stop().animate({
                    left: 0
                }, 300, function () {
                    moveBtn = 0;
                });


        } //if else


    }); //.abtn click() 

    //3. 공연전시 안내 버튼
    $('.m-next').click(function(){
        
    });

}); //jQuery