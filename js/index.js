+(function(){var Locate=$("#location");
Locate.on("click",function(){
    var locationmain=$("#location-main");
    if(locationmain.css("opacity")=="0"){
        locationmain.addClass("block1");
        setTimeout(function(){
            "use strict";
            locationmain.css({
                "opacity":"1",
                "top":"60px"
            })
        },100)
    }
    else if(locationmain.css("opacity","1")){
        locationmain.removeClass("block1");
        setTimeout(function(){
            "use strict";
            locationmain.css({
                "opacity":"0",
                "top":"80px"
            })
        },100)
    }
})})();
$(document).mouseup(function(e){
    var locationmain=$("#location-main");
    if($(e.target).parents("#location-main").length==0&&$(e.target).attr("id")!="location-main"){
        locationmain.removeClass("block1");
        setTimeout(function(){
            "use strict";
            locationmain.css({
                "opacity":"0",
                "top":"80px"
            })
        },100)
    }
});
$("#location-main ul").click(function(e){
    if(e.target.nodeName=="A"){
        var locationmain=$("#location-main");
        if(locationmain.css("opacity")=="1"){
            locationmain.css({
                "opacity":"0",
                "top":"80px"
            })
    }
        e.preventDefault();
        var a=$(e.target).html();
        $("#location span").html(a);
    }
});
+(function(){
    var closeLocation=document.getElementById("location-main-closed");
    closeLocation.addEventListener("click",function(){
    this.parentNode.style.opacity="0";
    this.parentNode.style.top="100px";
    $(this).parent().removeClass('block1')
})})();
$("#search1").click(function(){
   $("html,body").animate({scrollTop:370},500);
});
$(".search p").on("click",function(e){
    var span=$(e.target);
    span.parent().children("i").css("left",a(span));
    var active=$(".search p .active");
    if(!(span.hasClass(".active"))){
        active.removeClass("active");
        span.addClass("active");
    }
});
function a(e){
    "use strict";
    switch(e.attr("class")){
        case "span0":return "15px";
        case "span1":return "99px";
        case "span2":return "174px";
        case "span3":return "256px";
        case "span4":return "348px"
    }
}
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
//上下滚动轮播
$(function(){
    var cut=0;
    var next=1;
    var interval=3000;
    var duration = 1000;
    var as=$('div.header-main div.scroll a');
    var timer=setInterval(function(){
        up();
    },interval)
    $(as).hover(function(){
        clearInterval(timer);
        timer=null;
    },function(){
        if(timer==null)
        timer=setInterval(function(){
            up()
        },interval)
    })
    function up(){
        $(as[cut]).animate({
            'top':'-30px'
        },duration,function(){
            $(this).css('top','30px')
        });
        $(as[next]).animate({
            'top':'0'
        },duration);
        cut=next;
        next++;
        if(next==as.length-1){
            next=0;
        }
    }
})

$('div.fixed-search > span').click(function(event){
    if(!($(this).hasClass('active'))){
        $(this).next().css('display','block');
        $(this).addClass('active');
    }else{
        $(this).next().css('display','none');
        $(this).removeClass('active');
    }
    event.stopPropagation();
})
$('div.fixed-search > ul.toggle-down').on('click','a',function(e,event){
    e.preventDefault();
    $(this).parents('ul').css('display','none').prev().removeClass('active');
    var html=$(this).html();
    html+= `<i class="icon"></i>`;
    $(this).parents('ul').prev().html(html);
})
$('body').click(function(){
    $('div.fixed-search > ul.toggle-down').css('display','none');
    $('div.fixed-search > span').removeClass('active');
});
+(function(){var ok=0;
$(window).scroll(function(){
    var canvasTop=$('#date').offset().top;
    var scrollT=$(window).scrollTop();
    if(scrollT>canvasTop-500&&ok==0){
        ok=1;
        $.ajax({
            type:'GET',
            url:'php/canvas.php',
            success:function(data){
                //canvas绘图
                // 基于准备好的dom，初始化echarts实例
                var mouth=[];
                var bar=[];
                var line=[];
                for(var i=0;i<data.length;i++){
                    mouth[i]=data[i].mouth;
                    bar[i]=data[i].bar;
                    line[i]=data[i].line
                }
                var myChart = echarts.init(document.getElementById('date'));
                // 指定图表的配置项和数据
                var option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    legend: {
                        data:['成交套数','成交均价走势'],
                        bottom:'20px',
                        textStyle:{
                            color:'#5C647A'
                        }
                    },
                    xAxis:
                        {
                            type: 'category',
                            data: mouth,
                            axisPointer: {
                                type: 'shadow'
                            },
                            axisLabel:{
                                textStyle:{
                                    color:'#5C647A'
                                }
                            }
                        }
                    ,
                    yAxis: [
                        {
                            type: 'value',
                            name: '价格',
                            min: 0,
                            max: 100000,
                            interval: 20000,
                            axisLabel: {
                                textStyle:{
                                    color:'#5C647A'
                                }
                            },
                            nameTextStyle:{
                                color:'#5C647A'
                            }
                        },
                        {
                            type: 'value',
                            name: '套数',
                            min: 0,
                            max: 10000,
                            interval: 2000,
                            axisLabel: {
                                textStyle:{
                                    color:'#5C647A'
                                }
                            },
                            nameTextStyle:{
                                color:'#5C647A'
                            }
                        }
                    ],
                    //设置柱状图折线图
                    series: [
                        {
                            name:'成交均价走势',
                            type:'line',
                            yAxisIndex: 1,
                            data:line,
                            itemStyle: {
                                normal:{
                                    color:'#ff9911'
                                }
                            }
                        },
                        {
                            name:'成交套数',
                            type:'bar',
                            data:bar,
                            itemStyle: {
                                normal:{
                                    color:'#383F51'
                                }
                            },
                            barWidth:'40'
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        })
    }
})})();
//搜索框
$('#search1').keyup(function(){
    var val=$(this).val();
    sendVal(val);
});
$('div.search-box button').click(function(){
    var val=$('#search1').val();
    sessionStorage['val']=val;
    if(sessionStorage['have']=='flase'){
        location.href='secondHand_house.html';
    }else{
        location.href='noFind.html';
    }
    sessionStorage.removeItem('have');
});
function sendVal(val){
    $.ajax({
        type:'POST',
        data:{
            val:val
        },
        url:'php/searchBox.php',
        success:function(data){
            if(data===1){
                sessionStorage['have']='true';
            }else{
                sessionStorage['have']='flase';
                var html='';
                for(var i=0;i<data.length;i++){
                    html+=`
                       <li>
                           <a href="house_details.html">${data[i].i1}</a>
                       </li>
                    `
                }
                $('#searchBox').html(html);
            }
        }
    })
}
//判断是否在数据库中有这个内容
function isIn(val){
    $.ajax({
        type:'GET',
        DATA:''
    })
}
