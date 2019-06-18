<template>
  <div class="homepage">
    <h1>{{name}}</h1>
    <h2>{{role}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  props: {
    name: String,
    role: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
