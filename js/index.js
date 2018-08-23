var index = 1;
var mouse_move_id;
var is_click = false;

window.onload = function () {

    changeRightBarStatus();
    if (getClientHeight() > window.scrollY) {
        document.getElementById('home_right_bottom_bar').style.display = "none";

    } else {
        document.getElementById('home_right_bottom_bar').style.display = "block";
    }

    var list_font = document.getElementById('img_yuan').getElementsByTagName('font');
    list_font[0].style.backgroundColor = 'white';
    list_font[0].style.border = '2px solid #757575';
    for (i = 1; i < list_font.length; i++) {
        list_font[i].style.backgroundColor = '#757575';
        list_font[i].style.border = '2px solid rgba(255 , 255, 0255, 0.3)'
    }

    var start = setInterval(autoPlay, 4000); //开始轮播，每两秒换一张图

    // 鼠标移动过来，停止计时
    document.getElementById('main_page_banner_div').onmouseover = function () {
        clearInterval(start);
    }

    // 鼠标移走，开始计时
    document.getElementById('main_page_banner_div').onmouseout = function () {
        start = setInterval(autoPlay, 4000);
    }

    // 获取所有圆圈
    var lis = document.getElementById('img_yuan').getElementsByTagName('font'); //得到所有圆圈

    // 当移动到圆圈，则停滞对应的图片
    var funny = function (i) {
        lis[i].onmouseover = function () {
            is_click = false;
            // start = setInterval(autoPlay, 1000);
            lis[i].style.backgroundColor = 'white';
            lis[i].style.border = '2px solid #757575';
        }
        lis[i].onmouseout = function () {
            // clearInterval(start);
            console.log(!is_click);
            var temp;
            if (index === 0) {
                temp = 4;
            } else {
                temp = index - 1;
            }
            if (!is_click && temp !== i) {
                lis[i].style.backgroundColor = '#757575';
                lis[i].style.border = '2px solid rgba(255 , 255, 255, 0.3)';

            }
        }

        lis[i].onclick = function () {
            is_click = true;
            index = i;
            changeImg(index++);
        }
    }
    for (var i = 0; i < lis.length; i++) {
        funny(i);
    }

    //后退按钮
    document.getElementById('banner_left_arrow').onclick = function () {
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
    }

    //前进按钮
    document.getElementById('banner_right_arrow').onclick = function () {
        console.log('前进');
        clearInterval(start);
        start = setInterval(autoPlay, 4000);
        autoPlay();
    }

    document.getElementById('a_person_center').onmouseover = function () {
        document.getElementById('img_person_center').src = "./image/home_right_bar/person_center_hover.png";
    }

    document.getElementById('a_person_center').onmouseout = function () {
        document.getElementById('img_person_center').src = "./image/home_right_bar/person_center_normal.png";
    }

    document.getElementById('a_customer').onmouseover = function () {
        document.getElementById('img_customer').src = "./image/home_right_bar/customer_hover.png";
    }

    document.getElementById('a_customer').onmouseout = function () {
        document.getElementById('img_customer').src = "./image/home_right_bar/customer_normal.png";
    }

    document.getElementById('a_buy_cart').onmouseover = function () {
        document.getElementById('img_buy_cart').src = "./image/home_right_bar/buy_cart_hover.png";
    }

    document.getElementById('a_buy_cart').onmouseout = function () {
        document.getElementById('img_buy_cart').src = "./image/home_right_bar/buy_cart_normal.png";
    }

    document.getElementById('a_go_top').onmouseover = function () {
        document.getElementById('img_go_top').src = "./image/home_right_bar/totop_hover.png";
    }

    document.getElementById('a_go_top').onmouseout = function () {
        document.getElementById('img_go_top').src = "./image/home_right_bar/totop.png";
    }

    document.getElementById('a_go_top').onclick = function () {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }

    window.onresize = function () {
        changeRightBarStatus();
    };

    window.onscroll = function () {
        console.log(getClientHeight()+" "+window.scrollY);
        if (getClientHeight() > window.scrollY) {
            document.getElementById('home_right_bottom_bar').style.display = "none";

        } else {
            document.getElementById('home_right_bottom_bar').style.display = "block";
        }
    };

    document.getElementById('a_go_top').onclick = function () {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }

    document.getElementById('menu_3_left_li_1').onmouseover = function () {
        document.getElementById('menu_3_left_li_1').firstElementChild.firstElementChild.src = "./image/menu_3_left_icon/cellphone_hover.png";
    }

    document.getElementById('menu_3_left_li_1').onmouseout = function () {
        document.getElementById('menu_3_left_li_1').firstElementChild.firstElementChild.src = "./image/menu_3_left_icon/cellphone.png";
    }

    document.getElementById('menu_3_left_li_2').onmouseover = function () {
        document.getElementById('menu_3_left_li_2').firstElementChild.firstElementChild.src = "./image/menu_3_left_icon/gift_hover.png";
    }

    document.getElementById('menu_3_left_li_2').onmouseout = function () {
        document.getElementById('menu_3_left_li_2').firstElementChild.firstElementChild.src = "./image/menu_3_left_icon/gift.png";
    }

    document.getElementById('menu_3_left_li_3').onmouseover = function () {
        document.getElementById('menu_3_left_li_3').firstElementChild.firstElementChild.src = "./image/menu_3_left_icon/F_hover.png";
    }

    document.getElementById('menu_3_left_li_3').onmouseout = function () {
        document.getElementById('menu_3_left_li_3').firstElementChild.firstElementChild.src = "./image/menu_3_left_icon/F.png";
    }

    document.getElementById('menu_3_left_li_4').onmouseover = function () {
        document.getElementById('menu_3_left_li_4').firstElementChild.firstElementChild.src = "./image/menu_3_left_icon/sim_hover.png";
    }

    document.getElementById('menu_3_left_li_4').onmouseout = function () {
        document.getElementById('menu_3_left_li_4').firstElementChild.firstElementChild.src = "./image/menu_3_left_icon/sim.png";
    }

    document.getElementById('menu_3_left_li_5').onmouseover = function () {
        document.getElementById('menu_3_left_li_5').firstElementChild.firstElementChild.src = "./image/menu_3_left_icon/recycle_hover.png";
    }

    document.getElementById('menu_3_left_li_5').onmouseout = function () {
        document.getElementById('menu_3_left_li_5').firstElementChild.firstElementChild.src = "./image/menu_3_left_icon/recycle.png";
    }

    document.getElementById('menu_3_left_li_6').onmouseover = function () {
        document.getElementById('menu_3_left_li_6').firstElementChild.firstElementChild.src = "./image/menu_3_left_icon/charge_hover.png";
    }

    document.getElementById('menu_3_left_li_6').onmouseout = function () {
        document.getElementById('menu_3_left_li_6').firstElementChild.firstElementChild.src = "./image/menu_3_left_icon/charge.png";
    }

    
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
    var list = document.getElementById('main_page_banner_div').getElementsByTagName('img');
    var list1 = document.getElementById('img_yuan').getElementsByTagName('font');
    for (i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
        list1[i].style.backgroundColor = '#757575';
        list1[i].style.border = '2px solid rgba(255 , 255, 0255, 0.3)'

    }
    list[index2].style.display = 'block';
    list1[index2].style.backgroundColor = 'white';
    list1[index2].style.border = '2px solid #757575';

}

function changeRightBarStatus() {
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    if (w < 1394) {
        if (getClientHeight() <= 490) {
            document.getElementById('home_right_bar').setAttribute("style", "display: none;position: fixed;top: 40px;right: 0;z-index: 999999;width: 84px;height: 380px;");
        } else {
            document.getElementById('home_right_bar').setAttribute("style", "display: none;position: fixed;bottom: 70px;right: 0;z-index: 999999;width: 84px;height: 380px;");
        }
    } else {
        if (getClientHeight() <= 490) {
            document.getElementById('home_right_bar').setAttribute("style", "display: block;position: fixed;top: 40px;right: 0;z-index: 999999;width: 84px;height: 380px;");
        } else {
            document.getElementById('home_right_bar').setAttribute("style", "display: block;position: fixed;bottom: 70px;right: 0;z-index: 999999;width: 84px;height: 380px;");
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

