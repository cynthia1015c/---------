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
            p5.createCanvas(w, h, p5.WEBGL);
        };

        p5.draw = () => {
            // call your method:
            p5.background(0);
            
            // p5.background(33, 33, 33);
            p5.stroke(255);
            p5.noFill();
            p5.rotateY(p5.millis() / 1000);
            p5.rotateX(p5.millis() / 1000);
            p5.box(40);
            
            p5.rotateX(p5.millis() / 1000);
            p5.translate(-70, -50);
            p5.fill(200);
            // frameRate(80);
            p5.sphere(20);
            
            p5.stroke(255);
            p5.fill(255);
            p5.rotateX(p5.millis() / 10000);
            var x = p5.random(70, 100);
            p5.translate(x, x);
            var y = p5.random(10, 30);
            // frameRate(10);
            p5.box(y);

        };

        // create methods:
        // p5.changeBG = (x, y) => {
        //   let _x = p5.map(x, 0, w, 0, 255);
        //   let _y = p5.map(y, 0, h, 0, 255);
        //   p5.background(_x, _y, 33);
        // }
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