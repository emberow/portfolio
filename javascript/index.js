$(document).ready(function(){
    $(".front_end_illustrate").hide();
    $(".back_end_illustrate").fadeIn();
    $(".back_end_button").attr("class", "back_end_button active");

    $(".front_end_button").click(function(){
        $(".back_end_illustrate").hide();
        $(".front_end_illustrate").fadeIn();
        $(".front_end_button").attr("class", "front_end_button active");
        $(".back_end_button").attr("class", "back_end_button");
    });
    $(".back_end_button").click(function(){
        $(".front_end_illustrate").hide();
        $(".back_end_illustrate").fadeIn();
        $(".back_end_button").attr("class", "back_end_button active");
        $(".front_end_button").attr("class", "front_end_button");
    });
});
