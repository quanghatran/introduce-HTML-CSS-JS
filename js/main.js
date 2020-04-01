//collapse menu 
// đang bị lỗi 
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("header .list-menu ul").toggleClass("showing");
    });
});