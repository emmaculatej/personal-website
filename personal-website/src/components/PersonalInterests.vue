<template>
<div class="interestBackground">
    <div class="container" id="personalInterestContainer">
        <h4 class="container interestHeading"> Personal Interests </h4>
            <div class="card-deck">
            <div class="card">              
                <div class="card-body">
                    <img class="card-img-top" src="../assets/azuruplays.png"/>
                    <h5 class="card-title"> {{youtubeInterest.title}} </h5>
                    <div class="text-center">
                        <button class="btn btn-danger" v-on:click="youtube = !youtube"> Learn More </button>
                    </div>
                    <div class="card-text centreText" v-if="youtube == true">
                        <span class="card-text">{{youtubeInterest.description}}</span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body" alt="Card image cap">
                    <img class="card-img-top" src="../assets/flower.jpg" />
                    <h5 class="card-title"> {{musicInterest.title}} </h5>
                    <div class="text-center">
                        <button class="btn btn-warning" v-on:click="music = !music"> Learn More </button>
                    </div>
                    <div class="card-text centreText" v-if="music == true">
                        <span > {{musicInterest.description}} </span>
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
            fitness: false,
            youtubeInterest: {
                title: 'Youtube',
                description: 'AzuruPlays is my story-based puzzle gaming channel, where I share my experiences of the games that I play.',
                link: '#'
            },
            musicInterest: {
                title: 'Music',
                description: 'Grade 7 Violinist, Grade 6 Pianist, Grade 4 Clarinetist'
            }
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
    font-size: 25px;
    margin-bottom: 3%;
}
.centreText{
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>