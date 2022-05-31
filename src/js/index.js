(function ($) {
    $(document).ready(function () {

        //Submenu
        $(".sub-menu").hide();
        $(".sub-menu-parent a").click(function () {
            $(this).parent(".sub-menu-parent").children("ul").slideToggle("200");
        });

    });
})(jQuery);