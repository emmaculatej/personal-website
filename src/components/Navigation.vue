<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-on:click="active = 'active'">    
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item" v-on:click="active = 'active'">              
                    <router-link class="nav-link" to="/personalStatement">Personal Statement</router-link>
                </li>
                <li class="nav-item" v-on:click="active = 'active'">
                    <router-link class="nav-link" to="/experience">Experience</router-link>
                </li>
                <li class="nav-item" v-on:click="active = 'active'">
                    <router-link class="nav-link" to="/developmentPortfolio">Portfolio</router-link>
                </li>
                <li class="nav-item" v-on:click="active = 'active'">
                    <router-link class="nav-link" to="/personalInterests">Interests</router-link>
                </li>
                <li class="nav-item" v-on:click="active = 'active'">
                    <router-link class="nav-link" to="/contactMe">Contact Me</router-link>
                </li>       
            </ul>
            <c-v/>
        </nav>
    </div>
</template>

<script>
import CV from "../components/CV.vue";

export default {
    name: 'Navigation',
    components: {
        CV
    }
}
</script>

<style scoped>

</style>


