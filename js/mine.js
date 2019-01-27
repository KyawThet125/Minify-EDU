$(".meburger").click(function () {
    if ($(".sidebar").hasClass("sidebar-on")) {
        $(".sidebar").removeClass("sidebar-show");
        $(".sidebar").removeClass("sidebar-on");
        $(".sidebar").addClass("sidebar-hide");
        $(".meburger").removeClass("fa-arrow-left");
        $(".meburger").addClass("fa-list");
    } else {
        $(".sidebar").removeClass("sidebar-hide");
        $(".sidebar").addClass("sidebar-show");
        $(".sidebar").addClass("sidebar-on");

        $(".meburger").addClass("fa-arrow-left");
        $(".meburger").removeClass("fa-list");
    }
});