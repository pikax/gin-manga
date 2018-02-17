<template lang="pug">
  div
    manga-container(:mangas='searched', v-if="hasSearch")
    p(v-else) no search

</template>

<script>

  import {mapGetters} from 'vuex';
  import MangaContainer from "~/components/MangaContainer";


  export default {
    name: "search",
    components: {MangaContainer},
    computed:{
      ...mapGetters([
        'searched',
      ]),


      hasSearch(){
        return this.searched.length> 0
      }

    }
  }
</script>

<style scoped>

</style>
