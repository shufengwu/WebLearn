window.onload = function () {
    var city = this.document.getElementById('search_textview');
    var submit = document.getElementById('search_submit_button');
    var xmlHttpRequest;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlHttpRequest = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var url;
    submit.onclick = function () {
        if (city.value === "") {
            alert('城市名不能为空');
        } else {
            //GET
            //url = 'https://free-api.heweather.com/s6/weather/forecast?key=00bdd8bea75d4644ad602a9345442853&location=' + city.value;
            //POST
            url = 'https://free-api.heweather.com/s6/weather/forecast';
            xmlHttpRequest.onreadystatechange = function () {
                if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
                    var jsonStr = xmlHttpRequest.responseText;
                    console.log(jsonStr);
                }
            }
            //GET请求
            // xmlHttpRequest.open("GET", url, true);
            // xmlHttpRequest.send();

            //POST请求
            xmlHttpRequest.open("POST", url, true);
            xmlHttpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlHttpRequest.send("key=00bdd8bea75d4644ad602a9345442853&location=" + city.value);
        }

    }
}