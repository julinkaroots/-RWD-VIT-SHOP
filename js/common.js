//declare and get the element at the same time, it will be used later as "target"
const head = document.getElementsByTagName('head')[0];

//reset
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/reset.css';
head.appendChild(link);

//grid
link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/grid.css';
head.appendChild(link);

//common style of header, footer, color, font-size...
link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/common.css';
head.appendChild(link);

//style of homepage
link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/index.css';
head.appendChild(link);

//style of instant noodle
link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/instant.css';
head.appendChild(link);

//fonts
link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Changa:wght@200;500;700&display=swap';
head.appendChild(link);

//font-awesome
link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
link.crossorigin = 'anonymous';
link.referrerpolicy = 'no-referrer';
head.appendChild(link);

window.addEventListener('load', function(){
    var alertmessage="'This website is a study project of a student from front-end design engineer class of Weiyu TibaMe Educational Institution. This platform is for learning purposes only. This platform is not for commercial use. If you have concerns about infringement, you can contact with TibaMe and the follow-up will be handled by a dedicated person.<br>Trang wed này là tác phẩm chuyền đề của học sinh “Lớp kĩ sư thiết kế trường Vĩ Dục TibaMe”, trang này chỉ dành cho mục đích học tập, triển lãm.Nếu có bất kì thắc mắc vi phạm quyền lợi, bạn có thể nhắn tin riêng cho “Lớp đào tạo kĩ sư thiết kế-TibaMe”, sau đó sẽ có chuyên gia hỗ trợ xử lý'"
    
    function get_cookie(Name) {
        var search = Name + "=";
        var returnvalue = "";
        if (document.cookie.length > 0) {
            offset = document.cookie.indexOf(search)
            if (offset != -1) { // if cookie exists
                offset += search.length;
                end = document.cookie.indexOf(";", offset);
                if (end == -1)
                    end = document.cookie.length;
                returnvalue=document.cookie.substring(offset, end);
            }
        }
        return returnvalue;
    }

    //<------*search bar with jquery------>
    $('.search_section').focus(function(){
        $(this).attr('placeholder','');
    }).blur(function(){
        if($(this).val() == ''){
            $(this).attr('placeholder', 'find your love here!');
        }
    })
    // <-----search bar with js(practice only)*------>
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
    //<-----search bar with js*------>

    //<-----*hover change img------>
    // home
    $('#home').mouseover(function(){
        $(this).attr('src', 'img/icon/home_move.gif');
    }).mouseout(function(){
        $(this).attr('src', 'img/icon/home.png');
    })
    //login
    $('#login').mouseover(function(){
        $(this).attr('src', 'img/icon/login_move.gif');
    }).mouseout(function(){
        $(this).attr('src', 'img/icon/login.png');
    })
    //favorite list
    $('.favoriteList').mouseover(function(){
        $(this).attr('src', 'img/icon/heart_hover.png');
    }).mouseout(function(){
        $(this).attr('src', 'img/icon/heart.png');
    })
    //shopping cart
    $('.cart').mouseover(function(){
        $(this).attr('src','img/icon/cart_hover.gif');
    }).mouseout(function(){
        $(this).attr('src','img/icon/cart.png');
    })
    //<------hover change img*------>

    //<------*hamburger list------>
    $('#menu_btn').click(function(){
        $(this).toggleClass('rotate');
        $('#mainNav').toggleClass('active');
    })
    //<------hamburger list*------>

    //<------*breadcrumb------>
    //注意這裡待處理
    // $('.breadcrumb').find('li').each(function(){
    //     $(this).click(function(){
    //         $('.breadcrumb').find('li').removeClass('.direction');
    //         $(this).addClass('.direction')
    //     })
    // })
    //<------breadcrumb*------>

})
