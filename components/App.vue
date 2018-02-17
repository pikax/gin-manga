<template lang="pug">
  v-app(:dark="dark")
    //drawer
    v-navigation-drawer(:fixed='fixed', :clipped='clipped', temporary, v-model='drawer', app)
      v-list(dense)
        v-list-tile(v-for='item in items', :key='item.text', :to='item.nav', router, nuxt
        )
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title(v-t="item.text")
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
            v-switch(:input-value="dark")
          v-list-tile-title.grey--text.text--darken-1 {{currentTheme}}



    //content
    v-content
      v-container
        slot

    //toolbar
    v-toolbar(dense, fixed, clipped-left, app)
      v-toolbar-title.ml-0.pl-3(style='width: 300px')
        v-toolbar-side-icon(@click.stop='toggleDrawer')
        v-icon.ml-3 fa-youtube
      v-layout(row='', align-center='', style='max-width: 650px')
        v-text-field(:placeholder='$t(this.i18n.search)',
        single-line='', append-icon='search',

        hide-details,
        @input="searchManga"

        )




    //footer
    v-footer( :fixed="false")
      gin-footer

</template>

<script>
  import {mapActions} from 'vuex';
  import _ from 'lodash';
  import GinFooter from "./GinFooter";

  export default {
    name: "app",
    components: {GinFooter},


    data: function () {
      return {
        drawer: false,
        clipped: true,
        fixed: true,

        // search: 'ddd',

        items: [
          {icon: 'book', text: "manga", nav: '/manga'},
          {icon: 'eject', text: "status", nav: '/status'},
          /*{icon: 'trending_up', text: 'Most Popular'},
          {icon: 'subscriptions', text: 'Subscriptions'},
          {icon: 'history', text: 'History'},
          {icon: 'featured_play_list', text: 'Playlists'},
          {icon: 'watch_later', text: 'Watch Later'},
          {icon: 'refresh', text: 'Refresh user', nav: () => this.$store.dispatch("refreshUser")},
          {icon: 'refresh', text: 'Refresh manga', nav: () => (this).$store.dispatch('getAllMangas')},
*/
        ],

        items2: [],

        i18n: {
          drawer: {
            manga: "manga",
            status: "status",
          },

          search: "search",
          theme: {
            dark: "theme.dark",
            light: "theme.light",
          }
        }
      };
    },

    computed: {
      currentTheme() {
        const k = this.dark
          ? this.i18n.theme.dark
          : this.i18n.theme.light;

        return this.$i18n.t(k);
      },
    },

    props: {
      dark: {type: Boolean, default: false},
    },

    methods: {
      ...mapActions(['toggleTheme']),

      onNav({nav}) {

        if (typeof nav === 'string') {
          return this.$router.push(nav);
        }

        nav();
      },

      isCurrentPage({nav}) {
        return this.$route.path.startsWith(nav);
      },

      getColor(item) {
        return this.isCurrentPage(item) && "red" || undefined;
      },

      toggleDrawer() {
        return this.drawer = !this.drawer;
      },

      searchManga: _.debounce(function(search){
        // /* debugger
        // _.debounce(() => this.onSearchManga(search), 200);
        // const  l = this;

        this.onSearchManga(search)


      }, 500),

      onSearchManga(search) {
        this.$store.dispatch("searchManga", search)
          .then(x=>{
            this.$router.push('search');
          });
      }
    },

    /*
        watch: {
          search: _.debounce((val,prev)=>{
            this.$router.push("/manga#name="+val)
          })
        }*/

  }
</script>

<style>

  .selected-link-nav {
    color: red;
  }

</style>
