const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
const kDisplay = document.getElementById("kValue");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function heartEquation(x, k) {
  let term1 = Math.pow(Math.abs(x), 2 / 3);
  let term2 = 0;
  if (3 - x * x > 0) {
    term2 = 0.9 * Math.sin(k * x) * Math.sqrt(3 - x * x);
  }
  return term1 + term2;
}

function drawAxes() {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Draw X-axis
  ctx.beginPath();
  ctx.strokeStyle = "#00BFFF";
  ctx.lineWidth = 1;
  ctx.moveTo(0, centerY);
  ctx.lineTo(canvas.width, centerY);
  ctx.stroke();

  // Draw Y-axis
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, canvas.height);
  ctx.stroke();

  // Draw arrows on axes
  const arrowSize = 10;
  // X-axis arrows
  ctx.beginPath();
  ctx.moveTo(canvas.width - arrowSize, centerY - arrowSize);
  ctx.lineTo(canvas.width, centerY);
  ctx.lineTo(canvas.width - arrowSize, centerY + arrowSize);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(arrowSize, centerY - arrowSize);
  ctx.lineTo(0, centerY);
  ctx.lineTo(arrowSize, centerY + arrowSize);
  ctx.stroke();

  // Y-axis arrows
  ctx.beginPath();
  ctx.moveTo(centerX - arrowSize, arrowSize);
  ctx.lineTo(centerX, 0);
  ctx.lineTo(centerX + arrowSize, arrowSize);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(centerX - arrowSize, canvas.height - arrowSize);
  ctx.lineTo(centerX, canvas.height);
  ctx.lineTo(centerX + arrowSize, canvas.height - arrowSize);
  ctx.stroke();
}

function drawHeart(k) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw axes first
  drawAxes();

  // Draw the heart curve
  ctx.strokeStyle = "#FF4081";
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = -2; i <= 2; i += 0.01) {
    let x = i * 100;
    let y = -heartEquation(i, k) * 100;
    if (i === -2) ctx.moveTo(canvas.width / 2 + x, canvas.height / 2 + y);
    else ctx.lineTo(canvas.width / 2 + x, canvas.height / 2 + y);
  }
  ctx.stroke();

  // Update k value display
  kDisplay.textContent = `k = ${k.toFixed(2)}`;
}

let k = 0;
function animate() {
  k += 0.1;
  if (k >= 450) {
    k = 0; // Reset k when it reaches 450
  }
  drawHeart(k);

  // Format k to always show three digits before the decimal
  kDisplay.textContent = `k = ${k.toFixed(2).padStart(6, '0')}`;

  requestAnimationFrame(animate);
}
animate();
