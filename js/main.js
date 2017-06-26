$(document).ready(function() {
  var $header = $("header"),
      $clone = $header.before($header.clone().addClass("clone").removeClass("mini"));

       $(window).on("scroll", function() {
           var fromTop = $(window).scrollTop();
           $("body").toggleClass("down", (fromTop > 810));
       });
});
