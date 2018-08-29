var index = 1;
var mouse_move_id;
var is_click = false;

window.onload = function () {
    $(document).ready(function () {
        changeRightBarStatus();
        if (getClientHeight() > window.scrollY) {
            $("#home_right_bottom_bar").hide();
        } else {
            $("#home_right_bottom_bar").show();
        }

        
        $("#img_yuan").find("font").each(function () {
            $(this).css("background-color", "#757575");
            $(this).css("border", "2px solid rgba(255 , 255, 255, 0.3)");
        });
        $("#img_yuan font:first-child").css("background-color", "white");
        $("#img_yuan font:first-child").css("border", "2px solid #757575");

        var start = setInterval(autoPlay, 4000); //开始轮播，每两秒换一张图

        // 鼠标移动过来，停止计时
        $("#main_page_banner_div").mouseover(function () {
            clearInterval(start);
        });

        // 鼠标移走，开始计时
        $("#main_page_banner_div").mouseout(function () {
            start = setInterval(autoPlay, 4000);
        });


        // 获取所有圆圈
        var lis = document.getElementById('img_yuan').getElementsByTagName('font'); //得到所有圆圈

        // 当移动到圆圈，则停滞对应的图片
        var funny = function (i) {

            var lis_i = $("#img_yuan").find("font").eq(i);
            lis_i.mouseover(function () {
                is_click = false;
                lis_i.css("background-color", "white");
                lis_i.css("border", "2px solid #757575");
            });

            lis_i.mouseout(function () {
                var temp;
                if (index === 0) {
                    temp = 4;
                } else {
                    temp = index - 1;
                }
                if (!is_click && temp !== i) {
                    lis_i.css("background-color", "#757575");
                    lis_i.css("border", "2px solid rgba(255 , 255, 255, 0.3)");

                }
            });

            lis_i.click(function () {
                is_click = true;
                index = i;
                changeImg(index++);
            });
        }



        $("#img_yuan").find("font").each(function () {
            funny($(this).index());

        });

        //后退按钮
        $("#banner_left_arrow").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('后退');
            var temp;
            if (index === 0) {
                temp = 3;
            } else if (index === 1) {
                temp = 4;
            } else {
                temp = index - 2;
            }
            index = temp;
            changeImg(index++);
        });


        //前进按钮
        $("#banner_right_arrow").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('前进');
            clearInterval(start);
            start = setInterval(autoPlay, 4000);
            autoPlay();
        });

        jQuery("#a_person_center").mouseover(function () {
            jQuery("#img_person_center").attr('src', "./image/home_right_bar/person_center_hover.png");
        });

        jQuery("#a_person_center").mouseout(function () {
            jQuery("#img_person_center").attr('src', "./image/home_right_bar/person_center_normal.png");
        });

        $("#a_customer").mouseover(function () {
            $("#img_customer").attr("src", "./image/home_right_bar/customer_hover.png");
        });

        $("#a_customer").mouseout(function () {
            $("#img_customer").attr("src", "./image/home_right_bar/customer_normal.png");
        });

        $("#a_buy_cart").mouseover(function () {
            $("#img_buy_cart").attr("src", "./image/home_right_bar/buy_cart_hover.png");
        });

        $("#a_buy_cart").mouseout(function () {
            $("#img_buy_cart").attr("src", "./image/home_right_bar/buy_cart_normal.png");
        });

        $("#a_go_top").mouseover(function () {
            $("#img_go_top").attr("src", "./image/home_right_bar/totop_hover.png");
        });

        $("#a_go_top").mouseout(function () {
            $("#img_go_top").attr("src", "./image/home_right_bar/totop.png");
        });

        $("#a_go_top").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        });

        $(window).resize(function () {
            changeRightBarStatus();
        });

        $(window).scroll(function () {
            console.log(getClientHeight() + " " + window.scrollY);
            if (getClientHeight() > window.scrollY) {
                $("#home_right_bottom_bar").hide();

            } else {
                $("#home_right_bottom_bar").show();
            }
        });

        

        $("#menu_3_left_li_1").mouseover(function () { 
            $("#menu_3_left_li_1 a img").attr("src","./image/menu_3_left_icon/cellphone_hover.png");
        });

        $("#menu_3_left_li_1").mouseout(function () { 
            $("#menu_3_left_li_1 a img").attr("src","./image/menu_3_left_icon/cellphone.png");
        });

        $("#menu_3_left_li_2").mouseover(function () { 
            $("#menu_3_left_li_2 a img").attr("src","./image/menu_3_left_icon/gift_hover.png");
        });

        $("#menu_3_left_li_2").mouseout(function () { 
            $("#menu_3_left_li_2 a img").attr("src","./image/menu_3_left_icon/gift.png");
        });

        $("#menu_3_left_li_3").mouseover(function () { 
            $("#menu_3_left_li_3 a img").attr("src","./image/menu_3_left_icon/F_hover.png");
        });

        $("#menu_3_left_li_3").mouseout(function () { 
            $("#menu_3_left_li_3 a img").attr("src","./image/menu_3_left_icon/F.png");
        });

        $("#menu_3_left_li_4").mouseover(function () { 
            $("#menu_3_left_li_4 a img").attr("src","./image/menu_3_left_icon/sim_hover.png");
        });

        $("#menu_3_left_li_4").mouseout(function () { 
            $("#menu_3_left_li_4 a img").attr("src","./image/menu_3_left_icon/sim.png");
        });

        $("#menu_3_left_li_5").mouseover(function () { 
            $("#menu_3_left_li_5 a img").attr("src","./image/menu_3_left_icon/recycle_hover.png");
        });

        $("#menu_3_left_li_5").mouseout(function () { 
            $("#menu_3_left_li_5 a img").attr("src","./image/menu_3_left_icon/recycle.png");
        });

        $("#menu_3_left_li_6").mouseover(function () { 
            $("#menu_3_left_li_6 a img").attr("src","./image/menu_3_left_icon/charge_hover.png");
        });

        $("#menu_3_left_li_6").mouseout(function () { 
            $("#menu_3_left_li_6 a img").attr("src","./image/menu_3_left_icon/charge.png");
        });
    });



}

//一轮过后，还是第二轮
function autoPlay() {
    if (index > 4) {
        index = 0;
    }
    changeImg(index++);
}
//对应圆圈和图片同步
function changeImg(index2) {
    var list = $("#main_page_banner_div").find("img");
    var list1 = $("#img_yuan").find("font");
    list.each(function () {
        $(this).css("display","none");
    });

    list1.each(function () {
        $(this).css("background-color", "#757575");
        $(this).css("border", "2px solid rgba(255 , 255, 0255, 0.3)");
    });

    list.eq(index2).css("display","block");
    list1.eq(index2).css("background-color", "white");
    list1.eq(index2).css("border", "2px solid #757575");
}

function changeRightBarStatus() {
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    if (w < 1394) {
        if (getClientHeight() <= 490) {
            $("#home_right_bar").attr("style", "display: none;position: fixed;top: 40px;right: 0;z-index: 999999;width: 84px;height: 380px;");
        } else {
            $("#home_right_bar").attr("style", "display: none;position: fixed;bottom: 70px;right: 0;z-index: 999999;width: 84px;height: 380px;");
        }
    } else {
        if (getClientHeight() <= 490) {
            $("#home_right_bar").attr("style", "display: block;position: fixed;top: 40px;right: 0;z-index: 999999;width: 84px;height: 380px;");
        } else {
            $("#home_right_bar").attr("style", "display: block;position: fixed;bottom: 70px;right: 0;z-index: 999999;width: 84px;height: 380px;");
        }
    }
}

function getClientHeight() {
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    return h;
}

function getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}
