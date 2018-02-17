<template lang="pug">
  v-flex(xs12, text-xs-center) &copy; 2018
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
