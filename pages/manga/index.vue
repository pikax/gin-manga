<template lang="pug">

  manga-container(:mangas='visible')


</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import FavoriteButton from '~/components/FavoriteButton.vue';
  import MangaCard from '~/components/MangaCard.vue';
  import MangaContainer from "~/components/MangaContainer";

  export default {
    name: "ginmanga",
    title: 'mangas',

    data: () => ({
      selectedManga: '',

      visibleCount: 17,
    }),

    components: {
      MangaContainer,
      FavoriteButton,
      MangaCard,
    },

    computed: {
      ...mapGetters({
        mangas: 'allMangas'
      }),

      mangasCount: function () {
        return this.mangas.length;
      },


      listMangas: function () {
        return Array.from(this.mangas, (x, i) => i).slice(1);
      },

      visible: function () {
        return this.mangas.slice(0, this.visibleCount)
      }
    },

    methods: {
      ...mapActions([
        'addToCart'
      ]),
      openManga(title) {
        // this.selectedManga = title;

        this.$router.push('/ginmanga/' + title)
      },

    },

    head(){
      return {
        title: "Manga",
      }
    },

    mounted(){

    },

    fetch({store}) {
      store.dispatch('getAllMangas');
    }
  }
</script>

<style scoped lang="scss">

</style>
