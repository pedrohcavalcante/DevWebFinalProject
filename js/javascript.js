$(document).ready(function() {
    $(".scrollLike").click(function(event){
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });
});