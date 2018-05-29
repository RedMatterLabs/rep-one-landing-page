

export default function sketch(p) {

    var particle;
    var initX = 0;
    var initY = 0;
    var repOne, hook;
    var x1 = 240;
    var y1 = 310;

    function Particle(x, y) {
        this.x = initX;
        this.y = initY;
        
        this.history = [];
        
        this.update = function(p) {
            this.x = p.mouseX;
            this.y = p.mouseY;
            
            for (var i = 0; i < this.history.length; i++) {
                this.history[i].x;
                this.history[i].y;
            }

            var v = p.createVector(this.x, this.y);
            this.history.push(v); 
            if (this.history.length > 50) {
                this.history.splice(0, 1);
            }
        }
        
        this.show = function(p) {
            p.noFill();
            p.strokeWeight(10);
            p.stroke(255,0,0,150);
            p.beginShape();

            for (var i = 0; i < this.history.length; i++) {
                var pos = this.history[i];
                p.curveVertex(pos.x, pos.y);
            }
            p.endShape();
            
            p.stroke(255,150);
            p.strokeWeight(5);
            p.beginShape();
            for (var i = 0; i < this.history.length; i++) {
                var pos = this.history[i];
                p.curveVertex(pos.x, pos.y);
            }
            p.endShape();
        }
    }

    p.setup = () => {
        p.createCanvas(1000, 500);
        particle = new Particle(p.mouseX, p.mouseY);
        repOne = p.loadImage("https://assets.reponestrength.com/repone.png", "png");
        hook = p.loadImage("https://assets.reponestrength.com/hook.png", "png");
    }

    p.draw = () => {
        p.background(255);

        p.image(repOne, 0, 500-repOne.height, repOne.width, repOne.height);

        particle.update(p);
        particle.show(p);

        p.stroke(0);
        p.strokeWeight(5);
        p.line(x1, y1, p.mouseX, p.mouseY);

        p.push();
        p.translate(p.mouseX, p.mouseY);
        p.rotate((-p.atan2(p.x1 - p.mouseX, p.y1 - p.mouseY)/2) - p.radians(45));
        p.imageMode(p.CENTER);
        p.image(hook, hook.width/2 - 13, -hook.height/2 + 13);
        p.pop();
    }

};