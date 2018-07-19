const draw = () => {
  const ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = '48px serif';
  ctx.fillText('Hello world', 10, 50);
  ctx.font = '48px serif';
  ctx.strokeText('Hello world', 10, 100);
};

draw();
