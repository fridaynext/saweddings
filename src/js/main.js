$(document).ready(function () {
    // Set height of second slide, when carousel changes
    $('#heroCarousel').on('slide.bs.carousel', function (event) {

        let index = event.from;
        let thisSlideHeight = $(this).css("height");
        $(this).children().each(function (index) {
            if (index < 1) {
                $(this).children().each(function (indexB) {
                    if (indexB < 1) {
                        $(this).children().each(function (indexC) {
                            thisSlideHeight = $(this).css("height");
                            $(this).css("height", thisSlideHeight);
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
    })
});