<template>
  <div id="app">
    <!-- <home-page :personalDetails="personalDetails"/>
    <navigation></navigation> -->
    <personal-description :personalDetails="personalDetails"/>
    <experience />
    <personal-interest />
    <development-portfolio />
    <contact-me :personalDetails="personalDetails"/>
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue'
import ContactMe from './components/ContactMe.vue'
import PersonalDescription from './components/PersonalDescription.vue'
import Experience from './components/Experience.vue'
// import Navigation from './components/Navigation.vue'
import DevelopmentPortfolio from './components/DevelopmentPortfolio.vue'
import PersonalInterest from './components/PersonalInterests.vue';

export default {
  name: 'app',
  components: {
    // HomePage,
    ContactMe,
    PersonalDescription,
    Experience,
    // Navigation,
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.4;
}

h4, h5 {
    font-family: Courier New, Century Gothic, sans-serif;
}

h4, h5, h6{
  text-align: center;
}

.card {
  padding-top: 3%;
  padding-bottom: 5%;
}
</style>
