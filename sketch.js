
var ellip = [];
var ellip2 = [];
var ellip3 = [];
var ellip4 = [];
var ellip5 = [];
var ellip6 = [];

var numellipes = 20;
var mySound;
var analyzer;
var rms;
var rSlider;
var gSlider;
var bSlider;

var cSlider;
var dSlider;
var eSlider;


//var colorset=["#fd0000" red ,(253,212,43)yellow,(253,93,39)orange,(41,134,252)blue,(0,195,57)green,(254,73,152) pink];

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
    rSlider = createSlider(0, 255, 100);
    rSlider.position(20, 20);
    gSlider = createSlider(0, 255, 0);
    gSlider.position(20, 110);
    bSlider = createSlider(0, 255, 255);
    bSlider.position(20, 80);

    cSlider = createSlider(0, 255, 100);
    cSlider.position(20, 50);
    dSlider = createSlider(0, 255, 0);
    dSlider.position(20, 140);
    eSlider = createSlider(0, 255, 255);
    eSlider.position(20, 170);


    for (i = 0;i<numellipes;i++){
      r = new EllipObj(random(width),random(height), 350);
      ellip.push(r);
    }
    console.log(ellip);
    for (i = 0;i<numellipes;i++){
      r2 = new EllipObj(random(width),random(height), 500);
      ellip2.push(r2);
    }
    for (i =0;i<numellipes;i++){
      r3 = new EllipObj(random(width),random(height), 350);
      ellip3.push(r3);
    }
    for (i =0;i<numellipes;i++){
      r4 = new EllipObj(random(width),random(height), 400);
      ellip4.push(r4);
    }
    for (i =0;i<numellipes;i++){
      r5 = new EllipObj(random(width),random(height), 250);
      ellip5.push(r5);
    }
    for (i =0;i<numellipes;i++){
      r6 = new EllipObj(random(width),random(height), 300);
      ellip6.push(r6);
    }
  }
  
  function draw(){
    //var r = rSlider.value();
    //var g = gSlider.value();
    //var b = bSlider.value();
    //background(r,g,b);
    background(255);
    rms = analyzer.getLevel();
    
	for (i = 0; i<numellipes;i++){
    ellip[i].display();    
    }
  console.log(ellip[1,40]);
  for (i = 0; i<numellipes;i++){
    ellip2[i].display_sec();
  }
  for (i = 0; i<numellipes;i++){
    ellip3[i].display_third();
  }
  for (i = 0; i<numellipes;i++){
    ellip4[i].display_forth();
  }
  for (i = 0; i<numellipes;i++){
    ellip5[i].display_fifth();
  }
  for (i = 0; i<numellipes;i++){
    ellip6[i].display_sixth();
  }

  
  }

  class EllipObj{
    constructor(tempX, tempY, tempDia){
      this.x = tempX;
      this.y = tempY;
      this.diameter = tempDia;
      this.color;
      //this.color = color(random(255),random(255),random(255),random(100,255));
      //this.color=color(random(colorset));
      //this.color = myColor;
      this.over = false;
  
    }

    display(){
      noStroke();
      var r = rSlider.value();
      var b = bSlider.value();
      fill(r,0,0);
      this.x += 3.5;
      if(this.x > windowWidth){
        this.x = 0;
      }
      ellipse(this.x,this.y,this.diameter*rms*1.5,this.diameter*rms*1.5);
      
  
    }

    display_sec(){
      noStroke();
      var c = cSlider.value();
      var d = dSlider.value();
      var e = eSlider.value();
      fill(253,212,43);
      this.x += 3.5;
      if(this.x > windowWidth){
        this.x = 0;
      }
      ellipse(this.x,this.y,this.diameter*rms*1.5,this.diameter*rms*1.5);
      

    }

    display_third(){
      noStroke();
      fill(253,93,39);
      this.x += 3.5;
      if(this.x > windowWidth){
        this.x = 0;
      }
      ellipse(this.x,this.y,this.diameter*rms*1.5,this.diameter*rms*1.5);
      
    }
    display_forth(){
      noStroke();
      fill(41,134,252);
      this.x += 3.5;
      if(this.x > windowWidth){
        this.x = 0;
      }
      ellipse(this.x,this.y,this.diameter*rms*1.5,this.diameter*rms*1.5);

    }
  display_fifth(){
    noStroke();
    var g = gSlider.value();
      fill(0,g,57);
      this.x += 3.5;
      if(this.x > windowWidth){
        this.x = 0;
      }
      ellipse(this.x,this.y,this.diameter*rms*1.5,this.diameter*rms*1.5);
  }
  display_sixth(){
    noStroke();
      fill(254,73,152);
      this.x += 3.5;
      if(this.x > windowWidth){
        this.x = 0;
      }
      ellipse(this.x,this.y,this.diameter*rms*1.5,this.diameter*rms*1.5);


  }
  }
  