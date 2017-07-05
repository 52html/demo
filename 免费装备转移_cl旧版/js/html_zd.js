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

    $(".nav_box .middle_box .middle_box_lb .lb1").mouseenter(function () {
        $(this).toggleClass("changePic1 showPic1");
    });
    $(".nav_box .middle_box .middle_box_lb .lb1").mouseleave(function () {
        $(this).toggleClass("changePic1 showPic1");
    });

    $(".nav_box .middle_box .middle_box_lb .lb2").mouseenter(function () {
        $(this).toggleClass("changePic2 showPic2");
    });
    $(".nav_box .middle_box .middle_box_lb .lb2").mouseleave(function () {
        $(this).toggleClass("changePic2 showPic2");
    });
    $(".nav_box .middle_box .middle_box_lb .lb3").mouseenter(function () {
        $(this).toggleClass("changePic3 showPic3");
    });
    $(".nav_box .middle_box .middle_box_lb .lb3").mouseleave(function () {
        $(this).toggleClass("changePic3 showPic3");
    });
    $(".nav_box .middle_box .middle_box_lb .lb4").mouseenter(function () {
        $(this).toggleClass("changePic4 showPic4");
    });
    $(".nav_box .middle_box .middle_box_lb .lb4").mouseleave(function () {
        $(this).toggleClass("changePic4 showPic4");
    });


    // 轮播图部分  youwenti
    // 官方图片
    $(".nav_box .middle_box .middle_box_m ol li").click(function () {
         $(".nav_box .middle_box .middle_box_m ul li").eq($(this).index()).animate({
             "left":0
         }).prev().animate({
             "left":-640
         });
         $(".nav_box .middle_box .middle_box_m ul li").eq($(this).index()).next().animate({
             "left":640
         });
         $(this).find("a").css("backgroundColor","#572613").siblings().find("a").css("backgroundColor","#000");
        //$(".nav_box .middle_box .middle_box_m ul li").eq($(this).index()).fadeIn(600).css("backgroundColor","#572613").siblings().fadeOut(600);
    });
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
    });


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

});


function run(val) {
    // 获取select2
    var select2 = document.getElementById("selecte2");

    // 先清除掉select2下所有的子节点
    // 先获取select2下所有的子节点
    var ops = select2.getElementsByTagName("option");
    //获得和删除节点
    for (var x = 0; x < ops.length; x++) {
        // 获取每一个
        var op = ops[x];
        // 删除节点
        select2.removeChild(op);
        x--;
    }
    // 循环遍历
    for (var i = 0; i < arr.length; i++) {
        //定义inarr给数组arr中
        var inarr = arr[i];
        var str = inarr[0];
        if (val == str)//码代码的时候这里犯了一个很傻的错误将== 写成了 =（赋值）导致不管选择什么所有都会显示出来。
        {
            for (var j = 1; j < inarr.length; j++) {
                //得到数组中的内容
                var instr = inarr[j];
                //将数组中的内容添加到select2中
                var option = document.createElement("option");
                //创建文本节点并复制给text
                var text = document.createTextNode(instr);
                //在option中添加子节点
                option.appendChild(text);
                //在select2中添加option
                select2.appendChild(option);

            }
        }
    }
}
