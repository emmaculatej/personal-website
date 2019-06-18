<template>
  <div id="app">
    <homepage name="Emmaculate Jeyarajah"/>
    <contact-me />
    <personal-description />
    <experience />
    <c-v />
    <development-portfolio />
  </div>
</template>

<script>
import Homepage from './components/HomePage.vue'
import ContactMe from './components/ContactMe.vue'
import PersonalDescription from './components/PersonalDescription.vue'
import Experience from './components/Experience.vue'
import CV from './components/CV.vue'
import DevelopmentPortfolio from './components/DevelopmentPortfolio.vue'

export default {
  name: 'app',
  components: {
    Homepage,
    ContactMe,
    PersonalDescription,
    Experience,
    CV,
    DevelopmentPortfolio
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
