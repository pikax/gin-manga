<template lang="pug">
  v-btn(flat, small, fab , :input-value="isFavorite", @click="onToggle")
    v-icon(:color='color') favorite
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "FavoriteButton",


    data: () => ({}),


    props: {
      title: {type: String, required: true},

    },


    computed: {
      ...mapGetters({
        checkFavorite: 'isFavorite',
      }),


      isFavorite() {
        return this.checkFavorite(this.title);
      },


      color() {
        return this.isFavorite && 'pink' || ''
      }

    },

    methods: {
      ...mapActions([
        'toggleFavorite'
      ]),

      onToggle: function(ev) {
        this.toggleFavorite(this.title);
        ev.stopPropagation()
      }
    }

  }
</script>

<style scoped lang="scss">


  .toggle {
    background: red;
  }

</style>
