<template>
    <div>
        <h1> Contact Me </h1>
        <div class="row">
            <div class="col-3">
                <i class="fas fa-cloud"></i>
            <h4> Email </h4>
            <a href="mailto:emmaculate.jeyarajah@hotmail.com"> {{personalDetails.email}}</a>
            </div>
            <div class="col-3" v-for="item in socialMedia" v-bind:key="item.id">
                <h4> {{item.title}} </h4>
                <a :href=item.link> {{item.link}} </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactMe',
    props: {
        personalDetails: {
            email: String
        }
    },
    data: function () {
        return {
            socialMedia: [
                {id: 1, title: 'LinkedIn', link: 'https://uk.linkedin.com/in/emmaculate-jeyarajah'},
                {id: 2,title: 'GitHub', link: 'https://github.com/emmaculatej'}
            ]
        }
    },
    methods: {
        sendEmail: void {


        }
    }
    
}
</script>

<style scoped>

</style>
