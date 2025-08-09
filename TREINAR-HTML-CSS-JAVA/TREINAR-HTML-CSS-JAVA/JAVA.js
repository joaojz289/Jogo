import Player from "./classes/Player.js"; // Importei a classe Player para usar aqui

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;


const player = new Player(canvas.width, canvas.height); // No player quando eu informei pro js os valores, eu trouxe para aqui

const keys ={
  left: false,
  right: false,
};

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas a cada frame

    if (keys.left && player.position.x >= 0) { // o && ta me dizendo que o player não pode sair do canvas
       player.moveLeft();
    }

    if (keys.right && player.position.x <= canvas.width - player.width) { 
       player.moveRight();
       }

    player.draw(ctx);

    requestAnimationFrame(gameLoop); // Isso faz com que o jogo desenhe continuamente, criando um loop
}

player.draw(ctx);

window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase(); // Se eu tiver com o caps lock ligado, o js vai entender como "a" minusculo
    
    if (key === "a") {
        keys.left = true //mesmo se pressionar não ia funcionar por causa do player.draw(ctx)
    }

    if (key === "d") {
        keys.right = true  //pq ele ta só desenhando uma vez, então cria um loop para pode mover livremente
    }

});

window.addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase(); 
    
    if (key === "a") {
        keys.left = false; // Quando soltar a tecla, o player para de se mover
    }

    if (key === "d") {
        keys.right = false;
    }

});

 gameLoop(); // Chama a função para iniciar o loop do jogo