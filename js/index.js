var index = 1;
var mouse_move_id;
var is_click = false;

window.onload = function () {

    // window.document.body.onmouseover = function (event) {
    //     console.log('当前鼠标在', event.target.id, '元素上'); //在控制台中打印该变量
    //     mouse_move_id = event.target.id;
    // }

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
        } else if(index === 1){
            temp = 4;
        }else {
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

    document.getElementById('buy_car').onmouseover = function(){
        var buy_car = document.getElementById('buy_car');
        var a = buy_car.getElementsByTagName('a');
        for (i = 0; i < a.length; i++) {
            a[i].style.color = '#FF6700';
            var s = a[i].getElementsByTagName('s');
            for (j = 0; j < s.length; j++) {
                s[j].style.backgroundImage = 'url(./image/buy_car_not_null.png)';
            }
        }
    }

    document.getElementById('buy_car').onmouseout = function(){
        var buy_car = document.getElementById('buy_car');
        var a = buy_car.getElementsByTagName('a');
        for (i = 0; i < a.length; i++) {
            a[i].style.color = '#B0B0B0';
            var s = a[i].getElementsByTagName('s');
            for (j = 0; j < s.length; j++) {
                s[j].style.backgroundImage = 'url(./image/buy_car_null.png)';
            }
        }
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