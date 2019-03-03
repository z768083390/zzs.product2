    var sub = document.getElementById("button");
    sub.onclick=function(){ //内容为空，给出提示信息
        var nameval = document.getElementById('name').value;
        var nlength = document.getElementById('name').value.length;
        if(nameval==""){
             document.getElementById('a1').innerHTML="请输入用户名！";
        }else if(nlength<5||nlength>=10){
                document.getElementById('a1').innerHTML="请输入8位以上字符数字组合！";
            }
            
            //用户名验证

        var pwdval = document.getElementById('password').value;
         var plength = document.getElementById('password').value.length;
        var rel = /^[A-Za-z0-9]{6,10}$/;
        if(pwdval==""){
                document.getElementById('a2').innerHTML="请输入密码！";
        }else if(!rel.test(pwdval)){
                document.getElementById('a2').innerHTML="请输入字母与数字组合！";
            }
            //密码验证
        var passwords = document.getElementById('passwords').value;
        if(passwords!=pwdval){
            	document.getElementById('a3').innerHTML="第二次密码不正确！";
        }
            //密码二次确认
        var emailval = document.getElementById('email').value;
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if(emailval==""){
            document.getElementById('a4').innerHTML="请输入邮箱！";
        }else if(!reg.test(emailval)){
                document.getElementById('a4').innerHTML="请输入正确的格式！";
        }
            //邮箱验证

        var txtval = document.getElementById('number').value;
        var tlength = document.getElementById('number').value.length;
        if(txtval==""){
            document.getElementById('a5').innerHTML="请输入手机号码！";
        }else if(tlength!=11){
                document.getElementById('a5').innerHTML="请输入11位手机号码！";
            }

            //文本域验证
        }
        document.getElementById('name').onkeyup=function(){
            document.getElementById('sp').innerHTML="";
        }
        document.getElementById('pwd').onkeyup=function(){
            document.getElementById('sp1').innerHTML="";
        }
        document.getElementById('email').onkeyup=function(){

            document.getElementById('sp2').innerHTML="";
        }