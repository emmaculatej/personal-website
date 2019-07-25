<template>
<div class="interestBackground">
    <div class="container" id="personalInterestContainer">
        <h4 class="container interestHeading"> Personal Interests </h4>
            <div class="card-deck">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/flower.jpg" alt="Avatar" style="width:100%;height:auto;">
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1> 
                            <p>Architect & Engineer</p> 
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                 <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/flower.jpg" alt="Avatar" style="width:100%;height:auto;">
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1> 
                            <p>Architect & Engineer</p> 
                            <p>We love that guy</p>
                        </div>
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

.card-title{
    margin-top: 3%;
}
</style>