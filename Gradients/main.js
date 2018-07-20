(() => {
const c = document.getElementById("linear-gradient");
const ctx = c.getContext("2d");
// Create gradient
const grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle=grd;
ctx.fillRect(10,10,150,80);
})();

(() => {
const c = document.getElementById("radial-gradient");
const ctx = c.getContext("2d");
// Create gradient
const grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
})();