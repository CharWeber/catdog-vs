$("document").ready(function() {
  $("button#dog").click(function(){
    $("ul#doggo").prepend("<li><strong>BARK!</strong></li>");
    $("ul#catto").prepend("<li>*ANGRY* MEOW</li>");
    });
  $("button#cat").click(function(){
    $("ul#doggo").prepend("<li><em>sad howl</em></li>");
    $("ul#catto").prepend("<li><strong> HISSSSSSS</strong></li>");
    });
  $("h1").click(function(){
    $("ul#doggo").append("<li><img src='img/babe.jpg'></li>");
    $("ul#doggo").children("li").click(function() {
      $(this).remove();
      });
    });
});