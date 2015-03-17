(function ($, undefined) {

  $.closestElement = function (coords, selector, options) {
    //setup defaults
    selector = selector || (selector = 'div');
    options = $.extend({}, options, { container: 'body'});

    var closest;

    $(options.container).find(selector).each(function(i, el) {
      var offset = $(el).offset(),
       x = coords[0] - offset.left,
       y = coords[1] - offset.top,
       dist = Math.sqrt((x*x) + (y*y));

      if(!i || dist < closest.dist) {
        closest = { el: el, dist: dist };
      }
    });

    return $(closest.el);
  };

})(jQuery);
