<template lang="pug">

  v-card(:class='classObject', )
    v-card-media.gin-card-media(:src="image", :height='height', @click.native="raiseClick")
    span.gin-card-title(v-text="title")
    slot(name='actions')
</template>

<script>
  export default {
    name: "manga-card",

    props: {
      title: {type: String, required: true},
      image: String,
      alt: String,
      subtitle: String,

      mature: Boolean,

      actions: {default: null},

      classObject: Object,

      onClick: Function,

      height: {type: String, default: '10em'}
    },

    data: () => ({}),


    methods:{
      raiseClick(){
        this.onClick(this.title);
      }
    }


  }
</script>

<style lang="scss" scoped>

  .gin-card-media{
    cursor: pointer;
  }

  .gin-card-title {
    background: rgba(0, 0, 0, 50);

    text-overflow: ellipsis;
    width: 100%;

    overflow: hidden;
    white-space: nowrap;
    display:inline-block;
  }


</style>
