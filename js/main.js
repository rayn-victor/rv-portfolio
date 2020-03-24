(() => {
    let upButton        = document.querySelector("#icon-up");
        downButton      = document.querySelector("#icon-down");
        mainNav         = document.querySelector(".mainNav");

        function scrollToTop(e) {
            e.preventDefault();
            TweenLite.to(window, 0.7, {scrollTo:{y:mainNav, offsetY: 20}, autoKill: false});
        }

        function scrollToNext(e) {
            e.preventDefault();
            TweenLite.to(window, 1.7, {scrollTo:{y:mainNav, offsetY: 20}, autoKill: false});
        }

        // hero fade to black
        $(document).ready(function() {
            $(window).scroll(function(event) {
                let scroll = $(this).scrollTop();
                let opacity = 1 - (scroll / 400);
                if (opacity >= 0) {
                    $('.projectHeroCon section').css('opacity', opacity);
                }
            });
        });

        upButton.addEventListener('click', scrollToTop);
        downButton.addEventListener('click', scrollToNext);

})();