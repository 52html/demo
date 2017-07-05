//入口函数
$(function () {
    $(".on1").mouseenter(function () {
        //设置自身添加news_active类名，同级的其他元素清除news_active类名
        $(this).addClass("news_active").siblings().removeClass("news_active");
        $(".news_list").eq($(this).index()).show().siblings().hide();
        $(".news_img").eq($(this).index()).show().siblings().hide();
    });

    $(".on2").mouseenter(function () {
        //设置自身添加news_active类名，同级的其他元素清除news_active类名
        $(this).addClass("news_active").siblings().removeClass("news_active");
        $(".news_list1").eq($(this).index()).show().siblings().hide();
    });

    $(".on3").mouseenter(function () {
        //设置自身添加news_active类名，同级的其他元素清除news_active类名
        $(this).addClass("news_active").siblings().removeClass("news_active");
        $(".news_list2").eq($(this).index()).show().siblings().hide();
    });

    $(".on4").mouseenter(function () {
        //设置自身添加news_active类名，同级的其他元素清除news_active类名
        $(this).addClass("news_active").siblings().removeClass("news_active");
        $(".imgs1").eq($(this).index()).show().siblings().hide();
    });
});

