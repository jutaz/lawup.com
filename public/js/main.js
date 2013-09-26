$(document).ready(function () {
    $(".navbar").pinned({
        bounds: 25, // when to become sticky
        scrolling: 0, // position during scroll
        mobile: false // should support mobile 
    }, function () {
        $(".navbar").css('width', '100%');
        $(".navbar").css('margin-left', '0px');
        $(".navbar").css('margin-right', '0px');
    }, function () {
        // UNPINNED
    });
});