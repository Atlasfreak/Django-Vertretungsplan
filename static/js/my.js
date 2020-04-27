// custom js functions
function show_field(value){
    if (value >= 11 && value <= 13) {
        $(".show-field").removeClass("hidden");
    } else if (value < 11 || value > 13){
        $(".show-field").addClass("hidden");
    }
};

function back_to_top(){
    let btn = $("button#back-to-top")

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300 ) {
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

}

function cookie_banner(){
    let keyvalue = document.cookie.match("(^|;) ?cookie_consent=([^;]*)(;|$)");
    let cookie_consentCookie = keyvalue ? decodeURIComponent(keyvalue[2]) : null;

    if (cookie_consentCookie) return;
    else {
        $(".cookie-consent").removeClass("hidden")
    }

    $(".cookie-consent-accept").click( function(){
        let max_age = (365*24*60*60);
        cookie_message = "accepted"
        document.cookie = `cookie_consent=${encodeURIComponent(cookie_message)}; max-age=${max_age};`
        location.reload();
    });

}

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
    back_to_top();

    //cookie banner
    cookie_banner();
});
