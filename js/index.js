/**jQuery _______________________________________________________________*/

$(document).ready(function() {
    

    $('#botonAction').click(function(){

    $('#botonAction')
    .fadeOut(3000)

    $('.textB')
    .css("color","red")
    .delay(1000)
    .hide(1000)


    $("#containerMsj")
    .fadeOut(2000)
    });
})