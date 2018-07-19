const ctx = document.getElementById('canvas').getContext('2d');
const img = new Image();
imgScale = 640/480;
img.onload = function() {
  ctx.drawImage(img, 0, 0,150*imgScale,150);
};
img.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg';