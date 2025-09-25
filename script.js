function generateSigil() {
  const canvas = document.getElementById("sigilCanvas");
  const ctx = canvas.getContext("2d");
  const spell = document.getElementById("spellInput").value.trim();

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!spell) {
    alert("Please enter a spell or intention first!");
    return;
  }

  // Basic demo: draw random lines based on letters
  ctx.beginPath();
  ctx.strokeStyle = "#0b0d12";
  ctx.lineWidth = 2;

  let x = canvas.width / 2;
  let y = canvas.height / 2;
  ctx.moveTo(x, y);

  for (let i = 0; i < spell.length; i++) {
    x += (spell.charCodeAt(i) % 20) - 10;
    y += (spell.charCodeAt(i) % 20) - 10;
    ctx.lineTo(x, y);
  }

  ctx.stroke();
}
