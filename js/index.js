let oNav = document.querySelector(".nav");
let oLi = document.querySelectorAll(".section4>ul>li");
let oCurrentMenu=document.querySelector(".myMenu>ul>.current");
new fullpage('#fullpage', {
    // 设置每一屏的背景颜色
    sectionsColor: ['#f00', '#0f0', '#00f', '#c9cbd5','#000000'],
    // 显示指示器
    navigation: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','lastPage'],
    menu: '#myMenu',
    onLeave: function (origin, destination, direction) {
        if (destination.isFirst) {
            oNav.style.top = "40px";

        } else {
            oNav.style.top = "0";
        }

    }



})
for(let i=0;i<oLi.length;i++){
    let item=oLi[i];
    item.onmouseenter=function (){
        oLi[0].style.width = "20%";
        oLi[1].style.width = "20%";
        oLi[2].style.width = "20%";
        this.style.width = "60%";
        this.style.backgroundPosition = "0";
    }
    item.onmouseleave=function (){
        oLi[0].style.width = "33%";
        oLi[1].style.width = "33%";
        oLi[2].style.width = "34%";
        if(i===0){
            this.style.backgroundPosition = "26% 0";
        }
        if(i===1){
            this.style.backgroundPosition = "10% 0";
        }
        if(i===2){
            this.style.backgroundPosition = "73% 0";
        }
    }
}