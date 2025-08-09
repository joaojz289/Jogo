import { PATH_NAVE_IMAGEM } from "../utils/constants.js";
import Projeteis from "./Projeteis.js";

class Player{
    
    constructor(canvasWidth, canvasHeight){ // O js não tem o width e o height então eu informo pra ele, pra poder usar 
        this.width=100
        this.height=100
        this.velocidade =6;
       
        this.position ={  // A posição que vou começar
            
            x: canvasWidth/ 2 - this.width/2,
            y: canvasHeight - this.height - 30,
        };

        this.Imagem = this.getImage(PATH_NAVE_IMAGEM);

    }

    getImage(pach){
        const image = new Image();
        image.src = pach; 
        return image;
    }
    

    moveLeft(){

         this.position.x -= this.velocidade; //velocidade e direção do player

    }

    moveRight(){

         this.position.x += this.velocidade; //velocidade e direção do player

    }

    draw(ctx){

            ctx.drawImage(this.Imagem, this.position.x, this.position.y, this.width, this.height);
            
    }
   shoot(Projeteis){

   const p= new Projeteis({
        x: this.position.x + this.width / 2-1,
        y: this.position.y +2,

   }-5
);
    Projeteis.push(p); // Adiciona o projétil ao array de projéteis do player   

   }
}

export default Player;
