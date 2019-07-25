<template>
<div class="interestBackground">
    <div class="container" id="personalInterestContainer">
        <h4 class="container interestHeading"> Personal Interests </h4>
            <div class="card-deck">
                <div class="card">                          
                    <div class="card-body text-center">
                        <img class="card-img-top" src="../assets/flower.jpg" alt="Card image"/>                        
                        <h5 class="card-title"> heading </h5>
                        <span class="card-text"> some text that needs to be adapted </span>
                        <span class="card-text"> some text that needs to be adapted </span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body text-center" alt="Card image cap">
                        <img class="card-img-top" src="../assets/flower.jpg" />
                        <h5 class="card-title"> heading </h5>
                        <span class="card-text"> some text that needs to be adapted </span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body text-center" alt="Card image cap">
                            <img class="card-img-top" src="../assets/flower.jpg" />
                            <h5 class="card-title"> heading </h5>
                    </div>
                </div>
            </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'PersonalInterests'
}
</script>

<style scoped>
.interestBackground{
    background-color:coral;
}
.container{
    padding-bottom: 5%;
}

#personalInterestContainer {
    padding-top: 5%;
}

.interestHeading{
    font-size: 200%;
    color: white;
}
</style>