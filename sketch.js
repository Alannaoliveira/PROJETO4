let imagem;
let musica;

function setup() {
  createCanvas(1000, 800);
  palavra = empada();
  musica.loop();
}
function preload(){
  imagem = loadImage("imagem.jpg");
  musica = loadSound("musica.mp3");
}
function draw() {
  background("red");
  image(imagem,0,0,1000,800);
  batata();
  coxinha();
  empada();
}

function batata(){
  let minimo = 0;
  let maximo = width;
  let seguir = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,seguir);
  text(inicio,500,400);
}

function coxinha(){
  fill("violet");
  textSize(60);
  textAlign(CENTER,CENTER);
}


function empada(){
  let palavras = ["friends","hambúrguer","vô nada","chico bento no shopping"];
  return random(palavras);
}