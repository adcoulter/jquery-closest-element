(function ($, undefined) {
  //todo: add options (container?)
  $.closestElement = function (coords, selector, options) {
    selector || (selector = 'div');
    options || (options = {});

    options = $.extend({}, options, { container: 'body'});

    var closest;

    $(options.container).find(selector).each(function(i, el) {
      var offset = $(el).offset(),
       x = coords.x - offset.left,
       y = coords.y - offset.top,
       dist = Math.sqrt((x*x) + (y*y));

      if(i=== 0 || dist < closest.dist) {
        closest = {  el: el, dist: dist };
      }
    });

    return $(closest.el);
  };

})(jQuery);
