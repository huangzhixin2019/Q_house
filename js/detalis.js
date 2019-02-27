

//底部友情链接切换
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
  scrollTop:0
 },800)
});
$('.friendLink ul li a').mouseenter(function(e){
 e.preventDefault();
 var div=$($(e.target).attr('href'));
 $(e.target).addClass('active').parent().siblings('li').children('a').removeClass('active');
 div.addClass('active').siblings().removeClass('active');
});

//返回顶部
$(function(){
 $(window).scroll(function(){
  var scroll=$(window).scrollTop();
  var main=$('.main').offset().top;
  var fixed=$('#fixed-top i');
  if(scroll>main-300){
   fixed.addClass('show');
  }
  else if(scroll<main-300){
   fixed.removeClass('show');
  }

 })
});
//房贷计算器和税费计算器切换
$('.calculator-header').on('click','a',function(e){
   e.preventDefault();
   var className=$(this).attr('href');
   $(this).addClass('active').siblings('.active').removeClass('active');
   $(className).addClass('active').siblings('.clear').removeClass('active');
});
$('div.calculator-main ul > li > div').each(function(i,b){
   $(b).click(function(){
    if(!($(this).children('ul').hasClass('active'))){
     $('div.calculator-main ul > li > div > ul.active').removeClass('active');
     $(this).children('ul').addClass('active');
     $(this).children('ul').on('click','li',function(){
      var html=$(this).children('p').html();
      var span=$(b).children('span').html(html);
      console.log($(this).parent());
     })
    }else{
     $(this).children('ul').removeClass('active');
    }
   })
});
//全局监听
$(function(){
 $(window).scroll(function(){
  var main=$(window).scrollTop();
  var show=$('.opinion-main').offset().top;
  var $change=$('div.quickAction ul li');
  if(main>show-130){
   console.log(main-show+130);
   $('.quickAction').addClass('show');
   $('.fixed-right').css('display','block');
   $('.fixed-right').css('top',main-show+180);
  }else{
   $('.quickAction').removeClass('show');
   $('.fixed-right').css('display','none')
  }
  if(main+400>$('#housing-resources').offset().top){
   $('.fixed-right').css('display','none')
  }
  $change.each(function(i,b){
    var classNAME=$(b).children('a').attr('data-href');
    var offsetTop=$(classNAME).offset().top;
    if(main>offsetTop-150){
     $(b).addClass('active').siblings('.active').removeClass('active')
    }
    $(b).hover(function(){
     if(!($(b).hasClass('active'))){
      $(b).addClass('hover');
     }
    },function(){
     $(b).removeClass('hover')
    })
  })
 })
})
+function(){var map = new BMap.Map("allmap");            // 创建Map实例
 var mPoint = new BMap.Point(114.044014,22.558441);
 map.enableScrollWheelZoom();
 map.centerAndZoom(mPoint,15);

 var circle = new BMap.Circle(mPoint,800,{fillColor:"yellow", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
 map.addOverlay(circle);
 var local =  new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});
 local.searchNearby('公交车',mPoint,800);
 //点击切换
 $('.ambitus-choose').on('click','a',function(e){
  e.preventDefault();
  var html=$(this).html();
  if(html=='交通'){
   html='公交站';
  }
  local.searchNearby(html,mPoint,800);
  $(this).addClass('active').siblings('.active').removeClass('active');
 })
//放大和缩小的功能
 var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
 var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
 var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
 /*缩放控件type有四种类型:
  BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/

//添加控件和比例尺
 map.addControl(top_right_navigation);
//禁止放大缩小
 map.disableScrollWheelZoom(true)}();

//全景
var panorama = new BMap.Panorama('panorama'); //默认为显示导航控件
panorama.setPosition(new BMap.Point(114.044014,22.558441));

//周边配套和全景地图切换
$('div.ambitus-header a').click(function(e){
 e.preventDefault();
 $(this).addClass('active').siblings('.active').removeClass('active');
 var show=$(this).attr('href');
 $(show).addClass('active').siblings('.a').removeClass('active');
});
