(function ($) {
    $(document).ready(function () {
        // Isotope filters
        //-----------------------------------------------
        if ($('.isotope-container').length > 0 || $('.masonry-grid').length > 0 || $('.masonry-grid-fitrows').length > 0) {
            $(window).load(function () {
                $('.masonry-grid').isotope({
                    itemSelector: '.masonry-grid-item',
                    layoutMode: 'masonry'
                });
                $('.masonry-grid-fitrows').isotope({
                    itemSelector: '.masonry-grid-item',
                    layoutMode: 'fitRows'
                });
                $('.isotope-container').fadeIn();
                var $container = $('.isotope-container').isotope({
                    itemSelector: '.isotope-item',
                    layoutMode: 'masonry',
                    transitionDuration: '0.6s',
                    filter: "*"
                });
                // filter items on button click
                $('.filters').on('click', 'ul.nav li a', function () {
                    var filterValue = $(this).attr('data-filter');
                    $(".filters").find("li.active").removeClass("active");
                    $(this).parent().addClass("active");
                    $container.isotope({ filter: filterValue });
                    return false;
                });
            });
        };

    }); // End document ready

})(this.jQuery);
