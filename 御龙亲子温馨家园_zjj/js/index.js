/**
 * Created by Administrator on 2017/5/7 0007.
 */
window.onload= function () {
    var game=document.getElementById("game");
    var as=game.children;
    game.onmousemove=function(){
        for (var i = 1; i < as.length; i++) {
            as[i].style.display="block";
        }
        game.style.height="150px";
    };
    game.onmouseout=function(){
        for (var i = 1; i < as.length; i++) {
            as[i].style.display="none";
        }
        game.style.height="34px";
    };

    //top部分大盒子显示效果
    $(".top .l_gift").mouseenter(function () {
        $(".top .l_gift_down").show();
        $(this).find("img").hide();
    });
    $(".top .l_gift").mouseleave(function () {
        $(".top .l_gift_down").hide();
        $(this).find("img").show();

    });




};
