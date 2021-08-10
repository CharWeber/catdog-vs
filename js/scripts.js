$("document").ready(function() {
  $("button#dog").click(function(){
    $("ul#doggo").prepend("<li><strong>BARK!</strong></li>");
    $("ul#catto").prepend("<li>*ANGRY* MEOW</li>");
  });
});