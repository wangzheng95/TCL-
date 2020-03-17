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

    // 轮播图实现
    function bannerTab() {
        var aBtns = $(".banner-img-circle").find("a");
        var iNow = 1; //当前显示图片的下标
        var timer = null;
        // 点击圆圈切换图片
        aBtns.click(function() {
                iNow = $(this).index() + 1
                tab();
                return false; //阻止默认行为
            })
            // 自动轮播
        timer = setInterval(function() {
            iNow++;
            tab();
        }, 4000);
        // 封装一个切换的函数
        function tab() {
            $(".img-circle").removeClass("active").eq(iNow - 1).addClass("active");
            if (iNow == 4) {
                $(".img-circle").eq(0).addClass("active");
            }
            $(".banner-img").animate({ left: -iNow * 1520 }, 1, function() {
                if (iNow == 4) {
                    $(".banner-img").css("left", -1520);
                    iNow = 1;
                }
                if (iNow == 0) {
                    $(".banner-img").css("left", 3 * -1520);
                    iNow = 3;
                }
            })
        }
        // 移入移出
        $(".banner").mouseenter(function() {
                clearInterval(timer);
            }).mouseleave(function() {
                timer = setInterval(function() {
                    iNow++;
                    tab();
                }, 2000);
            })
            // 添加左右切换
        $(".banner-img-left").click(function() {
            iNow--;
            tab();
            return false; //阻止默认行为
        })
        $(".banner-img-right").click(function() {
            iNow++;
            tab()
            return false; //阻止默认行为
        })
    }
    // 左侧列表数据下载
    function siderList() {
        $.ajax({
            type: "get",
            url: "data/banner.json",
            success: function(result) {
                var bannerArr = result;
                for (var i = 0; i < bannerArr.length; i++) {
                    var node = $(`<li class="banner-nav-item"> <a href=""><span class="banner-hide-item-title">${bannerArr[i].title}</span><p>&gt;</p></a></li>`)
                    node.appendTo(".banner-nav .banner-nav-ul")
                    var node1 = $(`<div class="banner-hide" ></div>`)
                    node1.appendTo(node)
                    var bannerListArr = bannerArr[i].childs;
                    for (var j = 0; j < bannerListArr.length; j++) {
                        $(` <div class="banner-hide-item">
                            <a href="">
                                <img src="${bannerListArr[j].img}" alt="">
                                <div class="item-box">
                                    <span class="instro">${bannerListArr[j].instro}</span>
                                    <span class="price">${bannerListArr[j].price}</span>
                                </div>
                            </a>
                        </div>`).appendTo(node1)
                    }
                }
            },
            error: function(msg) {
                console.log(msg);

            }
        })
    }
    // 左侧列表添加移入移出
    function siderNavHover() {
        $(".banner-nav .banner-nav-ul").on("mouseenter", ".banner-nav-item", function() {
            $(this).find(".banner-hide-item-title").css({ color: "red" })
            $(this).css({ backgroundColor: "#f1f1ee" })
            var index = $(this).index();
            $(".banner-nav-item").eq(index).find(".banner-hide").css({ display: "block" })
            $(".banner-nav-item").eq(index).siblings(".banner-nav-item").find(".banner-hide").css({ display: "none" })

        })

        $(".banner-nav .banner-nav-ul").on("mouseleave", ".banner-nav-item", function() {
            $(this).find(".banner-hide-item-title").css({ color: "#ffffff" })
            $(this).css({ backgroundColor: "rgba(0,0,0,0.5)" })
        })
        $(".banner-nav .banner-nav-ul").mouseleave(function() {
            $(".banner-hide").css({ display: "none" });
        })

    }


    return {
        topHover: topHover,
        topNavHover: topNavHover,
        navDownload: navDownload,
        bannerTab: bannerTab,
        siderList: siderList,
        siderNavHover: siderNavHover,
    }
})