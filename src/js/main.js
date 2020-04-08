$(document).ready(function () {

    $('#heroCarousel').on('slide.bs.carousel', function (event) {

        // Get Current Slide Height and Use it for Future
        let thisIndex = event.from;
        let thisSlideId = "#hero-slider-" + (thisIndex + 1);
        let thisSlideHeight = normalizeSlideHeight($(this), thisSlideId);

        // console.log("This Slide Height is: " + thisSlideHeight);
        // Get Next Slide Height to compare which is smaller / larger
        let nextIndex = event.to;
        let nextSlideId = "#hero-slider-" + (nextIndex + 1);
        let nextSlideHeight = thisSlideHeight;
        $(nextSlideId + " > .slide-container").height(thisSlideHeight);

        // console.log(event.relatedTarget);
        let checkNextSlideHeight = normalizeSlideHeight($(this), nextSlideId);


        if ($(window).width() > 576) {
            if (checkNextSlideHeight > nextSlideHeight) {
                nextSlideHeight = checkNextSlideHeight;
            }
        } else {
            nextSlideHeight = "250px";
        }
        $(nextSlideId + " > .slide-container").height(nextSlideHeight);
        console.log("Check next slide height is: " + checkNextSlideHeight);
        console.log("Next Slide Height is: " + nextSlideHeight);

    });
    $('#heroCarousel').on('slid.bs.carousel', function (event) {

        let thisIndex = event.from;
        let thisSlideId = "#hero-slider-" + (thisIndex + 1);
        let thisSlideHeight = normalizeSlideHeight($(this), thisSlideId);
        console.log("On slid height: " + thisSlideHeight);
    });

    // Make sure heights are correct when resizing
    $(window).resize(function () {
        if ($(window).width() < 576) {
            $("#heroCarousel .carousel-item.active .slide-container").height(250).css("min-height","initial");
        } else {
            $("#heroCarousel .carousel-item.active .slide-container").height("initial");
            normalizeSlideHeight($("#heroCarousel"),"#hero-slider-1");
        }
    });

    // listen for small breakpoint, and then resize the hero slider section
    function normalizeSlideHeight(thisObj, slideId) {
        let thisSlideHeight;
        thisObj.each(function () {
            let items = $(slideId + " > .slide-container", this);
            // reset the height
            items.css("min-height", 0);
            // set the height
            let maxHeight = Math.max.apply(null,
                items.map(function () {
                    return $(this).outerHeight()
                }).get());
            items.css("min-height", maxHeight + "px");
            thisSlideHeight = maxHeight;
        });
        return thisSlideHeight;
    }
});