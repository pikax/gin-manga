<template lang="pug">
  v-container(
  grid-list-md='',
  fill-height="true"
  )
    v-layout( row='', wrap='')
      v-flex(xs12='')
        v-select(
        v-model='visibleCount',
        :items='listMangas',
        item-value="index",
        )

      v-flex()
        manga-card.gin-card(
        v-for='m in visible',
        :key='m.title',
        :title='m.title',
        :image='m.image',
        :alt='m.title',
        :class-object="{'gin-other': true}"
        :onClick="openManga"
        )
          v-toolbar(slot='actions')
            //
              v-btn-toggle(v-model='isFavorite(m)' )
                v-btn(flat)
                  v-icon favorite
            favorite-button(:title='m.title')

          //
            md-card-actions(slot='actions')
              md-button.md-icon-button
                md-icon favorite
              md-button.md-icon-button
                md-icon bookmark
              md-button.md-icon-button
                md-icon share
    ginmanga-info(:title='selectedManga', v-if='!!selectedManga')

</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import FavoriteButton from '~/components/FavoriteButton.vue';
  import MangaCard from '~/components/MangaCard.vue';

  export default {
    name: "ginmanga",

    data: () => ({
      selectedManga: '',

      visibleCount: 17,
    }),

    components: {
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


    fetch({store}) {
      store.dispatch('getAllMangas');
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
</style>
