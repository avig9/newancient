// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/kKT0v3qhIQY

function Leaf() {
  this.pos = createVector(random(width), random(height));
  this.reached = false;

  this.show = function() {
    fill(0,0,0,0);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 8, 8);
  };
}
