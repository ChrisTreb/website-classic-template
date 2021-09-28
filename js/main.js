$(document).ready(function() {
    console.log('JQUERY OK !');

    // MENU BURGER
    var menuOpen = false;

    // Comportement du menu
    $('#burger-menu').click(function() {
        $('nav').slideToggle('1000');

        if (menuOpen === false) {
            menuOpen = true;
            $(this).css('transform', 'scale(0.9)');
            $('.black-cover').css('right', '0');
        } else {
            menuOpen = false;
            $(this).css('transform', 'scale(1)');
            $('.black-cover').css('right', '-100vw');
        }
    });

    // Ferme le menu quand on clique en dehors
    $('.black-cover').click(function() {
        if (menuOpen === true) {
            $('nav').slideToggle('1000');
            menuOpen = false;
            $('.black-cover').css('right', '-100vw');
            $('#burger-menu').css('transform', 'scale(1)');
        }
    });

    // Mouvement des éléments du header

    function displayStripe() {
        $('.img-div').css('min-height', '100vh');
        $('.title').fadeIn(1000);
    }

    // if (loaded === true) {
    //     window.setTimeout(displayStripe, 1000);
    // }

    window.setTimeout(displayStripe, 1000);

    // Appear on scroll
    /* Every time the window is scrolled ... */
    $(window).scroll(function() {

        /* Check the location of each desired element */
        $('.hidden-block').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 1000);
            }
        });

        $('.colored-col-y').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                function fillColumn() {
                    $('.colored-col-x').animate({ 'min-height': '100%' }, 1000);
                }

                $(this).animate({ 'max-width': '100%' }, 1000);
                window.setTimeout(fillColumn, 1000);
            }
        });

        $('.img-project').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'margin-left': '0' }, 1000);
            }
        });
    });

});