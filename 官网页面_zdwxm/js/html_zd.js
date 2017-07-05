/**
 * Created by Dawn on 2017/5/6.
 */

// nav_bottom部分
// var lis=document.getElementsByClassName("n_b_down");
//
// for (var i = 0; i < lis.length; i++) {
//
//   lis[i].onmouseover=function () {
//       var dls=this.getElementsByTagName("dl")[0];
//       dls.style.display="block";
//       console.log("111");
//   };
//     lis[i].onmouseout=function () {
//         var dls=this.getElementsByTagName("dl")[0];
//         dls.style.display="none";
//         console.log("111");
//     };
// }

$(function () {
    //top部分大盒子显示效果
    $(".top .l_gift").mouseenter(function () {
        $(".top .l_gift_down").show();
        $(this).find("img").hide();
    });
    $(".top .l_gift").mouseleave(function () {
        $(".top .l_gift_down").hide();
        $(this).find("img").show();

    });

    // 游戏下载盒子图片变化
    $(".nav_box .middle_box .middle_box_l .middle_box_lt").mouseenter(function () {
        $(this).toggleClass("changePic showPic");
    });
    $(".nav_box .middle_box .middle_box_l .middle_box_lt").mouseleave(function () {
        $(this).toggleClass("changePic showPic");
    });
    //
    // $(".nav_box .middle_box .middle_box_lb .lb1").mouseenter(function () {
    //     $(this).toggleClass("changePic1 showPic1");
    // });
    // $(".nav_box .middle_box .middle_box_lb .lb1").mouseleave(function () {
    //     $(this).toggleClass("changePic1 showPic1");
    // });
    //
    // $(".nav_box .middle_box .middle_box_lb .lb2").mouseenter(function () {
    //     $(this).toggleClass("changePic2 showPic2");
    // });
    // $(".nav_box .middle_box .middle_box_lb .lb2").mouseleave(function () {
    //     $(this).toggleClass("changePic2 showPic2");
    // });
    // $(".nav_box .middle_box .middle_box_lb .lb3").mouseenter(function () {
    //     $(this).toggleClass("changePic3 showPic3");
    // });
    // $(".nav_box .middle_box .middle_box_lb .lb3").mouseleave(function () {
    //     $(this).toggleClass("changePic3 showPic3");
    // });
    // $(".nav_box .middle_box .middle_box_lb .lb4").mouseenter(function () {
    //     $(this).toggleClass("changePic4 showPic4");
    // });
    // $(".nav_box .middle_box .middle_box_lb .lb4").mouseleave(function () {
    //     $(this).toggleClass("changePic4 showPic4");
    // });


    // 轮播图部分  youwenti
    // 官方图片
    // var fa=document.getElementsByClassName("middle_box_m")[0];
    // var ul=fa.getElementsByTagName("ul")[0];
    // var lis=ul.getElementsByTagName("li");
    //
    // var sib;
    // var timer=null;
    // for (var i = 0; i <lis.length; i++) {
    //     timer=setInterval(function () {
    //         animate(lis[i],{
    //             "display":"block"
    //         });
    //         sib=lis[i].siblings();
    //         animate(sib,{
    //             "display":"none"
    //         });
    //
    //         console.log("1");
    //     },1000);
    //
    // }







    $(".nav_box .middle_box .middle_box_m ol li").click(function () {
        // $(".nav_box .middle_box .middle_box_m ul li").eq($(this).index()).animate({
        //     "left":0
        // }).prev().animate({
        //     "left":-640
        // });
        // $(".nav_box .middle_box .middle_box_m ul li").eq($(this).index()).next().animate({
        //     "left":640
        // });
        // $(this).find("a").css("backgroundColor","#572613").siblings().find("a").css("backgroundColor","#000");
        $(".nav_box .middle_box .middle_box_m ul li").eq($(this).index()).show().css("backgroundColor","#572613").siblings().hide();
        console.log("aaaa");
    });
    // var timer=setInterval(function () {

        // $(".nav_box .middle_box .middle_box_m ol li").click();


    // },1000);
    // $(".nav_box .middle_box .middle_box_m ul li").show(400).siblings().hide(400);

    //合作图片

    $(".hz").click(function () {
        $(this).find("a").css("color","#fff").siblings(".gf").find("a").css("color","#818181");
        $(".nav_box .middle_box .middle_box_mhz").show();
        $(".nav_box .middle_box .middle_box_m").hide();
    });

    $(".gf").click(function () {
        $(this).find("a").css("color","#fff").siblings(".hz").find("a").css("color","#818181");
        $(".nav_box .middle_box .middle_box_mhz").hide();
        $(".nav_box .middle_box .middle_box_m").show();
    });

    $(".nav_box .middle_box .middle_box_mhz ol li").click(function () {
        // $(".nav_box .middle_box .middle_box_m ul li").eq($(this).index()).animate({
        //     "left":0
        // }).prev().animate({
        //     "left":-640
        // });
        // $(".nav_box .middle_box .middle_box_m ul li").eq($(this).index()).next().animate({
        //     "left":640
        // });
        // $(this).find("a").css("backgroundColor","#572613").siblings().find("a").css("backgroundColor","#000");
        $(".nav_box .middle_box .middle_box_mhz ul li").eq($(this).index()).show().siblings().hide();
        console.log("aaaa");

    });
    // var timer=setInterval(function () {

        // $(".nav_box .middle_box .middle_box_mhz ol li").click();

    // },1000);

    // 下面三个小图片
    $(".middle_box_b>div").mouseenter(function () {
        $(this).css("opacity","1").siblings().css("opacity", "0.8");
    });
    $(".middle_box_b").mouseleave(function () {
        $(this).find("div").css("opacity","1");
    });



    //日历更新部分
    var date=new Date();
    var idx=date.getDay();
    if(idx==0){
        $(".mr_week li").eq(6).css({"backgroundColor":"#847242","color":"#F4EFDF"}).siblings().css({"backgroundColor":"#F4EFDF","color":"#847242"});
    }else{
        $(".mr_week li").eq(idx-1).css({"backgroundColor":"#847242","color":"#F4EFDF"}).siblings().css({"backgroundColor":"#F4EFDF","color":"#847242"});

    }

    //右侧定位盒子list

    $(".mr_navigation li").mouseenter(function () {
        $(this).css("color","#eff0ef").siblings().css("color","#96816C");
    });
    $(".mr_navigation li").mouseleave(function () {
        $(".mr_navigation li").css("color","#eff0ef");
    });



    // 右侧定位盒子list
    $(".mr_bottom_list a").mouseenter(function () {
       $(this).css("color","#000").siblings().css("color","#96816C");
    });
    $(".mr_bottom_list a").mouseleave(function () {
        $(".mr_bottom_list a").css("color","#96816C").siblings().css("color","#fff");
    });



});


/**
 * 控制元素往返运动(最终优化版本),与getStyle函数一起使用
 * @param tag  要运动的元素
 * @param obj  要修改的属性,json对象
 */
function animate(tag, obj) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var flag = true;
        for (var k in obj) {
            if (k == "opacity") {
                var attr = k;
                var target = obj[k] * 100;
                var leader = getStyle(tag, attr) * 100 || 0;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[attr] = leader / 100;
            } else if (k == "zIndex") {
                tag.style.zIndex = obj[k];
            } else {
                var attr = k;
                var target = obj[k];
                var leader = parseInt(getStyle(tag, attr)) || 0;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[attr] = leader + "px";
            }

            if (leader != target) {
                flag = false;
            }

        }
        //5 清除定时器
        if (flag) {
            clearInterval(tag.timer);
        }

    }, 20);
}
