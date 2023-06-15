// $(document).ready(function() {  

// }); Esta linea de codigo permite cargar codigo jQuery o JS una vez que el documento ha terminado de cargar

// $(function() {

// }); Esta es la versión resumida de lo anterior la cual hace exactamente lo mismo que la anterior

$(function(){
    $("h2").css({"background-color":"red"});
    $("h3").css({"background-color":"green"});
    $("#titular").css({"background-color":"tomato"});
    $("button").click(function(){
        $("h3").hide();
    });
    $("button").dblclick(function(){
        $("h3").show();
    })
    $("h2").mouseenter(function(){
        $("h1").fadeOut();
    });
    $("h2").mouseleave(function(){
        $("h1").fadeIn();
    });
})