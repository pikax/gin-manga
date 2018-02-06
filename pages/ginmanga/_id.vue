<template lang="pug">
  div
    manga-info(:title='manga.title', v-if='!!manga && !loading', v-bind='manga')
    //
      p {{manga}}
    div(v-if='!manga && error')
      | ERROR: error {{error}}

    v-container(fluid, align-center)
      v-progress-circular(:indeterminate='loading', v-if='loading')

</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import MangaInfo from '~/components/MangaInfo.vue';

	export default {
		name: "ginmanga-id",

    components: {
      MangaInfo
    },

    fetch({store}){
      // this.resolveManga();
    },


    data: () => ({
      info: null,
      loading: true,
      manga: null,
    }),

    computed: {
      ...mapGetters({
        getManga: 'getMangaByTitle',
        error: "mangaError"
      }),


      title(){
        return this.$route.params.id;
      }
    },

    methods: {
      ...mapActions([
        'getMangaInfo'
      ]),


      resolveManga: function () {
        const {title} = this;
        const info = this.getManga(title);

        this.loading = true;
        if (!info) {
          this.getMangaInfo({title})
            .then(x => this.setManga(x))
            .catch(x => {
              this.loading = false;
            })
        } else {
          this.setManga(info);
        }

      },

      setManga: function (manga) {
        this.manga = manga;
        this.loading = false;

      }


    },


    watch: {
      title: function (value, prev) {
        console.log(`new: ${value} | prev: ${prev}`)

        if(value !== prev){
          this.resolveManga();
        }
      }
    },

    mounted(){
		  this.resolveManga();
    }

	}
</script>

<style scoped>

</style>
