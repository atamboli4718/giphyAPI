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
var topics=[];

//function to create the button with the character input
// function buttonCreation () {

//     for(var i=0; i<topics.length; i++) {
//         console.log(topics[i])
//     $("#entries").html("<button type='button' class='btn btn-dark giphyButtons' id='"+ topics[i] + "'>" + topics[i] +"</button>");
//     }
// }

//click event for #submit button
$("#submit").on("click",function(){
    //var for the character input from user
    var character = $("#character").val().trim();
    topics.push(character);
    console.log("topics: ");
    console.log(topics);
    $("#entries").append("<button type='button' class='btn btn-dark giphyButtons m-1' id='"+ character + "'>" + character +"</button>");
});

//USE PREPEND
$(".giphyButton").on("click",function(){
    var characterButton = $(this);
    $.ajax({
        type:'GET',
        url:'http://api.giphy.com/v1/gifs/search?q=' + characterButton.val().trim() + '&api_key=8PrL8x52bnoL10zRpUHUhm8xCAXYQCef',
    }).then(function(response){
        console.log(response);
    })

});