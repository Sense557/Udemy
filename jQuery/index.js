
// ⬇️⬇️⬇️⬇️⬇️for Placing jQuery & js on the head condition code⬇️⬇️⬇️⬇️⬇️⬇️

// $(document).ready(function(){
//     $("h1").css("color", "red");
// });
// ⬇️⬇️⬇️⬇️for beginner we face some problem adding all css properties in jquery⬇️⬇️⬇️⬇️⬇️⬇️

// $("h1").css("color", "red");
// $("h1").css("color", "yellow");
// $("h1").css("font-size", "5rem");
// ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️


// ⬇️⬇️⬇️ADD CSS in jQuery⬇️⬇️⬇️⬇️
//solution for the jQuery for CSS codes
//firse create .big-title{} in css add properties 
// then add that class in to the jQuery

$("h1").addClass("big-title margin-50");
// ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️


$("h1").text("Bye");

// $("button").text("<em>dont touch me<\em>");
// $("button").html("<em>dont touch me<\em>");
// ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

console.log($("img").attr("src"));

$("a").attr("href", "http://www.bing.com");
// ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️


//-----------Using the jQuery color change---------------
// $("h1").click(function()
// {
//     $("h1").css("color", "purple")
// });

//---------Lengthy methods of addListener for color change without using the jQuery------------
// for(var i=0; i<5; i++)
// {
//     document.querySelectorAll("button")[i].addEventListener("click", function()
//     {
//         document.querySelector("h1").style.color = "purple";
//     });
// }


//------converting the above methods to jQuery--------
// $("button").click(function()
// {
//     $("h1").css("color","purple");
// });

// ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

// $(document).keypress(function(event)
// {
//     $("h1").text(event.key);
// });

// ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

// $(document).on("click",function()
// {
//     $("h1").css("color","purple");
// });

// $("h1").on("mouseover",function()
// {
//     $("h1").css("color","purple");
// });

// $("h1").on("copy",function()
// {
//     $("h1").css("color","purple");
// });


// $("h1").on("paste",function()
// {
//     $("h1").css("color","purple");
// });

// ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

//color change  on clicking
// $("button").on("click", function()
// {
//     $("h1").css("color", "red");
// })

// // hiding effect 
// $("button").on("click", function()
// {
//     $("h1").hide();
// })


// // fadeout effect
// $("button").on("click", function()
// {
//     $("h1").fadeOut();
// })


// // toggle effect
// $("button").on("click", function()
// {
//     $("h1").Toggle();
// })


// // slide effect
// $("button").on("click", function()
// {
//     $("h1").slideUp();
// });


// // Toggle effect
// $("button").on("click", function()
// {
//     $("h1").toggle();
// });


// // slideToggle effect
// $("button").on("click", function()
// {
//     $("h1").slideToggle();
// });



// // //  animate opacity effect
// $("button").on("click", function()
// {
//     $("h1").animate({opacity: 0.5});
// });


// //  animate margin in % effect
// $("button").on("click", function()
// {
//     $("h1").animate({margin: "20%"});
// });


// //  animate margin in integer effect
// $("button").on("click", function()
// {
//     $("h1").animate({margin: 20});
// });


// //  animate margin in px effect
// $("button").on("click", function()
// {
//     $("h1").animate({margin: 20px});
// });


//  animate chaining effect
$("button").on("click", function()
{
    $("h1").slideUp().slideDown().fadeOut().fadeIn().animate({opacity: 0.5}.animate({opacity: 1}));
});
