$(function() {
    var body = $("body");
    var flag = true;
  
    $(document).on("mousemove", function(e) {
      if (flag) {
        var x = e.clientX;
        var y = e.clientY;
  
        var star = $("<span>").attr("class", "star");
        star.css({
          "top": y + "px",
          "left": x + "px"
        });
        body.prepend(star);
        setTimeout(function() {
          star.remove();
        }, 2000);
  
        flag = false;
        setTimeout(function() {
          flag = true;
        }, 100);
      }
    });
  });