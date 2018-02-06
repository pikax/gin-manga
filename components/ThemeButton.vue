<template>
  <v-switch :input-value="dark"></v-switch>
</template>

<script>

  export default {
    name: "ThemeButton",

    // data: () => ({
    // }),


    props: {
      dark: {type: Boolean, required: true}
    },


    watch: {
      dark(value) {
        // this.useDarkTheme(value);
        this.$store.dispatch("useDarkTheme", value);
      }
    }

  }
</script>

<style scoped>

</style>
