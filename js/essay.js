// 闭包
(function(){
    // 1, 窗口的滚动
    window.onscroll=function () {
        var scrollTopArr=___getPageScroll();
        var scrollTop=scrollTopArr[1];
        if(scrollTop>=85){
            $("elevator").style.display="block";
        }
        else{
            $("elevator").style.display="none";
        }

        // 滚回顶部
        $("elevator").onclick=function () {
            document.documentElement.scrollTop=0;
        }
    }
})();

// 得到滚动距离
function ___getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
        yScroll = self.pageYOffset;
        xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
        yScroll = document.documentElement.scrollTop;
        xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
        yScroll = document.body.scrollTop;
        xScroll = document.body.scrollLeft;
    }
    arrayPageScroll = new Array(xScroll,yScroll);
    return arrayPageScroll;
};

// 获取id
function $(id){
    return typeof id === "string" ? document.getElementById(id):null;
}