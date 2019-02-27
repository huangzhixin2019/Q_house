$(function(){
    $.ajax({
        type:'post',
        url:'php/hasLogin.php',
        success:function(data){
            var user=data.unum;
            var isExit=getCookieVal('PHPSESID');
            if(isExit!=10){
                $('ul.register  a span:contains("登录")').map(function(){
                    if($(this).text()=='登录'){
                        return this;
                    }
                }).html(user);
                if($('ul.register  a span:contains("登录")').html()!='登录'){
                    $('#exit').css('display','block');
                    console.log('退出登录');
                }
            }
        }
    })
});

$('div.header-top-main.w-1190 ul.register  a:contains("退出登录")').click(function(e){
    e.preventDefault();
    document.cookie='PHPSESID=10';
    location.reload();
});
$('.register li a span').click(function(){
    if($(this).html()=='登录'){
        sessionStorage['register']=1
    }else{
        sessionStorage['register']=2
    }
})
function getCookieVal(key){
//1:创建变量保存最终返回结果值
//  初始null;
    var rs = null;
//2:按照;拆分cookie中字符串
//  ["uid=10","uname=qiangdong"]
    var line = document.cookie;
    var arr = line.split(";");
//3:循环数组中每一个键值
    for(var i=0;i<arr.length;i++){
        var kv = arr[i];
        //4:按照=拆分  16:32--16:36
        var option = kv.split("=");
        //5:下标0 k   trim()去除字符串前后空格
        var k = option[0].trim();
        var v = option[1];
        //6:下标0 v
        //7:判断如果参数中指定key == k
        if(key===k){
            //8:返回v
            return v;
        }
    }
    //9:否则返回 null
    return rs;
}