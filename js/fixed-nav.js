if(!window.jQuery){
  throw new Error("此导航条插件需要依赖jQuery")
}
jQuery.fn.fixedNav=function(){
  $(function(){
  $(window).scroll(function(){
    var scroll=$(window).scrollTop();
    var main=$('#main').offset().top;
    var hand=$('.forth-floor').offset().top;
    var fixed=$('#fixed-top i');
    //手显示出来
    var $hand=$('.forth-floor').find('.head-photo');
    if(scroll>main-300){
      var header=$('.header-top');
      header.find('.fixed-nav').css('display','block');
      header.addClass('fixed');
      fixed.addClass('show');
    }
    else if(scroll<main-300){
      var header=$('.header-top');
      header.find('.fixed-nav').css('display','none');
      header.removeClass('fixed');
      fixed.removeClass('show');
    }
    if(scroll>hand+200){
      $hand.removeClass('show');
    }
    else if(scroll>hand-500){
      $hand.addClass('show');
    }else{
      $hand.removeClass('show');
    }
  })
  })
};
$(document).fixedNav();