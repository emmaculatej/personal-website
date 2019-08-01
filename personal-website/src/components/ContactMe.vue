<template>
    <div class="card">
        <div class="footerHeading">
        <h3>Connect with me! </h3>
        </div>
        <div class="row">
            <div class="col-3">          
            <h4> 
                <font-awesome-icon icon="envelope" /> 
                <a href="mailto:emmaculate.jeyarajah@hotmail.com"> 
                    Email 
                </a> 
            </h4>    
            </div>
            <div class="col-3" v-for="item in socialMedia" v-bind:key="item.id">
                <h4> 
                    <font-awesome-icon :icon=item.icon />  
                    <a :href=item.link> {{item.title}} 
                    </a>
                </h4>               
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
                {id: 1, icon: ['fab', 'linkedin'], title: 'LinkedIn', link: 'https://uk.linkedin.com/in/emmaculate-jeyarajah'},
                {id: 2, icon: ['fab', 'github'], title: 'GitHub', link: 'https://github.com/emmaculatej'},
                {id: 2, icon: ['fab', 'youtube'], title: 'Youtube', link: 'https://www.youtube.com/channel/UCuBLXiAFnO-hvSXyWQ3f5gA'}
            ]
        }
    }
}
</script>

<style scoped>

.card{
    padding-bottom: 5%;
}

.footerHeading{
    padding-bottom: 3%;
    padding-top: 3%;
    border-width: 5px;
    border-color: coral;
}

h4 {
    font-size: 150%;
}

h3 {
    font-size: 200%;
}

</style>
