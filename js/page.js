/**
 * Created by zxm on 2017/3/31.
 */
$.fn.extend({
    "initPage":function(listCount,currentPage,fun){
        var maxshowpageitem = $(this).attr("maxshowpageitem");
        if(maxshowpageitem!=null&&maxshowpageitem>0&&maxshowpageitem!=""){
            page.maxshowpageitem = maxshowpageitem;
        }
        var pagelistcount = $(this).attr("pagelistcount");
        if(pagelistcount!=null&&pagelistcount>0&&pagelistcount!=""){
            page.pagelistcount = pagelistcount;
        }

        var pageId = $(this).attr("id");
        page.pageId=pageId;
        if(listCount<0){
            listCount = 0;
        }
        if(currentPage<=0){
            currentPage=1;
        }
        page.setPageListCount(listCount,currentPage,fun);

    }
});
var  page = {
    "pageId":"",
    "maxshowpageitem":5,//最多显示的页码个数
    "pagelistcount":8,//每一页显示的内容条数
    /**
     * 初始化分页界面
     * @param listCount 列表总量
     */
    "initWithUl":function(listCount,currentPage){
        var pageCount = 1;
        if(listCount>=0){
            var pageCount = listCount%page.pagelistcount>0?parseInt(listCount/page.pagelistcount)+1:parseInt(listCount/page.pagelistcount);
        }
        var appendStr = page.getPageListModel(pageCount,currentPage);
        $("#"+page.pageId).html(appendStr);
    },
    /**
     * 设置列表总量和当前页码
     * @param listCount 列表总量
     * @param currentPage 当前页码
     */
    "setPageListCount":function(listCount,currentPage,fun){
        listCount = parseInt(listCount);
        currentPage = parseInt(currentPage);
        page.initWithUl(listCount,currentPage);
        page.initPageEvent(listCount,fun);
        fun(currentPage);
    },
    "initPageEvent":function(listCount,fun){
        $("#"+page.pageId +">li[class='pageItem']").on("click",function(){
            page.setPageListCount(listCount,$(this).attr("page-data"),fun);
            var pageNo=$(this).attr('page-data');
            loadPage(pageNo);
        });
    },
    "getPageListModel":function(pageCount,currentPage){
        var prePage = currentPage-1;
        var nextPage = currentPage+1;
        var prePageClass ="pageItem";
        var nextPageClass = "pageItem";
        if(prePage<=0){
            prePageClass="pageItemDisable";
        }
        if(nextPage>pageCount){
            nextPageClass="pageItemDisable";
        }
        var appendStr ="";
        appendStr+="<li class='"+prePageClass+"' page-data='1' page-rel='firstpage'>首页</li>";
        appendStr+="<li class='"+prePageClass+"' page-data='"+prePage+"' page-rel='prepage'>&lt;上一页</li>";
        var miniPageNumber = 1;
        if(currentPage-parseInt(page.maxshowpageitem/2)>0&&currentPage+parseInt(page.maxshowpageitem/2)<=pageCount){
            miniPageNumber = currentPage-parseInt(page.maxshowpageitem/2);
        }else if(currentPage-parseInt(page.maxshowpageitem/2)>0&&currentPage+parseInt(page.maxshowpageitem/2)>pageCount){
            miniPageNumber = pageCount-page.maxshowpageitem+1;
            if(miniPageNumber<=0){
                miniPageNumber=1;
            }
        }
        var showPageNum = parseInt(page.maxshowpageitem);
        if(pageCount<showPageNum){
            showPageNum = pageCount
        }
        for(var i=0;i<showPageNum;i++){
            var pageNumber = miniPageNumber++;
            var itemPageClass = "pageItem";
            if(pageNumber==currentPage){
                itemPageClass = "pageItemActive";
            }

            appendStr+="<li class='"+itemPageClass+"' page-data='"+pageNumber+"' page-rel='itempage'>"+pageNumber+"</li>";
        }
        appendStr+="<li class='"+nextPageClass+"' page-data='"+nextPage+"' page-rel='nextpage'>下一页&gt;</li>";
        appendStr+="<li class='"+nextPageClass+"' page-data='"+pageCount+"' page-rel='lastpage'>尾页</li>";
       return appendStr;

    }
};

//加载房子列表
function loadPage(page){
    var price=$('.price .orange').attr('data-price').split(',');
    var position=$('.area .orange').attr('data-position');
    var v=sessionStorage['val'];  //每次加载页面都读取一次sessionSotrage
    if(v){
        position=v;
        sessionStorage.removeItem('val');
    }
    var priceMin=price[0];
    var priceMax=price[1];
    $.ajax({
        url:'php/houseList.php',
        data:{
            pageNo:page,
            priceMin:priceMin,
            priceMax:priceMax,
            position:position
        },
        success:function(data){
            var html=``;
            for(var r=0;r<data.length;r++){
                html+=`<li class="clear">
            <a href="${data[r].url}">
              <img src="img/second_house/loading-map.gif" data-src="${data[r].jpg}"/>
            </a>
            <div class="middle clear">
              <a href="${data[r].url}">${data[r].i1}</a>
              <ul class="clear">
                <li>${data[r].i2}</li>
                <li>${data[r].i3}</li>
                <li>${data[r].i4}</li>
                <li>${data[r].i5}</li>
                <li>${data[r].i6}</li>
              </ul>
              <p>
                ${data[r].i7}
                <a href="#">${data[r].i8}</a>
                <a href="#">${data[r].i9}</a>
                ${data[r].i10}
              </p>
              <div>
                <a href="#">${data[r].i11}</a>
              </div>
              <span>${data[r].i12}</span>
              <span>${data[r].i13}</span>
              <span>${data[r].i14}</span>
              <span>${data[r].i15}</span>
              <span>${data[r].i16}</span>
            </div>
            <div class="housePrice">
              <b>${data[r].i17}</b>${data[r].i18}
              <p>${data[r].i19}</p>
            </div>
            <p class="comparison">
              <i></i>
              <span>${data[r].i20}</span>
            </p>
</li>`
            }
            $('#houseList').html(html);
        }
    })
}
loadPage(1);

//切换选房条件 //区域 地铁 学区查询
$('.toggleC').on('click','a',function(e){
    e.preventDefault();
    $(this).addClass('orange').siblings('.orange').removeClass('orange');
    $('[page-rel="firstpage"]').click();
    loadPage(1);
});