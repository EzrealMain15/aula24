//Crir Variáveis
var mecanismo, mundo;
var caixa,caixa2;
var solo;
var porco;
var tronco

//Criar constantes
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  //Criar área de jogo
  createCanvas(400,400);


  //Criar mecanismo de física e mundo
  mecanismo = Engine.create();
  mundo = mecanismo.world;

  //Criar caixas
  caixa = new Box(100,100,50,50);
  caixa2 = new Box(120,50,50,50);
  tronco = new Log(100,20,70,0)
  //porco = new Pig(100,20);
  //Criar Solo
  solo = new Ground(200,390,width, 20);


}

function draw() {
  //Limpar a tela
  background(0);

  //Atualizar o mecanismo de física
  Engine.update(mecanismo);
 
  //Mostrar caixas na tela
  caixa.display();
  caixa2.display();
  tronco.display();
 // porco.display();

  // Mostrar o solo na tela
  solo.display();

  push();
  fill("yellow");
  
  textSize(15);
  text("Posição: "+"("+ mouseX+","+mouseY+")",10,20);
  pop();

}