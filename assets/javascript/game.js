// Variables
var random_result;
var wins = 0;
var losses = 0;
var previous = 0;

window.onload=function(){

var reset = function () {

    $(".crystals").empty();

    var images = [
        'https://s.yimg.com/aah/yhst-71585368631737/round-cut-genuine-emerald-in-grade-aaa-24.jpg', 
        'https://products.riogrande.com/products/88326.jpg', 
        'https://s.yimg.com/aah/yhst-71585368631737/super-rich-red-ruby-loose-gemstone-in-round-shape-great-looking-red-fire-in-6-8-mm-1-52-carats-24.jpg', 
        'https://s.yimg.com/aah/yhst-71585368631737/loose-extremely-rich-intense-blue-sapphire-loose-gemstone-in-round-cut-intense-color-clarity-in-8-3-mm-3-02-carats-24.jpg'];

// Generates a random target score
random_result = Math.floor(Math.random() * 69 ) + 30;

$("#result").html('Target Score: ' + random_result);

// Generates four crystals
for(var i = 0; i < 4; i++) {
        
    var random = Math.floor(Math.random() * 11) + 1;
    console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
           "background-image" : "url('" + images[i] + "')",
           "background-size" : "cover"
        });
        $(".crystals").append(crystal);

    }
    $("#previous").html("Score: " + previous);
}

reset();

//gives each click of crystal value
$(document).on('click', ".crystal", function () {
   
    var num = parseInt($(this).attr('data-random'));
 
    previous += num;

    $("#previous").html("Score: " + previous);

    console.log(previous);

    // Calculates wins and losses
    if(previous > random_result){

        losses++;

        $("#losses").html("Losses: " + losses);

        previous = 0;

        reset();
    }
    else if(previous === random_result){

        wins++;

        $("#win").html("Wins: " + wins);

        previous = 0;

        reset();
    }

    console.log(previous);
});
}
