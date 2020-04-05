(() => {
    let     upButton        = document.querySelector("#icon-up"),
            downButton      = document.querySelector("#icon-down"),
            mainNav         = document.querySelector(".mainNav");

    var     words           = document.querySelector(".words");


        function scrollToTop(e) {
            e.preventDefault();
            TweenLite.to(window, 0.7, {scrollTo:{y:mainNav}, autoKill: false});
        }

        function scrollToNext(e) {
            e.preventDefault();
            TweenLite.to(window, 1.7, {scrollTo:{y:mainNav}, autoKill: false});
        }

        // hero fade to black (credit css tricks)
        $(document).ready(function() {
            $(window).scroll(function(event) {
                let scroll = $(this).scrollTop();
                let opacity = 1 - (scroll / 400);
                if (opacity >= 0) {
                    $('.projectHeroCon section').css('opacity', opacity);
                }
            });
        });

        // mouse movement (credit jsfiddle)
        $(window).mousemove(function(event) {
            $(".words").css({
              "margin-left": -(event.pageX * 0.02),
              "margin-top": -(event.pageY * 0.02)
            });
          });
          

        upButton.addEventListener('click', scrollToTop);
        downButton.addEventListener('click', scrollToNext);

})();