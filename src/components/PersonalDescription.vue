<template>
<div class="card personalDescription">
    <div>
        <img class="profilePicture" src="../assets/profilepic.jpg"/>
        <h4 class="nameHeader">  Hi, 
        I'm {{ personalDetails.forename}}! </h4>
        <p class="description"> Experienced Developer with a demonstrated history of working in the information technology and services industry. 
            Skilled in HTML, JavaScript, .Net framework, C#, and Visual Studio. 
            Strong engineering professional with a Bachelor's degree focused in Computer Science from University of Surrey.
            Experienced Developer with a demonstrated history of working in the information technology and services industry. 
            Skilled in HTML, JavaScript, .Net framework, C#, and Visual Studio. 
            </p>
    <div class="cvButton">
        <c-v/>
    </div>
    </div>
    
</div>  
</template>

<script>
import CV from "../components/CV.vue";
export default {
    name: 'Description',
    components: {
        CV
    },
    props: {
        personalDetails: {
            forename: String,
            surname: String,
            occupation: String
        }
    }
}
</script>

<style scoped>

.cvButton {
    margin-left: 58%;
}
.profilePicture {
    margin-left: 10%;
    border-radius: 5px;
    max-width: 300%;
    width: 30%;
    float: left;
    height: auto;
    margin-top: 8%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.description{
    margin-left: 45%;
    display: block;
    text-align: center;
    width: 40%;
    padding-top: 2%;
    padding-left: 5%;
    padding-bottom: 2%;

}

.nameHeader{
    margin-left: 45%;
    display: block;
    text-align: center;
    width: 40%;
    padding-top: 7%;
    padding-left: 5%;
    font-size: 300%;
}

.personalDescription{
    background-color: coral;
    color: white;
}
</style>

