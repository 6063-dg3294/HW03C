let diam = 1
let diamRandom = random(5, 500)



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200)


  randomSeed(20)

  for (let number = 0; number < 25; number += 1){
    let x1 = random(width);
    let y1 = random (height);
    let x2 = random(width);
    let y2 = random(height);

    line(x1, y1, x2, y2)




  }


  

   







}
