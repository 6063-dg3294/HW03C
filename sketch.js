let diam = 1
let diamRandom = random(5, 500)



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200)


  // for (let number = 0; number <= 25; number += 1){
  //   for (let x1pos = random(5,500); x1pos <= width; xpos += random(5,500)){
  //     for (let y1pos = random(5,500); y1pos <= height; ypos += random(5,500)){
  //       for (let x2pos = random(5,500); x2pos <= width; x2pos += random(5,500)){
  //         for (let y2pos = random(5,500); y2pos <= width; y2pos += random(5,500)){
  //           line(x1pos, y1pos, x2pos, y2pos)
  //         }
  //       }
  //     }
      
  // } //each set of points for 25 times
  // }
  randomSeed(20)

  for (let number = 0; number < 5; number += 1){
    let x1 = random(width);
    let y1 = random (height);
    let x2 = random(width);
    let y2 = random(height);

    line(x1, y1, x2, y2)




  }


  

   







}
