<template>
  <div class="container">
    <div class="p5Canvas"></div>
  </div>
</template>

<script>
import P5 from 'p5';

export default {
  data() {
    return {
      p5Canvas: null,
    }
  },
  created() {
    const sketch = p5 => {
        let w = 400;
        let h = 400;

        // let w = window.innerWidth;
        // let h = window.innerHeight;

        p5.setup = () => {
            p5.createCanvas(w, h);
        };

        p5.draw = () => {
            // call your method:
            p5.background(164, 22, 26, 50);
            p5.circle(p5.mouseX, p5.mouseY, 15);
            p5.fill(0);
            p5.noStroke();
            if(p5.mouseIsPressed){
              var x = p5.random(-50, 50);
              var y = p5.random(-50, 65);
              var z = p5.random(-50, 78);
              p5.noFill();
              p5.stroke(255);
              p5.triangle(p5.mouseX+x, p5.mouseY+y, p5.mouseX+y, p5.mouseY+x, p5.mouseX+z, p5.mouseY+z);
            }

        };

        // create methods:
        
    }

    this.p5Canvas = new P5(sketch, 'p5Canvas');
  },
  unmounted () {
    this.p5Canvas = null;
  },
}
</script>

<style>
#p5Canvas {
  width: 100vw;
  position: relative;
  margin: 0 auto;
}

main {
  margin: 0 auto;
  width: 90vw;
}
</style>