<template>
  <p>Signing in...</p>
</template>

<script>
	export default {
		name: "signed-in",

    mounted () {
      const { token, secret } = extractInfoFromHash();
      if (!checkSecret(secret) || !token) {
        console.error('Something happened with the Sign In request')
      }
      setToken(token);
      this.$router.replace('/')
    }
	}
</script>

<style scoped>

</style>
