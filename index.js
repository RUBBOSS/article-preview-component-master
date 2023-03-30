$("button").click(function(event){
    event.stopPropagation();
    $(".shareMenu").fadeIn().css("display", "flex");
    $(".triangle").fadeIn().css("display", "flex");
});



$(document).click(function(event){
    if(!$(event.target).closest('button').length) {
        $(".shareMenu").stop().fadeOut(500, function(){
            $(this).css("display", "none");
        });
        $(".triangle").stop().fadeOut(500, function(){
            $(this).css("display", "none");
        });
    }
});