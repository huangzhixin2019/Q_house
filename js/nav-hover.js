if(!window.jQuery){
  throw new Error('此导航条插件需要jQuery支持')
};
jQuery.fn.navHover=function(){
  this.children('a').mouseenter(function(){
      var a= $(this).siblings("div");
      a.css("display","block");
      setTimeout(function(){
        "use strict";
        a.css({
          "opacity":"1",
          "top":"50px"
        })
      },100);
  });
  this.mouseleave(function(){
    var a= $(this).children("div");
      a.css("display","none");
      setTimeout(function(){
        "use strict";
        a.css({
          "opacity":"0",
          "top":"80px"
        })
      },100)
  })
};
$('header div.header-top-main ul li').navHover();