<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-on:click="active = 'active'">    
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item" v-on:click="active = 'active'">
                    <router-link class="nav-link" to="/contactMe">Contact Me</router-link>
                </li>
                <li class="nav-item" v-on:click="active = 'active'">              
                    <router-link class="nav-link" to="/personalStatement">Personal Statement</router-link>
                </li>
                <li class="nav-item" v-on:click="active = 'active'">
                    <router-link class="nav-link" to="/experience">Experience</router-link>
                </li>
            <!-- <router-link to="/DevelopmentPortfolio">Portfolio</router-link> -->

            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'Navigation'
}
</script>

<style scoped>

</style>


