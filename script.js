$(function () {
    /******* Tried out using the .load() method *****/

    // let loadedContent = $('#content').load('test.html #london').hide().fadeIn(2000).css("border", "1px solid #000");
    // // $('#content').load('test.html #london');
    // // $('#content').hide();
    // // $('#content').fadeIn(2000);
    // // $('#content').css("border", "1px solid #000");
    // console.log("Selecting the content element on the page: ", $("#content"));
    // console.log("Loaded content return value: ", loadedContent);

    /******* using the $.get() method with a callback *****/

    // jQuery.get()
    // $.get("test.html", function (data) {
    //     console.log("The data returned is: ", data);
    //     $("#content").html(data);
    // }, "html");

    /******* using the $.get() method without a callback *****/

    // let getObject = $.get("test.html").done(function (data) {
    //     console.log("The data returned is in the done method: ", data);
    //     $("#content").html(data);
    // }).fail(function () {
    //     console.log("Something went terribly wrong :(");
    // }).always(function () {
    //     console.log("this is always going to show up");
    //     // this will alwys run
    // });
    // console.log("This is the jqxhr object: ", getObject);

    /******* using the $.getJSON() method with a callback *****/

    // let getJsonObject = $.getJSON("test.json", function (data) {
    //     // jQuery.each
    //     $.each(data.cities, function (key, val) {
    //         console.log("data key: ", key, " and data value: ", val);

    //         $('#content').append(`<div id="${val.name.toLowerCase()}" class="city">
    //             <div class="name">${val.name}</div>
    //             <div class="population">${val.population}</div>
    //             <div class="citymap"><img src="${val.imageURL}"></div>
    //         </div>`);
    //     });
    // });

    // console.log("The getjson object: ", getJsonObject);

    /******* using the $.getJSON() method without a callback *****/

    let getJsonObject = $.getJSON("test.json").done(function (data) {
        // jQuery.each
        $.each(data.cities, function (key, val) {
            console.log("data key: ", key, " and data value: ", val);

            $('#content').append(`<div id="${val.name.toLowerCase()}" class="city">
                <div class="name">${val.name}</div>
                <div class="population">${val.population}</div>
                <div class="citymap"><img src="${val.imageURL}"></div>
            </div>`);
        });
    });

    console.log("The getjson object: ", getJsonObject);

    // init();
});


// function init() {
//  DO NOT PUT YOUR READY FUNCTION INSIDE OF ANOTHER FUNCTION LIKE THIS
//     $(function () {
//         $.get();
//     });
// }
// init();
