class Ground{

    //Propriedades
    constructor(x,y,width,height){

        //Parâmetros adicionais para a caixa
        var options = {

            isStatic: true
        
        }

        //Criar o objeto caixa
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(mundo, this.body)
    }

    //Métodos
    display(){
        //Renomear nome da posição da caixa
        var position = this.body.position;

        //Modificar os atributos
        //somente do elemento caixa e não do mundo inteiro
        push();

        //Criar retangulo para desenhar a caixa
        rectMode(CENTER);
        fill("brown");
        rect(position.x, position.y,this.width, this.height);

        //Finalizar o bloco com as modificação dos atributos da caixa
        pop();
      
    }
}