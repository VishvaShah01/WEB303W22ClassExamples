$(function () {
    // navigator.geolocation.getCurrentPosition(success, () => {
    //     console.log("Please enable geolocation in order to see your coordinates");
    // });

    // function success(position) {

    //     console.log("Position object: ", position);
    //     console.log("latitude: ", position.coords.latitude, ", longitude: ", position.coords.longitude);
    //     $("div").html(position.timestamp);

    // }

    // localStorage.setItem("food", "apple");
    let foodItem = localStorage.getItem("food");
    console.log(foodItem);

    let apple = {
        type: "fruit",
        name: "apple",
        taste: "sweet"
    };
    localStorage.setItem("foodObject", JSON.stringify(apple));
    let foodJSONStringObject = localStorage.getItem("foodObject");
    let foodObject = JSON.parse(foodJSONStringObject);
    console.log("my food object: ", foodObject.name);

    $('#prizes').accordion();

});


