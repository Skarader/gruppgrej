const player = {
  x: 16,
  y: 22,
  color: "red",
};

function drawPlayer(ctx, cellSize) {
  ctx.fillStyle = player.color;
  ctx.beginPath();
  ctx.arc(
    (player.x + 0.5) * cellSize,
    (player.y + 0.5) * cellSize,
    cellSize / 2,
    0,
    2 * Math.PI
  );
  ctx.fill();
}

export { player, drawPlayer };
