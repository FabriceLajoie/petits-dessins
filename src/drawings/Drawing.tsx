import React from 'react';
import { P5CanvasInstance, ReactP5Wrapper } from '@p5-wrapper/react';

interface DrawingProps {
  sketchType?: 'basic' | '2' | '3' | '4' | '5' | '6';
}

function randomInt(max: number ) {
  return Math.floor( Math.random() * max);
}
function randomIntMin(min: number, max: number) {
  return Math.floor( Math.random() * (max - min) + min);
}

let width = 650;
let height = 500;

export function Drawing({ sketchType = 'basic' }: DrawingProps) {
  const basicSketch = (p5: P5CanvasInstance) => {
    p5.setup = () => {
      p5.createCanvas(width, height);
      p5.background(210);
      p5.noStroke();
      p5.rectMode(p5.CENTER);
    }

    p5.draw = () => {
      let r = randomInt(255);
      let g = randomInt(255);
      let b = randomInt(255);
      let s = randomIntMin(50, 400);

      let x = randomInt(650);
      let y = randomInt(500);

      p5.fill(r, g, b);
      p5.rect(x, y, s);
    };
  };

  const sketch2 = (p5: P5CanvasInstance) => {
    p5.setup = () => {
      p5.createCanvas(width, height);
      p5.background(210);
      p5.rectMode(p5.CENTER); 
    }

    p5.draw = () => {
      let r = randomInt(255);
      let g = randomInt(255);
      let b = randomInt(255);
      let w = randomInt(8);
      p5.stroke(r,g,b);
      p5.strokeWeight(w);

      if( p5.mouseIsPressed && (p5.mouseButton === p5.LEFT ) ) {
        p5.line(width/2, height/2, p5.mouseX, p5.mouseY);
      }
    };
  };

  const sketch3 = (p5: P5CanvasInstance) => {
    let lastDrawTime = 0;
    
    p5.setup = () => {
      p5.createCanvas(width, height);
      p5.background(210);
      p5.rectMode(p5.CENTER);
      p5.noStroke();
      lastDrawTime = p5.millis();
    }

    p5.draw = () => {
      if( p5.millis() - lastDrawTime >= 300) {
        for( let i = 0; i < 16; i++ ) {
          for( let y = 0; y < 21; y++ ) {
            let r = randomInt(255);
            let g = randomInt(255);
            let b = randomInt(255);
            let o = randomInt(255);
            p5.fill(r,g,b,o);
            let s = randomInt(4);
  
            if (s === 1) {p5.rect(y*32, i*32, 32, 32)}
            if (s === 2) {p5.rect(y*32, i*32, 64, 64)}
            if (s === 3) {p5.rect(y*32, i*32, 128, 128)}
            lastDrawTime = p5.millis();
          }
        }
      }
    }
  };

    const sketch4 = (p5: P5CanvasInstance) => {
    let old: number[] = [];
    let oldTR: number[] = [];
    let oldDL: number[] = [];
    let oldDR: number[] = [];
    p5.setup = () => {
      p5.createCanvas(width, height);
      p5.background(0);
      p5.rectMode(p5.CENTER);
      old = [width/2, height/2];
    }

    p5.draw = () => {
      let r = randomInt(255);
      let g = randomInt(255);
      let b = randomInt(255);

      p5.stroke(r,g,b);
      p5.strokeWeight(6);

      if( p5.mouseIsPressed ) {
        p5.line(old[0], old[1], p5.mouseX, p5.mouseY);
        p5.line(oldTR[0], oldTR[1], width/2 + (width/2 - p5.mouseX), p5.mouseY);
        p5.line(oldDL[0], oldDL[1], p5.mouseX, height/2 + (height/2 - p5.mouseY));
        p5.line(oldDR[0], oldDR[1], width/2 + (width/2 - p5.mouseX), height/2 + (height/2 - p5.mouseY));
        old =[p5.mouseX, p5.mouseY];
        oldTR =[width/2 + (width/2 - p5.mouseX), p5.mouseY];
        oldDL =[p5.mouseX, height/2 + (height/2 - p5.mouseY)];
        oldDR =[width/2 + (width/2 - p5.mouseX), height/2 + (height/2 - p5.mouseY)];
      } else {
        old =[p5.mouseX, p5.mouseY];
        oldTR =[width/2 + (width/2 - p5.mouseX), p5.mouseY];
        oldDL =[p5.mouseX, height/2 + (height/2 - p5.mouseY)];
        oldDR =[width/2 + (width/2 - p5.mouseX), height/2 + (height/2 - p5.mouseY)];
      }
    };
  };

  const sketch5 = (p5: P5CanvasInstance) => {

    // const Pos: {
    //   x:number;
    //   y:number;
    // };


    let lastDrawTime = 0;
    p5.setup = () => {
      p5.createCanvas(width, height);
      p5.background(randomInt(255), randomInt(255), randomInt(255));
      lastDrawTime = p5.millis();
    }

    p5.draw = () => {
      let r = randomInt(255);
      let g = randomInt(255);
      let b = randomInt(255);
      
      let ul : {x:Number, y:Number} = {x:width/4,y:height/4};
      let ur : {x:Number, y:Number} = {x:width/4, y:(height/4) * 3};
      let dl : {x:Number, y:Number} = {x:(width/4) * 3, y:height/4};
      let dr : {x:Number, y:Number} = {x:(width/4) * 3, y:(height/4) * 3};

      if( p5.millis() - lastDrawTime >= 300) {
        // Pos s = new Pos();

        p5.fill(r,g,b);
        p5.rect(ul.x, ul.y, 50);
        p5.rect(ur.x, ur.y, 50);
        p5.rect(dl.x, dl.y, 50);
        p5.rect(dr.x, dr.y, 50);
        lastDrawTime = p5.millis();
      }

    };
  };

    const sketch6 = (p5: P5CanvasInstance) => {
    let w:number, h:number;
    p5.setup = () => {
      p5.createCanvas(width, height);
      p5.background(0);
    }

    p5.draw = () => {
      p5.fill(255, 255, 255, randomIntMin(20, 255));
      if( p5.mouseIsPressed && (p5.mouseButton === p5.LEFT)) {
        if( p5.mouseY<250) {h = p5.mouseY/10}
        if( p5.mouseY>250) {h = (500 - p5.mouseY)/10}
        if( p5.mouseX< 325){w = p5.mouseX/15}
        if( p5.mouseX> 325){w = (650 - p5.mouseX)/15}

        p5.rect(p5.mouseX, p5.mouseY, h, w);
      }
    };
  };

  const getSketch = () => {
    switch (sketchType) {
      case '2': return sketch2;
      case '3': return sketch3;
      case '4': return sketch4;
      case '5': return sketch5;
      case '6': return sketch6;
      default: return basicSketch;
    }
  };

  return (
    <div>
      <h4>Sketch: {sketchType}</h4>
      <ReactP5Wrapper sketch={getSketch()} />
    </div>
  );
}