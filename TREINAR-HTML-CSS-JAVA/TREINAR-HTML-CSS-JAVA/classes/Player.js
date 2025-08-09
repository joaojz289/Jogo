class Player{
    
    constructor(canvasWidth, canvasHeight){ // O js não tem o width e o height então eu informo pra ele, pra poder usar 
        this.width=100
        this.height=100
        this.velocidade =6;
       
        this.position ={  // A posição que vou começar
            
            x: canvasWidth/ 2 - this.width/2,
            y: canvasHeight - this.height - 30,
        };
    }

    moveLeft(){

         this.position.x -= this.velocidade; //velocidade e direção do player

    }

    moveRight(){

         this.position.x += this.velocidade; //velocidade e direção do player

    }

    draw(ctx){

     ctx.fillStyle = "red";
     ctx.fillRect(
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height,
    );
    }

}

export default Player;
