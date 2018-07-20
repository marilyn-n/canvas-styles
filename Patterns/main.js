var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var img = new Image();
img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
img.onload = function() {
    // repeat options are: 
    // "repeat" (both directions)
    // "repeat-x" (horizontal only)
    // "repeat-y" (vertical only)
    // "no-repeat" (neither
  const pattern = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};