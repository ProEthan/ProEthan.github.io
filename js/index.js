// 闭包
(function(){
    // 1，调用选项卡
    tab();

    // 2，动态创建元素
    autoCreateImg();

    // 5, 窗口的滚动
    window.onscroll=function () {
        // 判断是否吸顶
        const scrollTopArr=___getPageScroll(),
            scrollTop=scrollTopArr[1],
            top_nav=$("top_nav"),
            zhu_img=$("zhu_img"),
            elevator=$("elevator");
        if(scrollTop>=85){
            top_nav.style.position="fixed";
            top_nav.style.top="0";
            zhu_img.style.marginTop="50px";
            elevator.style.display="block";
        }
        else{
            top_nav.style.position="";
            zhu_img.style.marginTop="0";
            elevator.style.display="none";
        }

        // 滚回顶部
        elevator.onclick=function () {
            document.documentElement.scrollTop=0;
        }
    }
})();

// 得到滚动距离
function ___getPageScroll() {
    let xScroll, yScroll;
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
    let arrayPageScroll = new Array(xScroll,yScroll);
    return arrayPageScroll;
}


// 动态创建元素
function autoCreateImg() {

}

// 选项卡
function tab(){
    // 1，获取需要的标签
    const allLis=$("tab_header").getElementsByTagName("li"),
        doms=$("tab_content").getElementsByClassName("dom");
    let lastOne=0;

    // 2，遍历监听
    for(let i=0;i<allLis.length;i++){
        let li=allLis[i];
        (function (i) {
            li.onmousedown=function () {
                // 1，清除样式
                allLis[lastOne].className="";
                doms[lastOne].style.display="none";
                // 2，设置选中
                this.className="current";
                doms[i].style.display="block";
                // 3，赋值
                lastOne=i;
            }
        })(i);
    }
}

// 获取id
function $(id){
    return typeof id === "string" ? document.getElementById(id):null;
}