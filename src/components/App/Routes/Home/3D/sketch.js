export default function sketch(p) {

    var particle;
    var maxX, maxY, minX, minY;
    var curX, curY, initX, initY = 0;
    var repOne, hook;
    var x1 = 240;
    var y1 = 310;
  
    p.setup = () => {
      createCanvas(1000, 500);
      particle = new Particle(p.mouseX, p.mouseY);
      repOne = p.loadImage("https://assets.reponestrength.com/repone.png", "png");
      hook = p.loadImage("https://assets.reponestrength.com/hook.png", "png");
    }
  
    p.draw = () => {
      p.background("#ff0034");
      
      maxX = 860;
      maxY = 490;  
      minX = 150;
      minY = hook.height-10;
      
      if (p.mouseX > maxX){ curX = maxX; }
      else if (p.mouseX < minX){ curX = minX; }
      else { curX = p.mouseX; }
  
      if (p.mouseY > maxY){ curY = maxY; }
      else { curY = p.mouseY; }
  
      p.image(repOne, 0, 500-repOne.height, repOne.width, repOne.height);
  
      particle.update(p);
      particle.show(p);
  
      var rot = p.map(curX, minX, maxX, -0.5, 0.8);
      var size = p.map(curX, minX, maxX, 1, 0.7);
  
      p.stroke(255);
      p.strokeWeight(5 * size);
      p.line(x1, y1, curX, curY);
      
      p.push();
      p.translate(curX, curY);
      p.rotate(rot);
      p.imageMode(p.CENTER);
      p.image(hook, (0 + hook.width - hook.width*size*1.2), ((hook.height - hook.height*size*1.05)/2 - (hook.height/2 - 8)), hook.width * size, hook.height * size);
      p.pop();
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
  