console.log("项目成功");
define(["jquery", "jquery-cookie"], function($) {
    // 头部添加移入移出
    function topHover() {
        $(".header-top-bar .top-bar-left li").mouseenter(function() {
            $(this).find("a").css({ color: "#ffffff" })
        })
        $(".header-top-bar .top-bar-left li").mouseleave(function() {
            $(this).find("a").css({ color: "#cccccc" })
        })
        $(".header-top-bar .top-bar-right li").mouseenter(function() {
            $(this).find("a").css({ color: "#ffffff" })
        })
        $(".header-top-bar .top-bar-right li").mouseleave(function() {
            $(this).find("a").css({ color: "#cccccc" })
        })
        $(".header-top-bar .top-bar-right .wechata").mouseenter(function() {
            $(this).find(".wechat").css({ display: "block" })
        })
        $(".header-top-bar .top-bar-right .wechata").mouseleave(function() {
            $(this).find(".wechat").css({ display: "none" })
        })
    }


    // 下载头部数据
    function navDownload() {
        $.ajax({
            type: "get",
            data: "../data/nav.json",
            success: function(result) {
                var navArr = result;
                // navArr.unshift({ title: "首页" })
                for (var i = 0; i < navArr.length; i++) {
                    $(` <li class="header-nav-list-item"><a href=" ">${navArr[i].title}</a>
                    </li>`).appendTo(".header-nav-list .header-nav-list-ul")
                }
            },
            error: function(msg) {
                console.log(msg);

            }
        })
    }
    // 给头部nav添加移入移出
    function topNavHover() {
        $(".header-nav-list .header-nav-list-ul ").on("mouseenter", ".header-nav-list-item", function() {
            $(this).find("a").css({ color: "red" })
            $(this).css({ borderBottom: "4px solid #ff0000" })
        })
        $(".header-nav-list .header-nav-list-ul ").on("mouseleave", ".header-nav-list-item", function() {
            $(this).find("a").css({ color: "#333333" })
            $(this).css({ borderBottom: "none" })
        })
    }






    function preDef(ev) {
        if (ev.preventDefault) {
            ev.preventDefault();
        } else {
            window.event.returnValue = false;
        }

    }
    return {
        topHover: topHover,
        topNavHover: topNavHover,
        navDownload: navDownload,

    }

})