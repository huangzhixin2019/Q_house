if(!window.jQuery){
  throw new Error("此插件需要jQuery的支持")
}
jQuery.fn.toggle=function(){
  var toggleI=this.siblings('i');
  var moveL=154;
  var $ul=this.children('ul');
  var $lis=this.find('li');
  var $big=$('div.house-photo .photo-left>div.toggleBig>img');
  var show=4;
  var lilength=$lis.length;
  this.on('click','li',function(){
    var index=$lis.index(this);
    $(this).addClass('active').siblings('.active').removeClass('active');
    var src=$(this).children('img').attr('data-src');
    $big.attr('src',src);
      if(index!=0&&index!=lilength-1){
        toggleI.each(function(){
          $(this).addClass('active');
        })
      }else if(index==0){
        toggleI.eq(0).removeClass('active')
      }else{
        toggleI.eq(1).removeClass('active')
      }
  });
  this.siblings('i').click(function(){
    var $active=$('div.photo-choose div.photo-toggle ul li.active');
    var index=$lis.index($active);
      if($(this).hasClass('next')){
        var now=parseInt($ul.css('right'))+moveL;
          if(index!=lilength-1){
            var $nextLi=$active.next('li');
            if(index>2&&now<=(lilength-show)*moveL){
              $ul.css('right',now);
            }
            $(this).siblings('i').addClass('active');
            $active.removeClass('active').next('li').addClass('active');
            var src=$nextLi.children('img').attr('data-src');
            $big.attr('src',src);
              if(index==lilength-2){
                $(this).removeClass('active');
              }
          }
      }else{
        if(index!=0){
          var now1=parseInt($ul.css('right'))-moveL;
          var $prevLi=$active.prev('li');
          if(index<lilength-3&&parseInt($ul.css('right'))!=0){
            $ul.css('right',now1)
          }
          $(this).siblings('i').addClass('active');
          $active.removeClass('active').prev('li').addClass('active');
          var src1=$prevLi.children('img').attr('data-src');
          $big.attr('src',src1);
          if(index==1){
            $(this).removeClass('active');
          }
        }
      }
  })
};
$(function(){
  $('div.photo-left div.toggleBig').on('click','i',function(){
    var toggleI=$('div.w-1190 div.photo-left div.photo-choose>i');
    var moveL=154;
    var $ul=$('div.photo-choose div.photo-toggle ul');
    var $lis=$('div.photo-choose div.photo-toggle ul li');
    var $big=$('div.house-photo .photo-left>div.toggleBig>img');
    var show=4;
    var lilength=$lis.length;
    var $active=$('div.photo-choose div.photo-toggle ul li.active');
    var index=$lis.index($active);
    if($(this).hasClass('next')){
      var now=parseInt($ul.css('right'))+moveL;
      if(index!=lilength-1){
        var $nextLi=$active.next('li');
        toggleI.eq(0).addClass('active');
        if(index>2&&now<=(lilength-show)*moveL){
          $ul.css('right',now);
        }
        $(this).siblings('i').addClass('active');
        $active.removeClass('active').next('li').addClass('active');
        var src=$nextLi.children('img').attr('data-src');
        $big.attr('src',src);
        if(index==lilength-2){
          $(this).removeClass('active');
          toggleI.eq(1).removeClass('active');
        }
      }
    } else{
      if(index!=0){
        var now1=parseInt($ul.css('right'))-moveL;
        var $prevLi=$active.prev('li');
        toggleI.eq(1).addClass('active');
        if(index<lilength-3&&parseInt($ul.css('right'))!=0){
          $ul.css('right',now1)
        }
        $(this).siblings('i').addClass('active');
        $active.removeClass('active').prev('li').addClass('active');
        var src1=$prevLi.children('img').attr('data-src');
        $big.attr('src',src1);
        if(index==1){
          $(this).removeClass('active');
          toggleI.eq(0).removeClass('active');
        }
      }
    }
  })
})
$('div.photo-choose div.photo-toggle').toggle();