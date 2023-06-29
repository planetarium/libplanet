(function () {
  // Disable DocFX's default footer behavior.
  var resetFooter = function () {
    $('footer').attr('style', '');
  };
  $.fn.fadeIn = resetFooter;
  $.fn.fadeOut = resetFooter;
  resetFooter();
})();
