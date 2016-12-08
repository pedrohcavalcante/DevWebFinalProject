$(document).ready(function() {

    // Handles scrolling animation
    $(".scroll").click(function(event){
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - (3 * 16) // 3 * 16 = 3em
        }, 500);
    })
});