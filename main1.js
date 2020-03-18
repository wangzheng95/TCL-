require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "login": "login"
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



require(["login"], function(login) {
    login.login()
})