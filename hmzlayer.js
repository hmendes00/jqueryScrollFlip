
function initZLayer(){
  $(".z-layer-container").css("position", "relative");
    var lastMult = 1;
    $(".z-layer-obj").each(function(){
        $(this).css("position", "absolute");
    });
    var isRunning = false;
    $(".z-layer-obj").hide();
    $(".z-layer-obj:last").addClass("z-layer-actived").show();

    $(".z-layer-container").on("mousewheel", function(e) {
      var e = window.event || e; // old IE support
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      var $this = this;
      if(!isRunning){
        isRunning = true;
        setTimeout(function(){

          var actLayer = $($this).find(".z-layer-actived");
          var nextIndex = actLayer.index() + (delta*-1);
          if(($($this).find(".z-layer-obj").length -1) == actLayer.index() && delta == -1){
            nextIndex = 0;
          }else if(actLayer.index() == 0 && delta == 1){
            nextIndex = $($this).find(".z-layer-obj").length -1;
          }

          $($($this).find(".z-layer-obj").get(actLayer.index())).removeClass("z-layer-actived");
          $($this).find(".z-layer-obj").slideUp();
          $($($this).find(".z-layer-obj").get(nextIndex)).addClass("z-layer-actived").slideDown();
          //$($this).find(".z-layer-actived").css("z-index", "2");
          isRunning = false;
        }, 1000);
      }
  });
}
