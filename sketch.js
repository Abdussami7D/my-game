var gameState = "start"
var img1,img2,img3,img4,img5,img6,img7,img8;
var score=0;
var visual;
var i =1;
var bg;



function preload() {

  img1 = loadImage("images/baby.jpeg");
  img2 = loadImage("images/chess.jpeg");
  img3 = loadImage("images/couple.jpeg");
  img4 = loadImage("images/heart.jpeg");
  img5 = loadImage("images/laughing_man.jpeg");
  img6 = loadImage("images/sheds.jpeg");
  img7 = loadImage("images/tomatoes_chilles.jpeg");

  bg = loadImage("images/bg.jpg");
  
}

function setup() {
  createCanvas(1000,1000);


   
 


  
}

function draw() {

  background(0);

  if(gameState == "start"){
    background(bg);
    textSize(50);
    fill("#BD7A4A");
    text("Choose the game",150,250);
    fill("white");
    text("1.Visual Observation Test",150,350)
    fill("white");
    text("2.quiz",150,450);
    

    if(keyDown("1")){
    
      gameState = "play";
    
      visual = createSprite(500,500,100,100);

      
      
      if(i==1){

        var k = changeImages(i);
          setTimeout(function() {
              console.log(k);
              changeImages(k);
              i = k;
              
        }, 1000);

        setTimeout(function() {
          
          var a = changeImages(i);
          console.log(a);
          i = a;
          
        }, 3000);

        setTimeout(function() {
          console.log(i);     
          var a = changeImages(i);
          console.log(a);
          i = a;
          
        }, 8000);

        setTimeout(function() {
          console.log(i);     
          var a = changeImages(i);
          console.log(a);
          i = a;
          
        }, 11000);

        setTimeout(function() {
          console.log(i);     
          var a = changeImages(i);
          console.log(a);
          i = a;
          
        }, 13000);

        setTimeout(function() {
          console.log(i);     
          var a = changeImages(i);
          console.log(a);
          i = a;
          
        }, 15000);

        setTimeout(function() {
          console.log(i);     
          var a = changeImages(i);
          console.log(a);
          i = a;
          
        }, 17000);
         
      }    
    
    }
   

  

  if(keyDown("2")){

 gameState = "play";
   

  }
  
}
  

  drawSprites()
}

function changeImages(j){

  
 
      console.log(j);

      if(j == 1){
        visual.addImage(img1);
        j++;
        return j;
       
      }
      else if(j == 2){
        visual.addImage(img2);
        j++
        return j;
      }
      else if(j == 3){
        visual.addImage(img3);
        j++
        return j;
      }
      else if(j == 4){
        visual.addImage(img4);
        j++
        return j;
      }
      else if(j == 5){
        visual.addImage(img5);
        j++
        return j;
      }
      else if(j == 6){
        visual.addImage(img6);
        j++
        return j;
      }
      else if(j == 7){
        visual.addImage(img7);
        j++
        return j;
      }

    }
    




  




