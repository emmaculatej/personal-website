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

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: white;
  color: black;
  transform: rotateY(180deg);
}
</style>
