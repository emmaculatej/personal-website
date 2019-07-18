<template>
<div class="personaldescription">
    <h1> About me </h1>
    <h4> {{ personalDetails.forename}} {{ personalDetails.surname}} </h4>
    <h6> {{ personalDetails.occupation}} </h6>
    <img src="../assets/profilepic.jpg" style="width: 50%; height: 50%"/>
    <p> Here goes some general text about me</p>
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

