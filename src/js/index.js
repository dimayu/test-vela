(function ($) {
    $(document).ready(function () {

        //Menu button on click event
        $('.mobile-nav-button').on('click', function () {
            // Toggles a class on the menu button to transform the burger menu into a cross
            $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1");
            $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2");
            $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3");

            // Toggles a class that slides the menu into view on the screen
            $('.mobile-menu').toggleClass('mobile-menu--open');
            return false;
        });

        //tabs
        $('.tabgroup > div.tab-hidden').hide();
        $('.tabgroup > div.tab-hidden:first-of-type').show();
        $('.tabs a').click(function (e) {
            e.preventDefault();
            var $this = $(this),
                tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('rel');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('.tab-hidden').hide();
            $(target).show();
        });

        //Submenu
        $(".sub-menu").hide();
        $(".overlay").hide();
        $(".sub-menu-parent a").click(function () {
            $(".sub-menu").slideToggle();
            $(".nav").toggleClass("box-shadow");
            $(".overlay").slideToggle();
        });

        var speed = 400;

        $(".js-subMenu").on("click", function () {
            // Get next element
            $(this).children("ul")
                // Toggle answer
                .slideToggle(speed)
                // Select all other answers
                .siblings(".js-subMenu__item__hidden")
                // Close other answers
                .slideUp();

        });

        $(".js-open-modal").click(function (e) {
            e.preventDefault();
            dataModal = $(this).attr("data-modal");
            $("#" + dataModal).css({
                display: "block"
            });
            // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
        });

        $(".js-close-modal, .modal-bg").click(function () {
            $(".modal").css({
                display: "none"
            });
            // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
        });

        //Mask phone
        jQuery(function ($) {
            $(".phone").mask("+7 (999) 999-99-99");
        });

    });
})(jQuery);