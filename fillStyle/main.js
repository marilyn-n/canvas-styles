const draw = () => {
  const ctx = document.getElementById('canvas').getContext('2d');
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.fillStyle = `rgb(${  Math.floor(255 - 42.5 * i)  }, ${ 
        Math.floor(255 - 42.5 * j)  }, 100)`;
      ctx.fillRect(j * 25, i * 25, 25, 25);
    }
  }
};

draw();
