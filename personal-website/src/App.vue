<template>
  <div id="app">
    <homepage :personalDetails="personalDetails"/>
    <contact-me />
    <personal-description :personalDetails="personalDetails"/>
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
  }, 
  data : function (){
    return {
      personalDetails: {
        forename: 'Emma',
        surname: 'Jeyarajah',
        dob: '02 October 1996',
        email: 'emmaculate.jeyarajah@hotmail.com',
        occupation: 'Software Developer'
      }

    }
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
