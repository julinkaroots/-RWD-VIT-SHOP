$(function(){
    //anchor
    $('a[href*="#"]:not([href="#featured"])').click(function(){ 
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                // Smooth scroll to link section
                $('html, body').animate({
                scrollTop: target.offset().top - 90
                }, 900);
                return false;
            }
        }
    });

    //at designated point, show or hide the number bar
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        // console.log(scrollTop);
        let showPoint = $('#step_1').offset().top / 2;
        // console.log(showPoint); 281.625
        let hidePoint = $('#step_10').offset().top + $('#step_10').outerHeight() - ($('#step_10').outerHeight() / 2);
        // console.log(hidePoint);

        if(scrollTop >= showPoint && scrollTop <= hidePoint){
            $('.number').addClass('show_numberBar');
        }else{
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