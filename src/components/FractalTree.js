import React, { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalTree.css";

const FractalTree = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress(currentProgress / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Sketch = p5 => {
    let angle;
    const baseLength = 100;

    p5.setup = () => {
      p5.createCanvas(300, 300);
      angle = p5.PI / 4;
      p5.stroke(255);
    };

    p5.draw = () => {
      p5.clear();
      p5.translate(150, p5.height);
      angle = p5.map(scrollProgress, 0, 1, p5.PI / 2, p5.PI / 16);
      const length = baseLength * (1 - scrollProgress * 0.5);
      branch(length);
    };

    function branch(len) {
      p5.line(0, 0, 0, -len);
      p5.translate(0, -len);
      
      if (len > 4) {
        p5.push();
        p5.rotate(angle);
        branch(len * 0.67);
        p5.pop();
        
        p5.push();
        p5.rotate(-angle);
        branch(len * 0.67);
        p5.pop();
      }
    }
  };

  return (
    <div id="fractal-tree">
      <ReactP5Wrapper sketch={Sketch} />
    </div>
  );
};

export default FractalTree;