<template lang="pug">
  div
    p {{id}}
    p {{images.map(processImg)}}

    img(v-for="i in images", :key="i.name", :src="processImg(i)")

</template>

<script>

  import {mapActions} from 'vuex';

  export default {
    name: "reader_id",


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
        this.getChapterImages(this.title, this.id).then(x => this.images = x);
      }
    },
    mounted() {
      this.getChapterImages({title: this.title, chapterId: this.id}).then(x => this.images = x);
    }
  }
</script>

<style scoped>

</style>
