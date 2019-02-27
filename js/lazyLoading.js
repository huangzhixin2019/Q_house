if(!window.jQuery){
  console.log('此懒加载插件需要jQuery的支持')
}
jQuery.fn.lazyL=function(){
  var parent=this;
    $(window).scroll(function(){
    var imgs=parent.find('img');
    var main;
    imgs.each(function(i,b){
      main=$(b).offset().top;
      var $src=$(b).attr('data-src');
      if(isScroll(main)){
        $(b).attr('src',$src);
      }
    })
  })
};
function isScroll(main){
    var scroll = $(window).scrollTop();
    var winH = $(window).height();
    if (main < scroll + winH - 200) {
      return true;
    } else {
      return false;
    }
}
$('#houseList').lazyL();




