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