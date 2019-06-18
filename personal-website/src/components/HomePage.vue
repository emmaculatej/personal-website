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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
