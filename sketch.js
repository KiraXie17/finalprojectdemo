
var ellip = [];
var numellipes = 120;
var mySound;
var analyzer;
var rms;
//var colorset=["#fd0000",(253,212,43),(253,93,39),(41,134,252),(0,195,57),(254,73,152)];
var colorset=["#fd0000","#fdd42b"];
var b = p5.board('/dev/cu.usbmodemfa131', 'arduino');
var button;
function preload() {
  soundFormats("mp3");
  mySound = loadSound("assets/sevenminutes.mp3");
}

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    mySound.play();
    console.log(mySound);
    analyzer = new p5.Amplitude();
    analyzer.setInput(mySound);

    button = b.pin(9, 'BUTTON');

    button.read();
    //what did it do?
  
    
    //not working
    function redEllipse() {
      console.log('pressed');
      clear();
      noStroke();
      fill(255, 0, 0);
      ellipse(100, 100, 40, 40);
    }
    
    //button = b.pin(9, 'BUTTON');
    for (i = 0;i<numellipes;i++){
      r = new EllipObj(random(width),random(height), 400);
      ellip.push(r);
    }
    console.log(ellip);

    button.pressed(redEllipse);
    //button.released(blueEllipse);
    button.held(r.held);
  }
  
  function draw(){
    background(255);
    rms = analyzer.getLevel();
    //console.log(rms);
    //mySound.setVolume(0.1);  
	for (i = 0; i<numellipes;i++){
    ellip[i].display();	
    //ellip[i].buttonclicked();
    //not working
    
    }
 
  
  }

  class EllipObj{
    constructor(tempX, tempY, tempDia){
      this.x = tempX;
      this.y = tempY;
      this.diameter = tempDia;
      //this.color = color(random(255),random(255),random(255));
      //this.color=color(random(colorset));
      this.color =  colorset[random(0, 1)]
      //this is not working
      //this.hit = false;
      this.over = false;
  
    }

    display(){
      noStroke();
      
      fill(0);
      this.x += 3.5;
      if(this.x > windowWidth){
        this.x = 0;
      }
      ellipse(this.x,this.y,this.diameter*rms,this.diameter*rms);
      
  
    }

    pressed(){
      this.color.alpha = this.color.alpha - 50;
      console.log("buttonclicked");
    }

    held(){
      this.color.alpha += 50;
      console.log("buttonclicked");
    }



   /* buttonclicked() {
      if(button.pressed) {
        this.color.alpha = this.color.alpha - 50
      } else if(button.held) {
        this.color.alpha += 50;
      } else {
        this.color.alpha = 255;
      }
      console.log(buttonclicked);
    }*/
    
  }
  