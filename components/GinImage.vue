<template lang="pug">
  div
    p TEst Imges
    canvas(ref="canvas", :height="canvasHeight" :width="canvasWidth" )
</template>

<script>
  export default {
    name: "GinImage",

    data() {
      return {
        canvas: {},
        canvasHeight: 400,
        canvasWidth: 350,
        context: {},
        img: {}
      }
    },


    props: {
      src: {type: String, required: true},
    },

    mounted() {
      this.canvas = this.$refs.canvas;
      this.context = this.canvas.getContext('2d');


      const img = new Image();
      img.src = this.src;

      this.context.drawImage(img, 10, 10);

      this.img = img;

      console.log('readtyt')
    }
  }
</script>

<style scoped>

</style>
