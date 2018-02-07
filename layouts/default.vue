<template lang="pug">
  div.app-container
    wondering-cubes(v-show='appInitializing')
    app(:dark='darkTheme', v-show='appInitialized')
      nuxt
</template>
<script>
  import {mapActions, mapGetters} from 'vuex';

  import WonderingCubes from "../components/WonderingCubes";
  import App from "../components/App";


  export default {
    name: "default",

    components: {App, WonderingCubes},

    fetch({store}) {
    },


    data: function () {
      return {
        drawer: false,
      }
    },


    computed: {
      ...mapGetters(['appInitializing', 'appInitialized', "darkTheme"]),
    },


    methods: {

      onNav({nav}) {

        if (typeof nav === 'string') {
          return this.$router.push(nav);
        }

        nav();
      },
    },

    header(){

      return {
        meta: {
          hid: 'theme-color', name: 'theme-color', content: '#000000'
        }
      }
    },

    beforeMount() {

      // this.darkTheme = localStorage.getItem('theme') === '1';
    },

    mounted() {
    }

  }
</script>


<style>
  .input-group__details:after {
    background-color: rgba(255, 255, 255, 0.32) !important;
  }

  .copy-right {
    margin: 0;
    width: 100%;
    text-align: center;

  }

  .app-container {
    position: absolute;

    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .app-container-fix{

    position: inherit;

  }

  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 20px;*/
  /*}*/
</style>
