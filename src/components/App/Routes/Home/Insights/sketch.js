export default function sketch(p) {

  var particle;
  var maxX, maxY, minX, minY;
  var curX, curY, initX, initY = 0;
  var repOne, hook;
  var xsize = 1;
  var divW, divH;

  function setDivH() {
    // if (divW < 600) {
    //   divH = divW;
    // } else if (divW < 700) {
    //   divH = divW * 0.88;
    // } else if (divW < 800) {
    //   divH = divW * 0.75;
    // } else if (divW < 900) {
    //   divH = divW * 0.6;
    // } else {
    //   divH = divW * 0.5;
    // }

    divH = (((1024-divW)/1024) + 0.55) * divW;
    if (divH < 575) {
      divH = 575;
    }
  }

  p.setup = () => {
    divW = document.getElementById("defaultCanvas0").parentNode.parentElement.clientWidth;
    setDivH();
    p.createCanvas(divW, divH);
    particle = new Particle(p.mouseX, p.mouseY);

    repOne = p.loadImage("repone.png", "png");
    hook = p.loadImage("hook.png", "png");
    
  }

  p.draw = () => {
    p.background("#ff0034");
    
    maxX = divW-hook.width-10;
    maxY = divH;
    minX = hook.width;
    minY = hook.height-10;

    if (p.mouseY <= 0) {
      // default position for mobile
      curX = maxX * 0.9;
      curY = maxY * 0.8;
      particle.history = [];
    } else if (p.mouseY > 0) {
      // if y is within range

      // x
      if (p.mouseX > maxX){ curX = maxX; }
      else if (p.mouseX < minX){ curX = minX; }
      else { curX = p.mouseX; }
      
      // y
      if (p.mouseY > maxY){ curY = maxY; }
      else { curY = p.mouseY; }
    }

    var padding = 50;


    var mult = p.map(divW, 0, 1920, 0.25, 1);
    if (mult > 1){mult = 1}
    if (mult < 0.25) {mult = 0.25}
    
    p.imageMode(p.CORNER);
    p.image(repOne, padding, divH - repOne.height*mult, repOne.width*mult, repOne.height*mult);

    particle.update(p);
    particle.show(p);

    var rot = p.map(curX, 0, divW, -0.5, 0.8);
    var size = p.map(curX, 0, divW, 1, 0.7);
    var heightadjust = p.map(curX, 0, divW, 0, 0.2);

    p.stroke(255);
    p.strokeWeight(5 * size);
    p.line((0.8*(repOne.width*mult)) + padding, (divH - 0.62*(repOne.height*mult)), curX, curY);
    
    p.push();
    p.translate(curX, curY);
    p.rotate(rot);
    p.imageMode(p.CENTER);
    p.image(hook, 0, - (hook.height/2)*mult + hook.height*mult*heightadjust, hook.width * size * mult , hook.height * size * mult);
    p.pop();

  }

  p.windowResized = () => {
    divW = document.getElementById("defaultCanvas0").parentNode.parentElement.clientWidth;
    setDivH();
    p.resizeCanvas(divW, divH);
  }

  function Particle(x, y) {
    this.x = initX;
    this.y = initY;
    
    this.history = [];
    
    this.update = function(p) {
      this.x = curX;
      this.y = curY;

      for (var i = 0; i < this.history.length; i++) {
        this.history[i].x;
        this.history[i].y;
      }

      var v = p.createVector(this.x, this.y);
      this.history.push(v); 
      if (this.history.length > 30) {
        this.history.splice(0, 1);
      }
    }
    
    this.show = function(p) {
      p.noFill();
      p.strokeWeight(8);
      p.stroke(255);
      p.beginShape();

      for (var i = 0; i < this.history.length; i++) {
        var pos = this.history[i];
        p.curveVertex(pos.x, pos.y);
      }
      p.endShape();
      
      p.stroke(255,0,52);
      p.strokeWeight(3);
      p.beginShape();
      for (var i = 0; i < this.history.length; i++) {
        var pos = this.history[i];
        p.curveVertex(pos.x, pos.y);
      }
      p.endShape();
      
      
    }
    
  }

};
