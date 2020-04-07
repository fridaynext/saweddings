$(document).ready(function () {

    /* Want to allow a specific size
     *  1. Start desktop, go smaller
     *  2. Start mobile, go bigger
     *  3. Desktop -> make smaller -> make bigger
     */

    // $('#hero-slider-1 .d-flex').css('height', '477px');
    // Set height of second slide, when carousel changes
    $('#heroCarousel').on('slide.bs.carousel', function (event) {
        let thisIndex = event.from;
        let thisSlideId = "#hero-slider-" + (thisIndex + 1);
        let thisSlideHeight = $(thisSlideId + " > .slide-container").height();
        $(thisSlideId + " > .slide-container").height(thisSlideHeight);

        // check if #hero-spacer-1 (or #hero-spacer-x) is visible, and if so, set height to 275px
        if($("#hero-spacer" + (thisIndex+1)).css("display") !== none) {
            // then set height to 275px
        }
        console.log($(thisSlideId + " > .slide-container").innerHeight());;

        let nextIndex = event.to;
        let nextSlideId = "#hero-slider-" + (nextIndex + 1);
        // check if inner height is bigger than the height we're assigning, so we don't smush too much stuff inside a div
        let nextSlideInnerHeight = $(nextSlideId + " .hero-text-content").innerHeight();
        console.log($('.right-border-saw').innerHeight());
        // console.log(nextSlideInnerHeight);
        // let totalHeight = 0;
        // $(nextSlideId + " .hero-text-content div").each(function (index, element) {
        //     console.log(element.valueOf());
        // });
        // console.log(totalHeight);
        if(nextSlideInnerHeight >= thisSlideHeight) {
            thisSlideHeight = innerHeight;
        }
        $(nextSlideId + " > .slide-container").height(thisSlideHeight);


    });
    // $('#heroCarousel').on('slid.bs.carousel',function (event) {
    //     // Reset height to 'auto', so resizing window will resize the hero
    //     let thisIndex = event.to;
    //     let thisSlideId = "#hero-slider-" + (thisIndex + 1);
    //     $(thisSlideId + " > .hero-slider").height("fill-container");
    // });
    // listen for small breakpoint, and then resize the hero slider section

});