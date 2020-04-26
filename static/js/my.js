// custom js functions
function show_field(value){
    if (value >= 11 && value <= 13) {
        $(".show-field").removeClass("hidden");
    } else if (value < 11 || value > 13){
        $(".show-field").addClass("hidden");
    }
};



$(document).ready(function() {
    // from stackoverflow
    $(".add-more").click(function(){ 
        if (counter < 12) {
            var html = $(".copy").html();

            $(".after-add-more").after(html);
            counter ++;
        };
    });

    $("body").on("click",".remove",function(){ 

        $(this).parents(".control-group").remove();
        counter --;

    });

    bsCustomFileInput.init()

    // custom jQuery script
    show_field($(".show-control").val());

    $(".show-control").on("input", function(){
        show_field($(this).val());
    });

    //add shadow to selected pill
    let pills = $(".nav-pills > .nav-link")

    pills.on("show.bs.tab", function(){
        $(this).addClass("shadow");
    });
    pills.on("hide.bs.tab", function(){
        $(this).removeClass("shadow");
    });

    //back to top button
    var btn = $("button#back-to-top")

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300 ) {
            //btn.removeClass("hidden");
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    });

    btn.click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});
