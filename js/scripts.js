$("document").ready(function() {
  $("button#dog").click(function(){
    $("ul#doggo").prepend("<li><strong>BARK!</strong></li>");
    $("ul#catto").prepend("<li>*ANGRY* MEOW</li>");
    });
  $("button#cat").click(function(){
    $("ul#doggo").prepend("<li><em>sad howl</em></li>");
    $("ul#catto").prepend("<li><strong> HISSSSSSS</strong></li>");
    });
  $("ul").click(function(){
    $(this).after("<div id='pig'><img src='img/babe.jpg'></div>");
    });
  $("div#pig").children("img").first().click(function() {
    $(this).remove();
    });
});