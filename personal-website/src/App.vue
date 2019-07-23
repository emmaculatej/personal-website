<template>
  <div id="app">
    <home-page :personalDetails="personalDetails"/>
    <navigation></navigation>
    <personal-description :personalDetails="personalDetails"/>
    <experience />
    <development-portfolio />
    <personal-interest />
    <contact-me :personalDetails="personalDetails"/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import ContactMe from './components/ContactMe.vue'
import PersonalDescription from './components/PersonalDescription.vue'
import Experience from './components/Experience.vue'
import Navigation from './components/Navigation.vue'
import DevelopmentPortfolio from './components/DevelopmentPortfolio.vue'
import PersonalInterest from './components/PersonalInterests.vue';

export default {
  name: 'app',
  components: {
    HomePage,
    ContactMe,
    PersonalDescription,
    Experience,
    Navigation,
    DevelopmentPortfolio,
    PersonalInterest

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
