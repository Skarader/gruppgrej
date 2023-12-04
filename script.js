import { labyrinthMap, labyrinthMap2, drawLabyrinth } from "./gameMap.js";
import { player, drawPlayer } from "./player.js";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const cellSize = canvas.width / labyrinthMap[0].length;

window.addEventListener("keydown", handleKeyPress);

let currentLabyrinthMap = labyrinthMap;

function gameLoop() {
  drawLabyrinth(ctx, cellSize, currentLabyrinthMap);
  drawPlayer(ctx, cellSize);
}

function checkWin(newX, newY) {
  if (currentLabyrinthMap[newY][newX] === 8) {
    alert("YOU WIN");

    if (currentLabyrinthMap == labyrinthMap) {
      currentLabyrinthMap = labyrinthMap2;
    } else {
      currentLabyrinthMap = labyrinthMap;
    }
    player.x = 16;
    player.y = 22;
  }
}

function move(newX, newY) {
  if (
    currentLabyrinthMap[newY][newX] === 1 ||
    currentLabyrinthMap[newY][newX] === 9 ||
    currentLabyrinthMap[newY][newX] === 8
  ) {
    player.x = newX;
    player.y = newY;

    checkWin(newX, newY);
  }
  drawLabyrinth(ctx, cellSize, currentLabyrinthMap);
  drawPlayer(ctx, cellSize);
}

function handleKeyPress(event) {
  switch (event.key) {
    case "ArrowUp":
      move(player.x, player.y - 1);
      break;
    case "ArrowDown":
      move(player.x, player.y + 1);
      break;
    case "ArrowLeft":
      move(player.x - 1, player.y);
      break;
    case "ArrowRight":
      move(player.x + 1, player.y);
      break;
  }
  drawLabyrinth(ctx, cellSize, currentLabyrinthMap);
  drawPlayer(ctx, cellSize);
}

gameLoop();
