$(function(){
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
})