<template>
    <app :dark="false">
      <nuxt/>
  </app>
</template>

<script>
	import App from "../components/App";
  export default {
		name: "light",
    components: {App}
  }
</script>

<style scoped>

</style>
