$(document).ready(function(){
    var a,b,c;
    a = $(window).height(); //瀏覽器窗口高度
    var group = $(".group-pic");
    $(window).scroll(function(){
        b = $(this).scrollTop(); //頁面滾動的高度
        c = group.offset().top; //元素距離文檔（document）頂部的高度
        if(a+b>c){
        }
        else{
        }
    });
});
    
    