if(!window.jQuery){
  throw new Error("此轮播插件需要jQuery支持")
}
jQuery.fn.carousel=function(){
  var ul=this;
  var photos=this.children('li');
  var lists=this.next().children('li');
  var interval=3000;
  var duration = 500;
  var next=1;
  var width=$(window).innerWidth();
  var sliver=width;
  var timer=setInterval(function(){
    lunhuan()
  },interval);
  $(lists).hover(function(){
    var i=lists.index(this);//获取当前li在列表的下标
    if(timer!=null){
      next=i;
      sliver=next*width;
      lunhuan();
      clearInterval(timer);
      timer=null;
    }
    else{
      next=i;
      sliver=next*width;
      lunhuan();
      timer=setInterval(function(){
        lunhuan()
      },interval)
    }
  },function(){
    if(timer==null){
      timer=setInterval(function(){
        lunhuan()
      },interval)
    }
  });
  $(photos).hover(function(){
    if(timer!=null){
      clearInterval(timer);
      timer=null;
    }
  },function(){
    if(timer==null){
      timer=setInterval(function(){
        lunhuan()
      },interval)
    }
  });
  function lunhuan(){
    lists.children('a').eq(next).addClass('active');
    $(lists[next]).siblings().children('.active').removeClass('active');
    ul.stop().animate({
      'left':-sliver
    },duration);
    next++;
    sliver=next*width;
    if(next>4){
      sliver=0;
      next=0
    }
  };
};
$('.banner-photos ul.lunhuan').carousel();