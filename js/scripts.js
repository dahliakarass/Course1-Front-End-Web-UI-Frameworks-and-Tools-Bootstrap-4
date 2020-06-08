console.log('script.js says "I\'m here"');

$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
            $("#carouselButton").removeClass('btn-danger');
            $("#carouselButton").addClass('btn-success');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
            $("#carouselButton").removeClass('btn-success');
            $("#carouselButton").addClass('btn-danger');
        }
    });
    $("#LoginButton").click(function () {
        $('#LoginModal').modal('toggle');
    });
    $("#ReserveButton").click(function () {
        $('#ReservationModal').modal('toggle');
    });
    // $(document).ready(function(){
    //     $('[data-toggle="tooltip"]').tooltip();
    // });
});

