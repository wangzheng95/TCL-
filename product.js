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
            url: "../data/nav.json",
            success: function(result) {
                var navArr = result;
                navArr.unshift({ title: "首页" })
                for (var i = 0; i < navArr.length; i++) {
                    $(` <li class="header-nav-list-item"><a href=" ">${navArr[i].title}</a>
                    </li>`).appendTo(".header-nav-list .header-nav-list-ul");
                    var node = $(`<ul class="header-hide-ul" style="display:${i==1 ? "block":"none"}"></ul>`);
                    node.appendTo(".header-hide .header-hide-bar");
                    var navChildsArr = navArr[i].childs;
                    if (navArr[i].childs) {
                        for (var j = 0; j < navChildsArr.length; j++) {
                            $(` <li class="header-hide-item">
                            <a href="">
                                <img src="${navChildsArr[j].img}" alt="">
                                <p class="instro">${navChildsArr[j].instro}</p>
                                <p class="price">${navChildsArr[j].price}</p>
                            </a>
                        </li>`).appendTo(node)
                        }
                    }
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
                // $(this).css({ borderBottom: "4px solid #ff0000" })
            $(this).css({ borderBottom: "4px solid #ff0000" })
            var index = $(this).index() - 1;
            $(".header-hide").css({ display: "block" });
            $(".header-hide .header-hide-bar").find(".header-hide-ul ").eq(index).css({ display: "block" }).siblings(".header-hide-ul").css({ display: "none" })

        })
        $(".header-nav-list .header-nav-list-ul ").on("mouseleave", ".header-nav-list-item", function() {
            $(this).find("a").css({ color: "#333333" })
            $(this).css({ borderBottom: "none" })
        })
        $(".header-nav-bar .header-nav-list").mouseleave(function() {
            $(".header-hide").css({ display: "none" });
        })

    }
    // 给详情图添加点击
    function imgClick() {
        $(".goods-img .goods-img-small ").on("click", ".small-a", function() {
            $(this).css({ border: "2px solid red" }).siblings(".small-a").css({ border: "2px solid #ccc" })
            var index = $(this).index();
            $(".goods-img-big .img-big").eq(index).css({ display: "block" }).siblings(".img-big").css({ display: "none" })
            return false
        })
    }
    return {
        topHover: topHover,
        topNavHover: topNavHover,
        navDownload: navDownload,
        imgClick: imgClick,
    }
})