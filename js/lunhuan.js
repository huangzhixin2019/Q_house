if(!window.jQuery){
  throw new Error("此轮播插件需要jQuery支持")
}
jQuery.fn.carousel=function(){
  var ul=this;
  var photos=this.children('li');
  var length=this.children().length-1;
  var lists=this.next().children('li');
  var interval=3000;
  var duration = 500;
  var next=1;
  var widthsum=$(window).innerWidth();
  var width=widthsum;
  if(width<1200) width=1200;
  var sliver=width;
  var timer=setInterval(function(){
    console.log(width);
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
    sliver=next*width;
    next++;
    ul.stop().animate({
      'left':-sliver
    },duration,function(){
      if(next>length){
        next=1;
        sliver=width;
        $(lists[next]).prev().children('a').addClass('active');
        $(lists[next]).prev().siblings().children('.active').removeClass('active');
        ul.css('left','0');
      }

    });
  };
};
$('.banner-photos ul.lunhuan').carousel();