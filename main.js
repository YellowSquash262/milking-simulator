const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const particleSpeed = 30
const particleOpacityChange = 0.05
const particleSizeChange = 0.5

function createParticle(x, y) {
  const particle = {
    x: x,
    y: y,
    size: Math.random() * 10 + 10,
    vx: (Math.random() - 0.5) * particleSpeed,
    vy: (Math.random() - 0.5) * particleSpeed,
    opacity: 1
  };
  particles.push(particle);
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255, 255, 255, " + particle.opacity + ")";
    ctx.fill();
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.opacity -= particleOpacityChange;
    particle.size -= particleSizeChange;
    if (particle.opacity <= 0 || particle.size <= 0) {
      particles.splice(i, 1);
      i--;
    }
  }
}

const particles = [];

canvas.addEventListener("click", function(event) {
  for (let i = 0; i < 29; i++) {
    createParticle(event.clientX, event.clientY);
  }
});

requestAnimationFrame(function render() {
  drawParticles();
  requestAnimationFrame(render);
});
