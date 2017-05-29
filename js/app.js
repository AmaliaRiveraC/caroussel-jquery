$(document).ready(function() {
  $(".nextLink").click(function(e){
    var currentActiveImage = $(".img-shown");
    var nextActiveImage = currentActiveImage.next();
    
    if(nextActiveImage.length == 0 ) {
      nextActiveImage = $(".carrousel-inner img").first();
    }
    
    currentActiveImage.removeClass("img-shown").addClass("img-hidden").css("z-index", -10);
    nextActiveImage.addClass("img-shown").removeClass("img-hidden").css("z-index", 20);
    $(".carrousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 1);
    e.preventDefault();
  });
  $(".previousLink").click(function(e) {
    var currentActiveImage = $(".img-shown");
    var previousActiveImage = currentActiveImage.prev();
    
    if(previousActiveImage.length == 0){
      previousActiveImage = $(".carrousel-inner img").last();
    }
    
    currentActiveImage.removeClass("img-shown").addClass("img-hidden").css("z-index", -10);
    previousActiveImage.addClass("img-shown").removeClass("img-hidden").css("z-index", 20);
    $(".carrousel-inner img").not([currentActiveImage, previousActiveImage]).css("z-index", 1);
    e.preventDefault();
  });
  
  $("#uno").click(function(){
    $("#1").addClass("img-shown").removeClass("img-hidden");
    $("#2").removeClass("img-shown").addClass("img-hidden");
    $("#3").removeClass("img-shown").addClass("img-hidden");
    $("#4").removeClass("img-shown").addClass("img-hidden");
    $("#5").removeClass("img-shown").addClass("img-hidden");
  })
  
  $("#dos").click(function() {
    $("#2").addClass("img-shown").removeClass("img-hidden");
    $("#1").removeClass("img-shown").addClass("img-hidden");
    $("#3").removeClass("img-shown").addClass("img-hidden");
    $("#4").removeClass("img-shown").addClass("img-hidden");
    $("#5").removeClass("img-shown").addClass("img-hidden");
  });
  $("#tres").click(function() {
    $("#3").addClass("img-shown").removeClass("img-hidden");
    $("#1").removeClass("img-shown").addClass("img-hidden");
    $("#2").removeClass("img-shown").addClass("img-hidden");
    $("#4").removeClass("img-shown").addClass("img-hidden");
    $("#5").removeClass("img-shown").addClass("img-hidden");
  });
  
  $("#cuatro").click(function() {
    $("#4").addClass("img-shown").removeClass("img-hidden");
    $("#1").removeClass("img-shown").addClass("img-hidden");
    $("#2").removeClass("img-shown").addClass("img-hidden");
    $("#3").removeClass("img-shown").addClass("img-hidden");
    $("#5").removeClass("img-shown").addClass("img-hidden");
  });
  
  $("#cinco").click(function() {
    $("#5").addClass("img-shown").removeClass("img-hidden");
    $("#1").removeClass("img-shown").addClass("img-hidden");
    $("#2").removeClass("img-shown").addClass("img-hidden");
    $("#3").removeClass("img-shown").addClass("img-hidden");
    $("#4").removeClass("img-shown").addClass("img-hidden");
  });
  
  
});


