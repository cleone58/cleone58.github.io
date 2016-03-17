$(document).ready(function(){
  $('.fa-chevron-up').click(function () {
        $('body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

$(function() {                       //run when the DOM is ready
  $("img.port").click(function() {  //use a class, since your ID gets mangled
    $(this).addClass("zoom");      //add the class to the clicked element
  });
});





// https://dribbble.com/shots/920939-Portfolio-Redesign-2013-early-stage?list=searches&tag=portfolio&offset=22
