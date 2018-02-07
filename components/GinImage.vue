<template lang="pug">
  div.imgcontainer
    div
      v-btn(@click='zoomIn') in
      v-btn(@click='zoomOut') out
    canvas(ref="canvas")
</template>

<script>
  export default {
    name: "GinImage",

    data() {
      return {
        canvas: {},
        context: {},
        img: {},

        scale: 1,


      }
    },


    props: {
      src: {type: String, required: true},


      zoomRatio: {type: Number, default: 0.1},

      keepRatio: {type: Boolean, default: true},
    },


    methods: {
      zoomIn() {
        const ctx = this.context;
        this.scale = 1 + this.zoomRatio;


        ctx.scale(this.scale, this.scale)
        this.redraw();
      },
      zoomOut() {
        const ctx = this.context;
        this.scale = 1 - this.zoomRatio;


        ctx.scale(this.scale, this.scale)
        this.redraw();
      },


      imageLoaded(ev) {
        const img = ev.target;

        const width = this.canvas.width;
        const height = this.canvas.height;

        this.context.drawImage(img, 0, 0, width, height);

        const iwidth = img.width;
        const iheight = img.height;


        console.log(`drawing canvas: ${width}x${height} | img: ${iwidth}x${iheight}`);
      },

      redraw() {
        const ctx = this.context;
        const canvas = this.canvas;

        // Clear the entire canvas
        const p1 = ctx.transformedPoint(0, 0);
        const p2 = ctx.transformedPoint(canvas.width, canvas.height);
        ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        ctx.drawImage(this.img, 0, 0);
      }
    },


    mounted() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');

      trackTransforms(ctx);

      const rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;


      this.canvas = canvas;
      const img = new Image();
      img.onload = this.imageLoaded;
      img.src = this.src;
      this.context = ctx;
      this.img = img;

    }
  }


  // Adds ctx.getTransform() - returns an SVGMatrix
  // Adds ctx.transformedPoint(x,y) - returns an SVGPoint
  function trackTransforms(ctx) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    let xform = svg.createSVGMatrix();
    ctx.getTransform = function () {
      return xform;
    };

    const savedTransforms = [];
    const save = ctx.save;
    ctx.save = function () {
      savedTransforms.push(xform.translate(0, 0));
      return save.call(ctx);
    };

    const restore = ctx.restore;
    ctx.restore = function () {
      xform = savedTransforms.pop();
      return restore.call(ctx);
    };

    const scale = ctx.scale;
    ctx.scale = function (sx, sy) {
      xform = xform.scaleNonUniform(sx, sy);
      return scale.call(ctx, sx, sy);
    };

    const rotate = ctx.rotate;
    ctx.rotate = function (radians) {
      xform = xform.rotate(radians * 180 / Math.PI);
      return rotate.call(ctx, radians);
    };

    const translate = ctx.translate;
    ctx.translate = function (dx, dy) {
      xform = xform.translate(dx, dy);
      return translate.call(ctx, dx, dy);
    };

    const transform = ctx.transform;
    ctx.transform = function (a, b, c, d, e, f) {
      const m2 = svg.createSVGMatrix();
      m2.a = a;
      m2.b = b;
      m2.c = c;
      m2.d = d;
      m2.e = e;
      m2.f = f;
      xform = xform.multiply(m2);
      return transform.call(ctx, a, b, c, d, e, f);
    };

    const setTransform = ctx.setTransform;
    ctx.setTransform = function (a, b, c, d, e, f) {
      xform.a = a;
      xform.b = b;
      xform.c = c;
      xform.d = d;
      xform.e = e;
      xform.f = f;
      return setTransform.call(ctx, a, b, c, d, e, f);
    };

    const pt = svg.createSVGPoint();
    ctx.transformedPoint = function (x, y) {
      pt.x = x;
      pt.y = y;
      return pt.matrixTransform(xform.inverse());
    }
  }

  /*

    class LLL{

      var canvas = document.getElementsByTagName('canvas')[0];
      canvas.width = 800;
      canvas.height = 600;

      var gkhead = new Image;

      window.onload = function(){

        var ctx = canvas.getContext('2d');
        trackTransforms(ctx);

        function redraw(){

          // Clear the entire canvas
          var p1 = ctx.transformedPoint(0,0);
          var p2 = ctx.transformedPoint(canvas.width,canvas.height);
          ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);

          ctx.save();
          ctx.setTransform(1,0,0,1,0,0);
          ctx.clearRect(0,0,canvas.width,canvas.height);
          ctx.restore();

          ctx.drawImage(gkhead,0,0);

        }
        redraw();

        var lastX=canvas.width/2, lastY=canvas.height/2;

        var dragStart,dragged;

        canvas.addEventListener('mousedown',function(evt){
          document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
          lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
          lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
          dragStart = ctx.transformedPoint(lastX,lastY);
          dragged = false;
        },false);

        canvas.addEventListener('mousemove',function(evt){
          lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
          lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
          dragged = true;
          if (dragStart){
            var pt = ctx.transformedPoint(lastX,lastY);
            ctx.translate(pt.x-dragStart.x,pt.y-dragStart.y);
            redraw();
          }
        },false);

        canvas.addEventListener('mouseup',function(evt){
          dragStart = null;
          if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
        },false);

        var scaleFactor = 1.1;

        var zoom = function(clicks){
          var pt = ctx.transformedPoint(lastX,lastY);
          ctx.translate(pt.x,pt.y);
          var factor = Math.pow(scaleFactor,clicks);
          ctx.scale(factor,factor);
          ctx.translate(-pt.x,-pt.y);
          redraw();
        }

        var handleScroll = function(evt){
          var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;
          if (delta) zoom(delta);
          return evt.preventDefault() && false;
        };

        canvas.addEventListener('DOMMouseScroll',handleScroll,false);
        canvas.addEventListener('mousewheel',handleScroll,false);
      };

      gkhead.src = 'http://phrogz.net/tmp/gkhead.jpg';

      // Adds ctx.getTransform() - returns an SVGMatrix
      // Adds ctx.transformedPoint(x,y) - returns an SVGPoint
      function trackTransforms(ctx){
        var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
        var xform = svg.createSVGMatrix();
        ctx.getTransform = function(){ return xform; };

        var savedTransforms = [];
        var save = ctx.save;
        ctx.save = function(){
          savedTransforms.push(xform.translate(0,0));
          return save.call(ctx);
        };

        var restore = ctx.restore;
        ctx.restore = function(){
          xform = savedTransforms.pop();
          return restore.call(ctx);
        };

        var scale = ctx.scale;
        ctx.scale = function(sx,sy){
          xform = xform.scaleNonUniform(sx,sy);
          return scale.call(ctx,sx,sy);
        };

        var rotate = ctx.rotate;
        ctx.rotate = function(radians){
          xform = xform.rotate(radians*180/Math.PI);
          return rotate.call(ctx,radians);
        };

        var translate = ctx.translate;
        ctx.translate = function(dx,dy){
          xform = xform.translate(dx,dy);
          return translate.call(ctx,dx,dy);
        };

        var transform = ctx.transform;
        ctx.transform = function(a,b,c,d,e,f){
          var m2 = svg.createSVGMatrix();
          m2.a=a; m2.b=b; m2.c=c; m2.d=d; m2.e=e; m2.f=f;
          xform = xform.multiply(m2);
          return transform.call(ctx,a,b,c,d,e,f);
        };

        var setTransform = ctx.setTransform;
        ctx.setTransform = function(a,b,c,d,e,f){
          xform.a = a;
          xform.b = b;
          xform.c = c;
          xform.d = d;
          xform.e = e;
          xform.f = f;
          return setTransform.call(ctx,a,b,c,d,e,f);
        };

        var pt  = svg.createSVGPoint();
        ctx.transformedPoint = function(x,y){
          pt.x=x; pt.y=y;
          return pt.matrixTransform(xform.inverse());
        }
      }
    }
    */

</script>

<style scoped>

  .imgcontainer {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
</style>
