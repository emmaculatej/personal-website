<template>
  <div class="card">
    <h1>{{personalDetails.forename}} {{personalDetails.surname}}</h1>
    <h2>{{personalDetails.occupation}}</h2>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Homepage',
  props: {
    personalDetails: {
      forename: String,
      surname: String,
      dob: String,
      email: String,
      occupation: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
