require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "product": "product"
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



require(["product"], function(product) {
    product.topHover();
    product.topNavHover();
    product.navDownload();
    product.imgClick();
})