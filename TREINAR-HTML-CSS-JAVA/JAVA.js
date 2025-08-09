import Player from "./classes/Player.js"; // Importei a classe Player para usar aqui
import Projeteis from "./classes/Projeteis.js";

const canvas = document.querySelector("canvas"); 
const ctx = canvas.getContext("2d");  

canvas.width = innerWidth; 
canvas.height = innerHeight;

ctx.imageSmoothingEnabled = false;


const player = new Player(canvas.width, canvas.height); // No player quando eu informei pro js os valores, eu trouxe para aqui
const playerprojeteis = []; // Criei um array para armazenar os projéteis do player
const keys ={
  left: false,
  right: false,
  shoot: {
    pressed: false,
    released: true,
  }
};

 const drawProjeteis = () => {
    playerprojeteis.forEach((Projeteis) =>{
        Projeteis.draw(ctx);
    });
 }

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas a cada frame
    drawProjeteis(); // Desenha os projéteis do player
    Projeteis.update(); // Atualiza a posição dos projéteis

    ctx.save(); // Salva o estado atual do contexto

    ctx.translate(

        player.position.x + player.width / 2,
        player.position.y + player.height / 2

    ); // Move o contexto para a posição do player
 
    if (keys.shoot.pressed && keys.shoot.released) { // Verifica se a tecla de atirar foi pressionada
        player.shoot(Projeteis); // Chama o método de atirar do player
        keys.shoot.pressed = false; // Reseta o estado de pressionamento
    }


    if (keys.left && player.position.x >= 0) { // o && ta me dizendo que o player não pode sair do canvas
       player.moveLeft();
       ctx.rotate(-0.15);
    }

    if (keys.right && player.position.x <= canvas.width - player.width) { 
       player.moveRight();
       ctx.rotate(0.15);
       }

    ctx.translate(
        -player.position.x - player.width / 2,
        -player.position.y - player.height / 2

        );

    player.draw(ctx); // Desenha o player na posição atual

    ctx.restore(); // Restaura o estado do contexto para o que estava antes de aplicar as transformações

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
    if (key === "e"){ // Quando pressionar a tecla de atirar, o projétil vai ser criado
     keys.shoot.pressed = false;
     keys.shoot.released = true;

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