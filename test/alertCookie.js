var alertmessage="'This website is a study project of a student from front-end design engineer class of Weiyu TibaMe Educational Institution. This platform is for learning purposes only. This platform is not for commercial use. If you have concerns about infringement, you can contact with TibaMe and the follow-up will be handled by a dedicated person.'"
    
// 取得COOKIE 
//
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