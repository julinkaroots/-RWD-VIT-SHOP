let alertmessage="'This website is a study project of a student from front-end design engineer class of Weiyu TibaMe Educational Institution. This platform is for learning purposes only. This platform is not for commercial use. If you have concerns about infringement, you can contact with TibaMe and the follow-up will be handled by a dedicated person.<br>Trang wed này là tác phẩm chuyền đề của học sinh “Lớp kĩ sư thiết kế trường Vĩ Dục TibaMe”, trang này chỉ dành cho mục đích học tập, triển lãm.Nếu có bất kì thắc mắc vi phạm quyền lợi, bạn có thể nhắn tin riêng cho “Lớp đào tạo kĩ sư thiết kế-TibaMe”, sau đó sẽ có chuyên gia hỗ trợ xử lý'"

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

// var show = true;

// if(get_cookie('alerted') == 'yes'){
//     show = false
//     console.log("show= false");
// }

// if(show){
//     var rus = confirm(alertmessage);
// }

// if(rus == true){
//     document.cookie="alerted=yes";
// }

if(get_cookie('alerted') != 'yes'){
    alert(alertmessage);
    document.cookie="alerted=yes";
}
