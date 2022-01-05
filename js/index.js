window.addEventListener("load", function(){
    //hamburger list
    document.querySelector("#menu_btn").addEventListener("click", function(){
        document.querySelector("#menu_btn").classList.toggle("close");
        document.querySelector(".main_nav").classList.toggle("active");
    })

    //section of product slider
    const productContainer = document.querySelector(".product_slider");
    const slideImgs = document.querySelectorAll(".product_slide");
    const  navigation_dots= document.getElementById("navigationDots");

    let imgsNum = slideImgs.length;
    

    //create dots
    //get the element(container) already

    



})