<template lang="pug">
  v-container(
  grid-list-md="",
  fill-height="true"
  )
    v-layout( row='', wrap='')
      v-flex()
        transition-group(name="mangas")
          manga-card.gin-card(
            v-for='m in mangas',
            :key='m.title',
            :title='m.title',
            :image='m.image',
            :alt='m.title',
            :class-object="{'gin-other': true}"
            :onClick="openManga"
            )
            v-toolbar(slot='actions')
              favorite-button(:title='m.title')


</template>

<script>
  import FavoriteButton from '~/components/FavoriteButton.vue';
  import MangaCard from '~/components/MangaCard.vue';

  export default {
    name: "MangaContainer",
    components: {MangaCard, FavoriteButton},
    props: {
      mangas: {type: Array, required: true}
    },

    methods:{
      openManga(title) {
        // this.selectedManga = title;

        this.$router.push('/manga/' + title)
      },

    }
  }
</script>


<style scoped lang="scss">
  $break-small: 620px;

  $break-med: 650px;

  .gin-other {
    height: 200px;
  }

  .gin-card {
    width: 100%;
    max-width: 240px;
    margin: 0 4px 16px;
    display: inline-block;
    vertical-align: top;

    @media screen and (max-width: $break-small) {
      width: 47%;
      float: none;
    }

    @media only screen and (orientation: landscape) {
      width: 31%;
    }

    @media screen and (min-width: $break-small) {
      opacity: .9;

      &:hover {
        opacity: 1;
      }

    }

  }
  .mangas-enter-active, .mangas-leave-active {
    transition: all 1s;
  }
  .mangas-enter, .mangas-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .mangas-move {
    transition: transform 1s;
  }
/*
  .mangas-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .mangas-enter, .mangas-leave-to{
    opacity: 0;
    transform: translateY(30px);
  }
  .mangas-move {
    transition: transform 1s;
  }
  */
  .mangas-leave-active {
    position: absolute;
  }
</style>

