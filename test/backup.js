window.addEventListener('load', function(){
    // search bar with jquery
    $('.search_section').focus(function(){
        $(this).attr('placeholder','');
    }).blur(function(){
        if($(this).val() == ''){
            $(this).attr('placeholder', 'find your love here!');
        }
    })
    //search bar with js(practice only)
    // let searchSection = document.getElementById('searchSection');

    // function focusFunction(){
    //     if(searchSection.placeholder != ''){
    //         searchSection.placeholder = '';
    //     }
    // }
    // function blurFunction(){
    //     searchSection.placeholder = 'find your love here!';
    // }
    // searchSection.addEventListener('focus', focusFunction, false);
    // searchSection.addEventListener('blur', blurFunction, false);

    //hover change img:home
    $('#home').mouseover(function(){
        $(this).attr('src', '../img/icon/home_move.gif');
    }).mouseout(function(){
        $(this).attr('src', '../img/icon/home.png');
    })
    //hover change img:login
    $('#login').mouseover(function(){
        $(this).attr('src', '../img/icon/login_move.gif');
    }).mouseout(function(){
        $(this).attr('src', '../img/icon/login.png');
    })
    //hover change img: fovorite list
    $('.fovoriteList').mouseover(function(){
        $(this).attr('src', '../img/icon/heart_hover.png');
    }).mouseout(function(){
        $(this).attr('src', '../img/icon/heart.png');
    })
    //hover change img: shopping cart
    $('.cart').mouseover(function(){
        $(this).attr('src','../img/icon/cart_hover.gif');
    }).mouseout(function(){
        $(this).attr('src','../img/icon/cart.png');
    })

    //hamburger list
    document.querySelector('#menu_btn').addEventListener('click', function(){
        document.querySelector('#menu_btn').classList.toggle('close');
        document.querySelector('.main_nav').classList.toggle('active');
    })

    //>992px remove all images and replace to another
    // let mainSliderImgs = $('.slider img');
    // let slide = $('.slide');

    // $(window).resize(function(){
    //     // console.log(mainSliderImgs); 8
    //     console.log(slide.length);
    //     if($(window).width()>992){
    //         mainSliderImgs.remove();
    //         slide.prepend('<img src="https://acecookvietnam.vn/wp-content/uploads/2020/11/Doraemon-_-KV-1440_550-1440x548.png"');

    //     }
        // if($(window).width()<992){
        //     mainSliderImgs.remove();
        // }
    // })
    
})