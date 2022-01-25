$(function () {
    let xhr = new XMLHttpRequest;

    // request for the html file
    // xhr.open('GET', 'test.html', true);

    // request for the xml file
    // xhr.open('GET', 'test.xml', true);

    // request for the json file
    xhr.open('GET', 'test.json', true);

    xhr.onload = function () {
        if (xhr.status === 200) // successfully retrieved content
        {
            // process the data if it's html
            // let el = document.getElementById("ajax-data-wrapper");
            // el.innerHTML = xhr.responseText; // throw the html directly on the page

            // process data if it's xml
            // let el = document.getElementById("ajax-data-wrapper");
            // let xmlData = xhr.responseXML;  // we need to store the data somewhere so we can convert it to html
            // // console.log(xmlData.getElementsByTagName('city')[0]);

            // let city = document.createElement("div");
            // let name = document.createElement("div");
            // let nameText = document.createTextNode(xmlData.getElementsByTagName('city')[0].children[0].textContent)
            // let population = document.createElement("div");
            // let populationText = document.createTextNode(xmlData.getElementsByTagName('city')[0].children[1].textContent)

            // name.appendChild(nameText);
            // population.appendChild(populationText);
            // city.appendChild(name);
            // city.appendChild(population);
            // el.append(city);

            // process data if it's json
            let jsonData = xhr.responseText; // get the json value that came back from the server
            let jsonObject = JSON.parse(jsonData);
            console.log("The raw json data is: ", jsonData);
            console.log("The json object data is: ", jsonObject);
            $('#ajax-data-wrapper').html("<div class='city'><div class='name'>" +
                jsonObject.cities[0].name +
                "</div><div class='citymap'><img src='" +
                jsonObject.cities[0]["imageURL"] + "'></div></div>");

            // process the json data somehow

            let newJsonDataAsAString = JSON.stringify(jsonObject);
            console.log("The new json stringified data looks like: ", newJsonDataAsAString);
        }
        else {
            console.log("something has gone terribly wrong");
        }
    };
    xhr.send("search=arduino");

});


// // $(document).ready(function () {
// $(function () {

//     console.log("Got here");

//     let $hotLi = $('li.hot');
//     $hotLi.hide().fadeIn(2000);

//     // $('li.hot').hide().fadeIn(2000);

//     let $title = $('.title');
//     $title.hide();

//     let $author = $('#author');
//     $author.css("background-color", "red");
//     $author.css({
//         'font-family': 'Arial',
//         'color': "#999999"
//     });

//     let $first = $('ul#list li:first-child');
//     $first.css("background-color", "green");

//     console.log("list item html", $('li').html());
//     console.log("list item text", $('li').text());

//     $('li').html("<strong>Updated!</strong>");
//     // $('li').text("All the same");

//     // $('li').each(function () {
//     //     let ids = this.id;
//     //     $(this).append(" " + ids);
//     // });

//     $('li').on('click', function (e) {
//         console.log(this.id, "event object is: ", e);
//         $(this).animate({
//             "opacity": 0.0,
//             "padding-left": "+=80",
//         },
//             500
//         );
//     });


//     $('ul#list').css("border", "1px solid #000").hide().slideDown(2000);
// });
