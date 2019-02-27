//原生addClass；
function addClass1(object,add){
  var oldClass=object.className;
  var newClass='';
  if(!oldClass){
    newClass=add;
  }else{
    newClass=oldClass+" "+add;
  }
  return newClass;
};
//原生removeClass；
function removeClass1(object,remove){
  var oldClass=object.className;
  var newClass='';
  newClass=oldClass.replace(remove,'');
  return newClass;
}
//登录注册界面
var lis=document.querySelectorAll('.register-main ul li');
'use strict';
for(var i=0;i<lis.length;i++){
  lis[i].addEventListener('mouseover',function(){
    var sibling=document.querySelector('.register-main ul li.active');
    if(sibling!=this){
      this.className=addClass1(this,'hover');
    }
  });
  lis[i].addEventListener('mouseout',function(){
    var sibling=document.querySelector('.register-main ul li.active');
    if(sibling!=this){
      this.className=removeClass1(this,'hover');
    }
  });
  lis[i].addEventListener('click',function(){
    var sibling=document.querySelector('.register-main ul li.active');
    var register=document.querySelector('.register-main .register');
    var enroll=document.querySelector('.register-main .enroll');
    if(sibling!=this){
      reset();
      this.className=addClass1(this,'active');
      this.className=removeClass1(this,'hover');
      sibling.className=removeClass1(this,'active');
      if(lis[0]==this){
        register.style.display='block';
        enroll.style.display='none'
      }
      else{
        register.style.display='none';
        enroll.style.display='block';
      }
    }
  });
};
//页面重置
function reset(){
  var button=$('div.register-main button.btn-register');
  button.removeClass('active');
  $('div.register-main input.number').each(function(){
    $(this).val('');
    $(this).siblings('span').css('display','block');
    $(this).siblings('b').css('display','none')
  });
}
//账号 手机登陆切换
var chooses=document.querySelectorAll('div.register-main div.style div > p.choose');
for(var i=0;i<chooses.length;i++){
  chooses[i].addEventListener('click',function(){
    var nowId='#'+this.getAttribute('data-toggle');
    var show=document.querySelector(nowId);
    show.style.display='block';
    this.children[0].className=addClass1(this.children[0],'active');
    if(nowId!='#Pwd'){
      reset();
      show.previousElementSibling.style.display='none';
      this.previousElementSibling.children[0].className=removeClass1(this.children[0],'active');
    }else{
      reset();
      show.nextElementSibling.style.display='none';
      this.nextElementSibling.children[0].className=removeClass1(this.children[0],'active');
    }
  })
}
//输入input正则判断
var inputs=document.querySelectorAll('.register-main input.number');
for(var i=0;i<inputs.length;i++){
  inputs[i].addEventListener('input',function(){
    var val=this.value;
    var button=$('button.btn-register');
    if(val==''){
      this.previousElementSibling.style.display='block';
      button.removeClass('active');
    } else{
      this.previousElementSibling.style.display='none';
      var orange=$(this).parent().siblings('p');
      for(var r=0;r<$(orange.children('input')).length;r++){
        var p=orange.children('input');
        if(p[r].value==''){
          break;
        }
        if(r==p.length-1&&p[r].value!=''){
          //勾选同意协议才能注册
          if(p.parents('.enroll').length==1){
            if($('div.register-main div.enroll p.check input').prop('checked')){
              button.addClass('active');
            }
          }else{
            button.addClass('active');
          }
        }
      };
    }
  });
  inputs[i].addEventListener('focus',function(){
    this.className=addClass1(this,'active')
  });
  inputs[i].addEventListener('blur',function(){
    this.className=removeClass1(this,'active');
    if(this.value.length!=11){
      $(this).siblings('b').css('display','block')
    }else{
      $(this).siblings('b').css('display','none')
    }
  })
};
//手机验证信息
$('div.register-main div.enroll p.inputPwd input').blur(function(){
  var length=$(this).val().length;
  if(5<length&&length<17){
    $(this).siblings('b').css('display','none')
  }
});
$('div.register-main div.style p.telNum input.number').blur(function(){
  var reg=/^1[34578]\d{9}$/;
  var number=$(this).val();
  if(reg.test(number)){
    $(this).siblings('b').css('display','none')
  }else{
      $(this).siblings('b').children('span').html('请填写正确的手机号码');
    $(this).siblings('b').css('display','block');
  }
});
$('.enroll .telNum input').blur(function(){
  var n=$(this).val();
    if(n.length==11){
        $.ajax({
            type:'POST',
            url:'php/selectNum.php',
            data:{
                unum:n
            },
            success:function(data){
                if(data>0){
                    $('.enroll .telNum b').css('display','block');
                    $('.enroll .telNum b span').html('该用户已注册过');
                }else{
                    $('.enroll .telNum b').css('display','none');
                }
            }
        })
    }
});
//手机点击后手机验证码
var timer=null;
$('div.phoneNumber div > p.input .send').click(function(){
  var send=this;
  if(timer===null){
    var i=60;
    $(this).css('font-size','14px');
    $(this).html('60秒后重新发送');
    timer=setInterval(function(){
      i--;
      send.innerHTML=i+'秒后重新发送';
      if(i==55){
        var rd=Math.floor(Math.random()*8999+1000);
        $('.enroll .inputCode input').val(rd).siblings('span').css('display','none');
      }else if(i==1){
        clearInterval(timer);
        send.innerHTML='重新发送';
        timer=null;
      }
    },1000)
  }
})
//密码设置可见性
$('div.register-main div.enroll p.inputPwd>i').click(function(){
  $(this).toggleClass('show');
  if($(this).hasClass('show')){
    $(this).prev().attr('type','text');
  }else{
    $(this).prev().attr('type','password');
  }
});
function decide(){
  var inputs=document.querySelectorAll('.register-main div.enroll input.number');
  for(var i=0;i<inputs.length;i++){
      var val=inputs[i].value;
      var button=$('button.btn-register');
      if(val==''){
      } else{
        inputs[i].previousElementSibling.style.display='none';
        var orange=$(inputs[i]).parent().siblings('p');
        for(var r=0;r<$(orange.children('input')).length;r++){
          var p=orange.children('input');
          if(p[r].value==''){
            break;
          }
          if(r==p.length-1&&p[r].value!=''){
            //勾选同意协议才能注册
            if(p.parents('.enroll').length==1){
              if($('div.register-main div.enroll p.check input').prop('checked')){
                button.addClass('active');
              }
            }else{
              button.addClass('active');
            }
          }
        };
      }
  };
}
var agree=$('div.register-main div.enroll p.check input');
agree.click(function(e){
  var button=$('button.btn-register');
    if(($(agree).prop('checked'))){
      decide();
    }else{
      button.removeClass('active');
    }
});
//微信登录摸态框
$('div.register-main p.wechar-register').click(function(){
    $(this).next().addClass('active');
    $(this).children('i').css('opacity','1');
});
$('div.register-main div.style div.phoneNumber div i').click(function(){
  $(this).parent().removeClass('active');
})

//以下功能是连接PHP
$('#btn').click(function(){
  var num=$('[name="num"]').val();
  var upwd=$('[name="upwd"]').val();
    if($(this).hasClass('active')){
      $.ajax({
          type:'POST',
          url:'php/login.php',
          data:{
              unum:num,
              upwd:upwd
          },
          success:function(data){
            if(data<0){
              $('#Pwd b').css('display','block');
                $('#Pwd b span').html('用户名或密码有误');
            }else{
                sessionStorage['register']=1;
                document.cookie='PHPSESID=11';
                location.href='index.html';
            }
          },
          error:function(data){
              console.log(10);
          }
    })
  }
})
$('#btn1').click(function(){
    var unum=$('[name="unum1"]').val();
    var upwd=$('[name="upwd1"]').val();
    if($(this).hasClass('active')&&unum.length==11){
        $.ajax({
            type:'POST',
            url:'php/addUser.php',
            data:{
                unum:unum,
                upwd:upwd
            },
            success:function(data){
                if(data>0){
                  location.href='success.html';
                }
            },
            error:function(data){
                console.log(10);
            }
        })
    }
})
//判断客户是点击登录按钮还是注册按钮
var register=sessionStorage['register'];
if(register==1){
    $('.register-main>ul>li').first().click();
    console.log(1);
}else{
    console.log(2);
    $('.register-main>ul>li').last().click()
}