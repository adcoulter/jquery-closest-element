(function ($, undefined) {

  $.closestElement = function (coords, selector, options) {
    //setup defaults
    selector = selector || (selector = 'div');
    var defaults = {
      container: 'body',
      yWeight: 1,
      xWeight: 1
    };

    options = $.extend({}, defaults, options);

    var closest = { el: '' };

    $(options.container).find(selector).each(function(i, el) {
      var offset = $(el).offset(),
        x = Math.abs(coords[0] - offset.left) * options.xWeight,
        y = Math.abs(coords[1] - offset.top) * options.yWeight;

      dist = Math.sqrt((x*x) + (y*y));

      if(!i || dist < closest.dist) {
        closest = { el: el, dist: dist };
      }
    });

    return $(closest.el);
  };

})(jQuery);
