//collapse menu 
// đang bị lỗi 
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("header .list-menu ul").toggleClass("showing");
    });
});


// 
// $(function() {
    
//     // dislay or hide the menu if the user resize the window
//     $(window).resize(function() {
//         var wi = $(window).width();
//         if (wi >= 641) {
//             $('#topbar-menu').css({'display':'block'});
//           		  $('#topbar-menu-icon').removeClass('ion-close-round');
//             $('#topbar-menu-icon').addClass('ion-navicon-round');
//         }
//         else {
//             $('#topbar-menu').css({'display':'none'});
//             $('#topbar-menu-icon').removeClass('ion-close-round');
//             $('#topbar-menu-icon').addClass('ion-navicon-round');
//         }
//     });
    
//     // Change the menu icon, and show or hide the menu
//     $('#topbar-menu-icon').click(function(){
//         if ($('#topbar-menu').css('display') == 'none') {
//             $('#topbar-menu').css({'display':'block'});
//             $('#topbar-menu-icon').removeClass('ion-navicon-round');
//             $('#topbar-menu-icon').addClass('ion-close-round');
//         } 
//         else {
//             $('#topbar-menu').css({'display':'none'});
//             $('#topbar-menu-icon').removeClass('ion-close-round');
//             $('#topbar-menu-icon').addClass('ion-navicon-round');
//         }
//     });
// });