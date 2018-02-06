<template>
  <p>Signing off...</p>
</template>

<script>
  import { unsetToken } from '~/utils/auth'
  // import { logout } from '~/utils/lock'

  export default {
    name: "sign-off",

    mounted () {
      unsetToken();
      // logout();
    }
  }
</script>

<style scoped>

</style>
