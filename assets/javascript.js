/*
Psuedo code - 
Buttons:
1. Create click event for the #submit button
2. Store button data in an array
3. The array should create a button in the #entries div with the character value from 
    the data in the input
4. Click event for the images
    On click those images should start or stop the movement

API:
1. Ajax get function for 10 images on click of button with character name in it
2. Display the 10 images in the #entries div

Additional Resources-
Bootstrap information for the button I want to use:
<button type="button" class="btn btn-dark giphyButtons">Dark</button>
Giphy Api Key:
8PrL8x52bnoL10zRpUHUhm8xCAXYQCef
Giphy link to play with:

*/

//array to hold the inputs from the user
var topics = [];

//click event for #submit button
$("#submit").on("click", function () {
    //prevents html from reloading since it is in the <form> element and would break the submit button functionality
    event.preventDefault();
    //var for the character input from user
    var character = $("#character").val().trim();
    topics.push(character);
    console.log("topics: ");
    console.log(topics);
    //did topics.length here to prevent duplicate IDs and therefore duplicate event listeners on unique buttons
    $("#entries").append("<button type='button' class='btn btn-dark giphyButtons m-1' id='" + topics.length + "'>" + character + "</button>");
    $("#character").val("");
    $("#" + topics.length).on("click", function () {
        //can't use .val in a button, have to use .text
        var characterButton = $(this).text().trim();
        console.log("inbuttonfunction");
        console.log(characterButton);
        $.ajax({
            type: 'GET',
            url: 'http://api.giphy.com/v1/gifs/search?q=' + characterButton + '&api_key=8PrL8x52bnoL10zRpUHUhm8xCAXYQCef&limit=10',
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                $("#gifs").prepend("<img src='" + response.data[i].images.fixed_height_still.url + "' alt='image error' id='"+characterButton+i+"'>");
            };
        });
    });
});