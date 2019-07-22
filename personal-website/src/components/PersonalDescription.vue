<template>
<div class="personaldescription">
    <h1> About me </h1>
    <h4> {{ personalDetails.forename}} {{ personalDetails.surname}} </h4>
    <h6> {{ personalDetails.occupation}} </h6>
    <div>
    <img src="../assets/profilepic.jpg" style="width: 10%; height: 10%"/>
    </div>
    <div>
    <span> Experienced Developer with a demonstrated history of working in the information technology and services industry. 
        Skilled in HTML, JavaScript, .Net framework, C#, and Visual Studio. 
        Strong engineering professional with a Bachelor's degree focused in Computer Science from University of Surrey. </span>
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

</style>

