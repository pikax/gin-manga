<template lang="pug">
  div.img-container
    gin-image(v-for="i in images", :key="i.name", :src="processImg(i)")

</template>

<script>

  import {mapActions} from 'vuex';
  import GinImage from "../../components/GinImage";

  export default {
    name: "reader_id",
    components: {GinImage},
    data() {
      return {
        images: []
      }
    },

    computed: {
      id() {
        return this.$route.params.id;
      },
      title() {
        return "Gintama";
      }
    },


    methods: {
      ...mapActions(['getChapterImages']),

      processImg({name}) {
        return `/static/images/${this.id}-${name}`;
      }
    },


    watch: {
      id(value) {
        console.log('id changed');
        this.getChapterImages(this.title, this.id).then(x => this.images = x.splice(0, 1));
      }
    },
    mounted() {
      this.getChapterImages({title: this.title, chapterId: this.id}).then(x => this.images = x.splice(0,1 ));
    }
  }
</script>

<style scoped>

  .img-container{
    height: 100vh;
  }

</style>
