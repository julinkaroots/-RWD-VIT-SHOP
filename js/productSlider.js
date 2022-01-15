window.addEventListener('load', function(){
    // slider of info
    $('#productSlider').find('.owl-prev').attr('id', 'prevBtn');
    $('#productSlider').find('.owl-next').attr('id', 'nextBtn');
    
    let curIndex = 0;
    // $('.change:first-child').addClass('active');
    $('.change:first-child').css('display', 'block');
    let productChoiceWidth = $('#productChoice').width();
    // let w = $(window).width();
    // $(window).resize(function(){
    //     let w = $(window).width();
    //     console.log(w);
    // })

    $('#nextBtn').click(function(){
        curIndex++;
        $('.change:first-child').css('display', 'none');
        $('.change:nth-child(2)').css('display', 'block');
        // $('.change').animate({
        //     left: productChoiceWidth *2 *0.6 * -1 * curIndex,
        // });
        // $('.change').animate({
        //     left: changeWidth * -1,   
        // });
    });

    // noodle fly
    // $('#cartBtn').click(function(){
    //     let cartTarget = $('#cart_target'); 
    //     let dragImg = $('.product_slide img');
    //     console.log(dragImg) 15
    //     let dragImg = $('#test');
    //     dragImg.clone().appendTo('body').offset({
    //         top: dragImg.offset().top,
    //         left: dragImg.offset().left
    //     }).css({
    //         'opacity': '0.5',
    //         'position': 'absolute',
    //         'height': '150px',
    //         'width': '150px',
    //         'z-index': '100'
    //     }).animate({
    //         top: cartTarget.offset().top + 10,
    //         left: cartTarget.offset().left + 10,
    //         width: 75,
    //         height: 75
    //     }, 1000, 'easeInOutExpo');
    // })
})
