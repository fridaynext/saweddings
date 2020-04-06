$(document).ready(function () {

    // $('#hero-slider-1 .d-flex').css('height', '477px');
    // Set height of second slide, when carousel changes
    $('#heroCarousel').on('slide.bs.carousel', function (event) {
        let thisIndex = event.from;
        let thisSlideHeight = $(this).css("height");
        $(this).children().each(function (index) {
            if (index < 1) {
                $(this).children().each(function (indexB) {
                    if (indexB < 1) {
                        $(this).children().each(function (indexC) {
                            if(indexC < 1) {
                                $(this).children().each(function (indexD) {
                                    if(indexD === thisIndex) {
                                        thisSlideHeight = $(this).css("height");
                                        $(this).css("height", thisSlideHeight);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

        let nextSlideId = "#" + event.relatedTarget.firstElementChild.id;
        $(nextSlideId).children().each(function (index) {
            if (index < 1) {
                $(this).css("height", thisSlideHeight);
            }
        });
    });
    $('#heroCarousel').on('slid.bs.carousel',function (event) {
        // Reset height to 'auto', so resizing window will resize the hero
        let thisIndex = event.from;
        $(this).children().each(function (index) {
            if (index < 1) {
                $(this).children().each(function (indexB) {
                    if (indexB < 1) {
                        $(this).children().each(function (indexC) {
                            if(indexC < 1) {
                                $(this).children().each(function (indexD) {
                                    if(indexD === thisIndex) {
                                        $(this).css("height", "fit-content");
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    });
    // listen for small breakpoint, and then resize the hero slider section

});