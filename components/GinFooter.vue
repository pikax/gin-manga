<template lang="pug">
  v-flex(xs12, py-3, text-xs-center, white--text) &copy; 2018
    v-flex(v-if="!isOnline") offline

</template>

<script>

  import {mapGetters}  from 'vuex'

  export default {
    name: "GinFooter",


    computed: mapGetters(['isOnline'])

  }
</script>

<style scoped>

</style>
