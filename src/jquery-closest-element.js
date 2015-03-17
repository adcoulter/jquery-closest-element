(function ($, undefined) {
  //todo: add options (container?)
  $.closestElement = function (coords, selector) {
    var closest;

    $(selector).each(function(i, el) {
      var offset = $(el).offset(),
       x = coords.x - offset.left,
       y = coords.y - offset.top,
       dist = Math.sqrt((x*x) + (y*y));

      if(i == 0 || distance < closest.dist) {
        closest = {  el: el, dist: dist };
      }
    });

    return $(closest.element);
  };

})(jQuery);
