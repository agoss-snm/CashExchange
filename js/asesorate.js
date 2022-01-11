$(document).ready(doStuff);
 
function doStuff(){
   
  $('.image1').mouseenter(function(){
    $(this).addClass('opacity')
    $(this).animate({width: '450px'}, 300)
  });  
  
  $('.image1').mouseleave(function(){
    $(this).removeClass('opacity')
    $(this).animate({width: '20%'}, 300)
  });  
  
}