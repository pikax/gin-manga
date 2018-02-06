<template lang="pug">

  v-content(fluid, grid-list-xl)
    v-layout(wrap, grid-list-xl)
      v-flex(row, fluid, text-xs-center)
        v-avatar(size="150")
          img(:src="image")
      v-flex(wrap)
        v-flex(column)

          v-flex(class="text-xs-center")
            v-chip(v-for="g in genres", :key="g") {{g}}

          v-flex(fluid, grid-list-xl)
            h1 {{title}}
            v-chip(v-for="s in synonyms", small, :key="s.title") {{s.title}}
      v-spacer
      v-divider(row, fluid)
      //chapters



      v-flex(wrap)
        v-data-table(:headers="headers", :items="chapters", :hide-actions='false',
        :disable-initial-sort="true")
          template(slot="items", slot-scope="props")
            td {{props.item.chap_number}}
            td {{props.item.name}}
            td {{props.item.volume}}
            td {{props.item.language}}
            td {{props.item.scanlator}}
            td
              a(:href="props.item.src") batoto


</template>

<script lang="ts">
  import {uniq, sortBy} from 'lodash';

  const enum Languages {
    English = "English",
    Japanese = "Japanese"
  }


  export default {
    components: {
    },
    name: "manga-info",


    computed: {
      Languages: () => {
        return {
          English: "English",
          Japanese: "Japanese"
        }
      },
      chapterLanguages() {
        return uniq((this as any).chapters.map(x => x.language));
      },


      chaptersByLanguage() {
        const {chapters, language} = this as any;

        return chapters.filter(x => x.language === language)
      }


    },


    methods: {
      onImageClick() {
        console.log('opening img');
        // (this as any).$refs.imageDialog.open()
      }
    },


    data: () => ({
      language: "English",
      // sorter: {name:"chapter_number", type:"desc"}


      headers: [
        {text: "Chapter", value: "chap_number", align: "right"},
        {text: "Name", value: "name"},
        {text: "volume", value: "volume"},
        {text: "Language", value: "language"},
        {text: "Scanlator", value: "scanlator"},
        {text: "Source", value: "src", sortable: false},
      ]

    }),

    props: {
      title: {
        type: String,
        required: true
      },
      artists: {
        type: Array,
      },
      authors: {},
      chapters: {},
      genres: {},
      image: {},
      mature: {},
      status: {},
      synonyms: {},
      synopsis: {},
      type: {},
    },


    created() {
      console.log(`created with ${(this as any).title}`)
    }

  }
</script>

<style lang="scss" scoped>
  $break-small: 620px;



  .gin-row{
    display: flex;
  }

  .extra-cols {
    /*display: block;*/

    @media only screen and (max-width: $break-small) and (orientation: portrait) {
      display: none;
    }
  }

  .no-padding-chips {
    padding: 0px;
  }

</style>
