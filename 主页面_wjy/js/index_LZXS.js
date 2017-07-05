/**
 * Created by wangjuye on 2017/5/7.
 */
var nav_r = document.getElementById("nav_r");
var nav_g = nav_r.children[0];
var nav_x = nav_r.children[1];

nav_g.onmouseover = function () {
    nav_g.className = "show";
};
nav_g.onmouseout = function () {
    nav_g.className = "nav_g";
}
nav_x.onmouseover = function () {
    nav_x.className = "show";
};
nav_x.onmouseout = function () {
    nav_x.className = "nav_x";
}

var screen = document.getElementById("screen");
var ul = screen.children[0];
var timer = null;
var video = document.getElementById("video");
var pic_box_sc = screen.parentNode.children[1];
var pic = screen.parentNode;
var overlay = document.getElementById("overlay");
video.onclick = function(){
    pic.style.display = "block";
    clearInterval(timer);
    timer = setInterval(function () {
        var leader = ul.offsetLeft;
        var step = -10;
        leader = leader + step;
        if (leader >= -(ul.offsetWidth - ul.children[0].offsetWidth)) {
            ul.style.left = leader + "px";
        } else {
            ul.style.left = step + "px";
        }
    }, 40);
    overlay.style.display = "block";
    return false;
};
pic_box_sc.onclick = function(){
    ul.style.left = 0 + "px";
    pic.style.display = "none";
    clearInterval(timer);
    overlay.style.display = "none";
    return false;
};

    //top部分大盒子显示效果
    $(".top_box .l_gift").mouseenter(function () {
        $(".top_box .l_gift_down").show();
        $(this).find("img").hide();
        console.log("1");
    });
    $(".top_box .l_gift").mouseleave(function () {
        $(".top_box .l_gift_down").hide();
        $(this).find("img").show();
    });

