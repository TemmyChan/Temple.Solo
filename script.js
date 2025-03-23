const playerId = Math.random().toString(36).substr(2, 9);
let player = { x: 1, y: 1 };

function movePlayer(dx, dy) {
    player.x += dx;
    player.y += dy;
    draw();
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") movePlayer(0, -1);
    if (event.key === "ArrowDown") movePlayer(0, 1);
    if (event.key === "ArrowLeft") movePlayer(-1, 0);
    if (event.key === "ArrowRight") movePlayer(1, 0);
});

function draw() {
    const canvas = document.getElementById("maze");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(p.x * 20, p.y * 20, 20, 20);
}
