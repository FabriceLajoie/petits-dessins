import React from 'react';
import { P5CanvasInstance, ReactP5Wrapper } from '@p5-wrapper/react';

interface DrawingProps {
  sketchType?: 'basic' | '2';
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

      if( p5.mouseIsPressed && (p5.mouseButton == p5.LEFT ) ) {
        p5.line(width/2, height/2, p5.mouseX, p5.mouseY);
      }
    };
  };

  const getSketch = () => {
    switch (sketchType) {
      case '2': return sketch2;
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