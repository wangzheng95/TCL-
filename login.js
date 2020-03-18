console.log("项目成功");
define(["jquery", "jquery-cookie"], function($) {
    function login() {
        $(".zhi .yy").click(function() {
            $(".lg .zct1").css({ display: "none" });
            $(".lg .zct2").css({ display: "block" });
            return false
        })
        $(".zct2 .zct  .tj").click(function() {
            $(".lg .zct2").css({ display: "none" });
            $(".zct3").css({ display: "block" })
        })
        $(".zct3 .zct .dd").click(function() {
            $(".zct3").css({ display: "none" })
            $(".lg .zct1").css({ display: "block" });
            return false;
        })

    }



    return {
        login: login,
    }
})