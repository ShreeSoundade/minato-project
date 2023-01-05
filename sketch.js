var minato
var minatoimage

function preload(){
minatoimage=loadImage("minato.png")
}

function setup() {
 createCanvas(600,200)
 minato=createSprite(100,100,50,50)
 minato.addImage(minatoimage)
 minato.scale=0.2
}

function draw() {
 drawSprites()
}