<template>
    <app :dark="true">
      <nuxt/>
    </app>
</template>

<script>
	import App from "../components/App";
  export default {
		name: "dark",
    components: {App}
  }
</script>

<style scoped>

</style>
