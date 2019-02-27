+(function(){
  var Locate=$(".location");
  Locate.on("click",function(){
    var locationmain=$("#location-main");
    if(locationmain.css("opacity")=="0"){
      locationmain.addClass("block1");
      setTimeout(function(){
        "use strict";
        locationmain.css({
          "opacity":"1",
          "top":"80px"
        })
      },100)
    }
    else if(locationmain.css("opacity","1")){
      locationmain.removeClass("block1");
      setTimeout(function(){
        "use strict";
        locationmain.css({
          "opacity":"0",
          "top":"100px"
        })
      },100)
    }
  })})();
$(document).mouseup(function(e){
  var locationmain=$("#location-main");
  if($(e.target).parents("#location-main").length==0&&$(e.target).attr("id")!="location-main"&&locationmain.hasClass('block1')){
    locationmain.css({
      "opacity":"0",
      "top":"100px"
    });
    setTimeout(function(){
      "use strict";
      locationmain.removeClass("block1");
    },100)
  }
});
$("#location-main ul").click(function(e){
  if(e.target.nodeName=="A"){
    var locationmain=$("#location-main");
    if(locationmain.css("opacity")=="1"){
      locationmain.css({
        "opacity":"0",
        "top":"100px"
      })
    }
    locationmain.removeClass('block1');
    var a=$(e.target).html();
    $("div.location a").html(a);
  }
});
+(function(){
  var closeLocation=document.getElementById("location-main-closed");
  closeLocation.addEventListener("click",function(){
    this.parentNode.style.opacity="0";
    this.parentNode.style.top="100px";
    $(this).parent().removeClass('block1');
  })})();