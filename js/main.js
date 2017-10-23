$(document).ready(function () {
/*gallery*/
    $('.previews a').click(function () {
        var largeImage = $(this).attr('data-full');
        var largeImage1 = $(this).attr('id');
        console.log(largeImage1);
        $('.selected').removeClass();
        $(this).addClass('selected');
        $('.full img').hide();
        $('.full img').attr('src', largeImage);
        $('.full img').attr('id', largeImage1);
        $('.full img').fadeIn();
    });

    /* end gallery*/
});





    /* popup */
    $(".full img").click(function () {

        var slide_number = $(this).attr("id");
        if (slide_number == undefined)
            slide_number = 0;
        else
            slide_number = slide_number.replace("image", "");
        var content = $(".carousel-inner");
        var title = $(".modal-title");
        content.empty();
        title.empty();
        var id = this.id;
        var repo = $(".previews .item").clone();
        console.log(repo);
        var active = repo.eq(slide_number);
        active.addClass("active");
        title.html(active.find("img").attr("title"));
        content.append(repo);
        // show the modal
        $("#modal-gallery").modal("show");
    });
    $("#slider_zoom").click(function () {
        var slide_number = $(".full img").attr("id");
        if (slide_number == undefined)
            slide_number = 0;
        else
            slide_number = slide_number.replace("image", "");
        var content = $(".carousel-inner");
        var title = $(".modal-title");
        content.empty();
        title.empty();
        var id = this.id;
        var repo = $(".previews .item").clone();
        console.log(repo);
        var active = repo.eq(slide_number);
        active.addClass("active");
        title.html(active.find("img").attr("title"));
        content.append(repo);
        // show the modal
        $("#modal-gallery").modal("show");
    });
    $('.carousel').carousel({
        interval: false
    });
    /*end  popup */
//scroll footer
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 350) {
            $('footer').fadeIn();
        } else {
            $('footer').fadeOut();
        }


});
