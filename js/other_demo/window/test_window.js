var myWindow;
var confirmDialog;
var promptDialog;

function openWindow() {
    // 
    if(!myWindow||myWindow.closed){
        myWindow = window.open("", "", "width=400,height=200");
        
    }
    // focus();
    blur();
    
}

function closeWindow() {
    if (myWindow) {
        // 
        myWindow.close();
    }
}

function hascloseWindow() {
    if (!myWindow){
        alert('我的窗口没有被打开！');
	}
	else{
        // 
        if(myWindow.closed){
            alert('窗口已经关闭！');
        }else{
            alert('窗口还没有关闭！');
        }
    }
    
}

function showDefaultStatus(){
        // 
        alert(myWindow.defaultStatus);
}

function showConfirmDialog(){
    confirmDialog = window.confirm("请选择！");
    if(confirmDialog){
        alert('选择了确定');
    }else{
        alert('选择了取消');
    }
}

function showPromptDialog(){
    var user_name = window.prompt('请输入用户名：');
    if(user_name){
        alert('用户名为：'+user_name);
    }
    
}

function focus(){
    if(myWindow||!(myWindow.closed)){
        myWindow.focus();
    }
}

function blur(){
    if(myWindow||!(myWindow.closed)){
        myWindow.blur();
    }
}

function showInner(){
    alert(innerWidth+" - "+innerHeight);
}

function showOuter(){
    alert(outerWidth+" - "+outerHeight);
}

function showClient(){
    alert(document.body.clientWidth+" - "+document.body.clientHeight);
}

function testlocalStorage(){
    if (typeof(Storage) !== "undefined") {
        // alert('支持Storage');
        //localStorage.setItem("lastname", "Smith");
        // localStorage.setItem("name","wsf");
        alert(localStorage.getItem("lastname"));
    }else{
        alert('不支持Storage');
    }
    
}
