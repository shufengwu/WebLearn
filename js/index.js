window.onload = function () {
    var start = setInterval(autoPlay, 2000); //开始轮播，每两秒换一张图

    document.getElementById('main_page_banner_div').onmouseover = function(){
        clearInterval(start);
    }

    document.getElementById('main_page_banner_div').onmouseout = function(){
        start = setInterval(autoPlay, 2000);
    }


    var lis = document.getElementById('img_yuan').getElementsByTagName('font'); //得到所有圆圈
    //当移动到圆圈，则停滞对应的图片
    var funny = function (i) {
        lis[i].onmouseover = function () {
            changeImg(i)
        }
    }
    for (var i = 0; i < lis.length; i++) {
        funny(i);
    }
}

//一轮过后，还是第二轮
function autoPlay(){
    if(index>4){
         index=0;
    }
    changeImg(index++);
}
//对应圆圈和图片同步
function changeImg(index){
    var list=document.getElementById('main_page_banner_div').getElementsByTagName('img');
    var list1=document.getElementById('img_yuan').getElementsByTagName('font');
    for(i=0;i<list.length;i++){
        list[i].style.display='none';
        list1[i].style.backgroundColor='white';
    }
    list[index].style.display='block';
    list1[index].style.backgroundColor='red';
}