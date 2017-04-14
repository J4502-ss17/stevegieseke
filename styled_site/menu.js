 $(document).ready(function() {
   $(".menu-trigger").click(function() {
      $("nav ul").slideToggle(500);
   });

  $(window).resize(function() {
    if (  $(window).width() > 600  ) {
      $("nav ul").removeAttr("style");
    }
  });
});
