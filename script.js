// $(document).ready(function () {
$(function () {

    console.log("Got here");

    let $hotLi = $('li.hot');
    $hotLi.hide().fadeIn(2000);

    // $('li.hot').hide().fadeIn(2000);

    let $title = $('.title');
    $title.hide();

    let $author = $('#author');
    $author.css("background-color", "red");
    $author.css({
        'font-family': 'Arial',
        'color': "#999999"
    });

    let $first = $('ul#list li:first-child');
    $first.css("background-color", "green");

    console.log("list item html", $('li').html());
    console.log("list item text", $('li').text());

    $('li').html("<strong>Updated!</strong>");
    // $('li').text("All the same");

    // $('li').each(function () {
    //     let ids = this.id;
    //     $(this).append(" " + ids);
    // });

    $('li').on('click', function (e) {
        console.log(this.id, "event object is: ", e);
        $(this).animate({
            "opacity": 0.0,
            "padding-left": "+=80",
        },
            500
        );
    });


    $('ul#list').css("border", "1px solid #000").hide().slideDown(2000);
});
