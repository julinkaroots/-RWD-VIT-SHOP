// owl carousel
    $(function() {
        var owl = $('.owl-carousel'),
            owlOptions = {
                loop:true,
                margin:10,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    768:{
                        items:1,
                        nav:true,
                        loop:true
                    }
                }
            };

        if ($(window).width() < 992 ) {
            var owlAct = owl.owlCarousel(owlOptions);
        } else {
            owl.addClass('off');
        };

        $(window).resize(function() {
            if ( $(window).width() < 992 ) {
                if ( $('.owl-carousel').hasClass('off') ) {
                    var owlAct = owl.owlCarousel(owlOptions);
                    owl.removeClass('off');
                }
            } else {
                if ( !$('.owl-carousel').hasClass('off') ) {
                    owl.addClass('off').trigger('destroy.owl.carousel');
                    owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
                }
            }
        });
    });

    /* .owl-carousel.off {
    display: flex;
    margin: 1px;
    margin-bottom: none;
} */