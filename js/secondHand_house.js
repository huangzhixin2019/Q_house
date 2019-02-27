//价格范围显示
var showScope=document.querySelectorAll('div.screen div p.scope input');
for(var i=0;i<showScope.length;i++){
  showScope[i].addEventListener('click',function(){
    $(this).siblings('button').addClass('active');
  })
};
$(window).mousedown(function(e){
  var screen=$('div.screen');
  if($(e.target)!=screen&&$(e.target).parents('.screen').length==0){
    screen.find('button').removeClass('active')
  }
});
//展开筛选
$('div.showScreen p.show').click(function(){
  $('div.screen').toggleClass('active');
  $(this).parents('.showScreen').toggleClass('showScreenActive');
})
//右侧sideBar移入移出
$('div.houseList-right div.sideBar ul').on('mouseenter','li',function(){
  $(this).addClass('active').siblings('.active').removeClass('active');
});

//分页
function tt(dd){
  //alert(dd);
}
var GG = {
  "kk":function(mm){
    // alert(mm);
  }
}

$("#page").initPage(71,1,GG.kk);
//底部
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
  $('html,body').animate({
    scrollTop:'0'
  },800)
});
$('.friendLink ul li a').mouseenter(function(e){
  e.preventDefault();
  var div=$($(e.target).attr('href'));
  $(e.target).addClass('active').parent().siblings('li').children('a').removeClass('active');
  div.addClass('active').siblings().removeClass('active');
});
$(function(){
  $(window).scroll(function(){
    var scroll=$(window).scrollTop();
    var main=$('#houseList').offset().top;
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



