<template>
<div class="card personalDescription">
    <div class="personalHeaders">
    <h4> {{ personalDetails.forename}} {{ personalDetails.surname}} </h4>
    <h5> {{ personalDetails.occupation}} </h5>
    </div>
    <div>
        <img class="profilePicture" src="../assets/profilepic.jpg"/>
        <p class="description"> Experienced Developer with a demonstrated history of working in the information technology and services industry. 
            Skilled in HTML, JavaScript, .Net framework, C#, and Visual Studio. 
            Strong engineering professional with a Bachelor's degree focused in Computer Science from University of Surrey.
            Experienced Developer with a demonstrated history of working in the information technology and services industry. 
            Skilled in HTML, JavaScript, .Net framework, C#, and Visual Studio. 
            Strong engineering professional with a Bachelor's degree focused in Computer Science from University of Surrey.
            Experienced Developer with a demonstrated history of working in the information technology and services industry. 
            Skilled in HTML, JavaScript, .Net framework, C#, and Visual Studio. 
            Strong engineering professional with a Bachelor's degree focused in Computer Science from University of Surrey. </p>
    </div>
</div>  
</template>

<script>
export default {
    name: 'Description',
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

.profilePicture {
    margin-left: 10%;
    border-radius: 5px;
    max-width: 300%;
    width: 30%;
    float: left;
    padding-top: 5%;
}

.description{
    margin-left: 45%;
    display: block;
    text-align: center;
    width: 40%;
    padding-top: 8%;
    padding-left: 5%;

}

.personalHeaders {
    font-size: 250%;
}

.personalDescription{
    background-color: coral;
    color: white;
}
</style>

