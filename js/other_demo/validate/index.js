$().ready(function () {
    // 在键盘按下并释放及提交后验证提交表单
    var validator = $("#signupForm").validate({
        debug: true,
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
                required: true,
                minlength: 6,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            mail_code:{
                required:true,
                isZipCode:true
            },
            address:{
                required:true,
                byteRangeLength:[5,10]
            },
            topic: {
                required: "#newsletter:checked",
                minlength: 2
            },
            agree: "required"
        },
        messages: {
            firstname: "请输入您的名字",
            lastname: "请输入您的姓氏",
            username: {
                required: "请输入用户名",
                minlength: "用户名必需由两个字母组成"
            },
            password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 6 个字母"
            },
            confirm_password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 6 个字母",
                equalTo: "两次密码输入不一致"
            },
            email: "请输入一个正确的邮箱",
            agree: "请接受我们的声明",
            topic: "请选择两个主题"
        },

        submitHandler: function (form) {
            alert("提交事件!");
            form.submit();
            //$(form).ajaxSubmit();
        }
        // ,
        // success: function (label) {
        //     // set &nbsp; as text for IE
        //     label.html("&nbsp;").addClass("checked");
        //     //label.addClass("valid").text("Ok!")
        // }
    });

    $("#reset").click(function () {
        validator.resetForm();
    });


});