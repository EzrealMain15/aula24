class Log{

    //Propriedades
    constructor(x,y,width,angle){

        //Parâmetros adicionais para a caixa
        var options = {

            restitution:0.8,
            friction : 0.3,
            density: 1.0
        
        }

        //Criar o objeto caixa
        this.body = Bodies.rectangle(x,y,width,20, options);
        this.width = width;
        this.height = 20;
        

        Body.setAngle(this.body,angle);

        World.add(mundo, this.body)

    }

    //Métodos
    display(){
        //Renomear nome da posição da caixa
        var position = this.body.position;
        var angle = this.body.angle;

        //Modificar os atributos
        //somente do elemento caixa e não do mundo inteiro
        push();

        //Modificar o ângulo e o translação
        translate(position.x,position.y);
        rotate(angle);

        //Criar retangulo para desenhar a caixa
        strokeWeight(4);
        stroke("purple");

        rectMode(CENTER);
        fill("white");
        rect(0, 0,this.width, this.height);

        //Finalizar o bloco com as modificação dos atributos da caixa
        pop();
      
    }
}