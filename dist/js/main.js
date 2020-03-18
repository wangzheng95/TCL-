require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "header": "header"
    },
    shim: {
        // 设置依赖关系
        "jquery-cookie": ["jquery"],
        // 某一个模块不遵从AMD
        "parabola": {
            exports: "_"
        }
    }
})



require(["header"], function(header) {
    header.topHover();
    header.topNavHover();
    header.navDownload();
    header.bannerTab();
    header.siderList();
    header.siderNavHover();
    header.goodsTab();
})