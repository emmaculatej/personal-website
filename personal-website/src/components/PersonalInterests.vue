<template>
<div class="interestBackground">
    <div class="container" id="personalInterestContainer">
        <h4 class="container interestHeading"> Personal Interests </h4>
            <div class="card-deck">
            <div class="card">              
                <div class="card-body">
                    <img class="card-img-top" src="../assets/flower.jpg" />
                    <h5 class="card-title"> heading </h5>
                    <div class="text-center">
                        <button class="btn btn-danger" v-on:click="youtube = !youtube"> Learn More </button>
                    </div>
                    <div class="card-text centreText" v-if="youtube == true">
                        <span > some text that needs to be adapted </span>
                        <span class="card-text"> some text that needs to be adapted </span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body" alt="Card image cap">
                    <img class="card-img-top" src="../assets/flower.jpg" />
                    <h5 class="card-title"> heading </h5>
                    <div class="text-center">
                        <button class="btn btn-warning" v-on:click="music = !music"> Learn More </button>
                    </div>
                    <div class="card-text centreText" v-if="music == true">
                        <span > some text that needs to be adapted </span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body" alt="Card image cap">
                        <img class="card-img-top" src="../assets/flower.jpg" />
                        <h5 class="card-title"> heading </h5>
                        <div class="text-center">
                            <button class="btn btn-success" v-on:click="fitness = !fitness"> Learn More </button>
                        </div>
                        <div class="card-text centreText" v-if="fitness == true">
                            <span > fsdfsdfdsffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffff
                            </span>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'PersonalInterests',
    data: function() {
        return{
            youtube: false,
            music: false,
            fitness: false
        }
    },
    methods: {
        showYoutube: void {
            youtube: true
        },
        showMusic: void {
            music: true
        },
        showFitness: void {
            fitness: true
        }

    }
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
.centreText{
    text-align: center;
}
</style>