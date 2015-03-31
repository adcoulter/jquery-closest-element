# jquery-closest-element
A jQuery plugin to find the closest element to given coordinates.

A lot of work to do still, basic usage:

```
$.closestElement([xCoordinate, yCoordinate], '#selector', options);
```

Options: pass an options hash to $.closestElement to change defaults.
- container
  - default: 'body'
- xWeight
  -  default: 1
  -  description: Change this to affect priority of x distance to element. Setting to 0 will find closest element in the y direction only.
- yWeight
  -  default: 1
  -  description: Change this to affect priority of y distance to element. Setting to 0 will find closest element in the x direction only.

example:
```
var options = {
  container: '#cool-guy-div',
  xWeight: 1,
  yWeight: 2 //because this is more important to me for whatever reason.
}

//find closest element with '.some-class' to my mouse on mousemove.
$(document).on('mousemove', function(e) {
  var myClosestEl = $.closestElement([e.pageX, e.pageY], '.some-class', options);
  
  //do something fun with it
  myClosestEl.addClass('so-close');
});
```
