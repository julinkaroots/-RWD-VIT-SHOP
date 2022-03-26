$(function(){
    //anchor
    $('a').on('click', function(){
        let link = $(this).attr('href');
        // console.log(link);
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 900);
    })

    //at designated point, show or hide the number bar
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        // console.log(scrollTop);
        let showPoint = $('#step_1').offset().top / 2;
        // console.log(showPoint); 281.625
        let hidePoint = $('#step_10').offset().top + $('#step_10').outerHeight() - ($('#step_10').outerHeight() / 2);
        // console.log(hidePoint);

        if(scrollTop >= showPoint && scrollTop <= hidePoint){ //show
            $('.number').addClass('show_numberBar');
        }else{ //hide
            $('.number').removeClass('show_numberBar');
        }
    });

    //hide the button at the beginning
    $('.to_top').css('display','none');
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        if(scrollTop == 0){
            $('.to_top').css('display','none');
        }else{
            $('.to_top').css('display','block');
        }
    });

    //back to top
    $('.to_top').click(function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

})