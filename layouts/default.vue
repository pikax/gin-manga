<template lang="pug">
  div.app-container
    wondering-cubes(v-show='appInitializing')
    v-app(:dark="darkTheme", v-show='appInitialized')

      //drawer
      v-navigation-drawer(:fixed='fixed', :clipped='clipped', temporary, v-model='drawer', app)
        v-list(dense='')
          v-list-tile(v-for='item in items', :key='item.text', @click='onNav(item)')
            v-list-tile-action
              v-icon {{ item.icon }}
            v-list-tile-content
              v-list-tile-title
                | {{ item.text }}
          v-subheader.mt-3.grey--text.text--darken-1 SUBSCRIPTIONS
          v-list
            v-list-tile(v-for='item in items2', :key='item.text', avatar='', @click='')
              v-list-tile-avatar
                img(:src='`https://randomuser.me/api/portraits/men/${item.picture}.jpg`', alt='')
              v-list-tile-title(v-text='item.text')
          v-list-tile.mt-3(@click='')
            v-list-tile-action
              v-icon(color='grey darken-1') add_circle_outline
            v-list-tile-title.grey--text.text--darken-1 Browse Channels
          v-list-tile(@click='')
            v-list-tile-action
              v-icon(color='grey darken-1') settings
            v-list-tile-title.grey--text.text--darken-1 Manage Subscriptions
          v-list-tile(@click='toggleTheme')
            v-list-tile-action
              v-switch(:input-value="darkTheme")
            v-list-tile-title.grey--text.text--darken-1 {{currentTheme}}



      //content
      v-content
        v-container
          nuxt

      //toolbar
      v-toolbar(dense='', fixed='', clipped-left='', app='')
        v-toolbar-title.ml-0.pl-3(style='width: 300px')
          v-toolbar-side-icon(@click.stop='drawer = !drawer')
          v-icon.ml-3 fa-youtube
        v-layout(row='', align-center='', style='max-width: 650px')
          v-text-field.white--text(placeholder='Search...', single-line='', append-icon='search', :append-icon-cb='() => {}', hide-details='')




      //footer
      v-footer(app)
        gin-footer

</template>
<script>
  import {mapActions, mapGetters} from 'vuex';

  import GinFooter from "../components/GinFooter";
  import WonderingCubes from "../components/WonderingCubes";


  export default {
    name: "default",
    components: {WonderingCubes, GinFooter},

    fetch({store}) {
    },


    data: function () {
      return {
        drawer: false,
        clipped: true,
        fixed: true,
        darkTheme: null,

        items: [
          {icon: 'book', text: "Mangas", nav: '/ginmanga'},
          {icon: 'eject', text: "Status", nav: '/status'},
          {icon: 'trending_up', text: 'Most Popular'},
          {icon: 'subscriptions', text: 'Subscriptions'},
          {icon: 'history', text: 'History'},
          {icon: 'featured_play_list', text: 'Playlists'},
          {icon: 'watch_later', text: 'Watch Later'},
          {icon: 'refresh', text: 'Refresh user', nav: () => this.$store.dispatch("refreshUser")},
          {icon: 'refresh', text: 'Refresh manga', nav: () => (this).$store.dispatch('getAllMangas')},

        ],
        items2: [
          // { picture: 28, text: 'Joseph' },
          // { picture: 38, text: 'Apple' },
          // { picture: 48, text: 'Xbox Ahoy' },
          // { picture: 58, text: 'Nokia' },
          // { picture: 78, text: 'MKBHD' }

        ]
      }
    },


    computed: {
      ...mapGetters(['appInitializing', 'appInitialized']),

      currentTheme() {
        return this.darkTheme
          ? "Dark theme"
          : "Light theme";
      },

      appContainerClass() {
        return {
          'app-container': this.$store.getters.appInitializing,
        };
      },

      isThemeDefined() {

        console.log('darktheme: ' + this.darkTheme)
        return this.darkTheme !== undefined;
      }
    },


    methods: {
      ...mapActions(['useDarkTheme']),

      toggleTheme() {
        // this.useDarkTheme(!this.darkTheme);

        this.darkTheme = !this.darkTheme;
        localStorage.setItem('theme', this.darkTheme ? '1' : '0');
      },

      onNav({nav}) {

        if (typeof nav === 'string') {
          return this.$router.push(nav);
        }

        nav();
      },
    },

    beforeMount() {
      console.log('iinadsjodn: ' + this.appInitialized)

      this.darkTheme = localStorage.getItem('theme') === '1';
    },

    mounted() {
      console.log('iinadsjodn: ' + this.appInitialized)
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
