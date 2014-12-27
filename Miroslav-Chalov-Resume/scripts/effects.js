$(document).ready(function(){

    $("#contact-button").click(function(){
        $( "#contact-container" ).toggle('normal');
    })

    $("#skills-button").click(function(){
        $( "#skills" ).toggle('slow');
    })

    $("#rewards-button").click(function(){
        $( "#rewards" ).toggle('slow');
    })

    $("#education-button").click(function(){
        $( "#education" ).toggle('slow');
    })
    $("#personal-button").click(function(){
        $( "#personal" ).toggle('slow');
    })



    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });

})