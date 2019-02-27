$('header div.header-top-main ul li').children('a').mouseenter(function(){
  var a= $(this).siblings("div");
  a.css("display","block");
  setTimeout(function(){
    "use strict";
    a.css({
      "opacity":"1",
      "top":"35px"
    })
  },100);
});
$('header div.header-top-main ul li').mouseleave(function(){
  var a= $(this).children("div");
  a.css("display","none");
  setTimeout(function(){
    "use strict";
    a.css({
      "opacity":"0",
      "top":"70px"
    })
  },100)
});
$("#search1").click(function(){
  $("body,html").animate({scrollTop:430},500);
});
//小圆点插件
jQuery.fn.circle=function(){
    this.mouseover(function(){
      $(this).addClass('active').siblings().removeClass('active');
      var isNext=$(this).next();
      var move=$(this).parent().prev();
      if(isNext.length==0){
        move.css('left','-1202px')
      }else{
        move.css('left','12px')
      }
    })
};
$('#main .main div.pic-box div i').circle();
//移到div左右切换图片出现
$('#main .main div.pic-box').hover(function(){
  $(this).children('p').css('display','block');
},function(){
  $(this).children('p').css('display','none');
});
//左右切换
$('#main .main div.pic-box').on('click','p',function(){
  var move=$(this).siblings('ul.clear');
  var circle=$('#main .main div.pic-box div i');
  if(move.css('left')=='12px'){
    move.css('left','-1202px');
    $(circle[1]).addClass('active').siblings().removeClass('active');
  }else{
    move.css('left','12px')
    $(circle[0]).addClass('active').siblings().removeClass('active');
  }
});
//底部切换友情链接
$('.friendLink ul li a').mouseenter(function(e){
  e.preventDefault();
  var div=$($(e.target).attr('href'));
  $(e.target).addClass('active').parent().siblings('li').children('a').removeClass('active');
  div.addClass('active').siblings().removeClass('active');
});

//返回顶部
$('#fixed-top').on('mouseenter','i',function(){
  var b=$(this).children('b');
  b.css('display','block');
  setTimeout(function(){
    b.css({
      'opacity':'1',
      'right':'40px'
    });
  },100)
});
$('#fixed-top').on('mouseleave','i',function(){
  var b=$(this).children('b');
  b.css('display','none');
  setTimeout(function(){
    b.css({
      'opacity':'0',
      'right':'62px'
    });
  },100)
});
$('#fixed-top i:last-child').click(function(){
  $('body,html').animate({
    scrollTop:'0'
  },800)
});
$(function(){
  $(window).scroll(function(){
    var scroll=$(window).scrollTop();
    var main=$('#main').offset().top;
    var fixed=$('#fixed-top i');
    if(scroll>main-300){
      var header=$('.header-top');
      fixed.addClass('show');
    }
    else if(scroll<main-300){
      fixed.removeClass('show');
    }

  })
})


