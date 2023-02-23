import React, { useEffect, useRef } from 'react';
import Sketch from 'react-p5';
import L from "../assets/1.png"
import p5 from 'p5';




const AsciiArtSketch = () => {
  const fox = useRef(null);

  let asciiDensity = 'Ñ@#$9876543210?!abc;:+=-,.';

  function preload(p5) {
    fox.current = p5.loadImage(L);
  }

  function setup(p5, canvasParentRef) {
    p5.createCanvas(470, 500).parent(canvasParentRef);
  }

  function draw(p5) {
    p5.background(25);


    let w = p5.width / fox.current.width;
    let h = p5.height / fox.current.height;

    fox.current.loadPixels();

    for(let x = 0; x < fox.current.width; x++){
      for (let y = 0; y < fox.current.height; y++){
        const pixelPos = (x + y * fox.current.width) * 4;
        const r = fox.current.pixels[pixelPos + 0];
        const g = fox.current.pixels[pixelPos + 1];
        const b = fox.current.pixels[pixelPos + 2];
        const avg_brightness = (r+b+g) / 3;

        p5.fill(255);
        p5.noStroke();

        const density_charIndex = p5.floor(p5.map(avg_brightness, 0, 255, asciiDensity.length, 0));

        p5.textSize(w);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.text(asciiDensity.charAt(density_charIndex), x * w + w * 0.5, y * h + h * 0.5)

      }
    }
  }

  return <Sketch preload={preload} setup={setup} draw={draw} />;
};

export default AsciiArtSketch;
