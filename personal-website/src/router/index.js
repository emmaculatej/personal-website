import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import ContactMe from '@/components/ContactMe.vue'
import PersonalDescription from '@/components/PersonalDescription.vue'
import Experience from '@/components/Experience.vue'
import DevelopmentPortfolio from '@/components/DevelopmentPortfolio.vue'
import PersonalInterests from '@/components/PersonalInterests.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/contactMe',
      name: 'ContactMe',
      component: ContactMe
    },
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/personalStatement',
        name: 'PersonalDescription',
        component: PersonalDescription
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Experience
    },
    {
        path: '/developmentPortfolio',
        name: 'DevelopmentPortfolio',
        component: DevelopmentPortfolio
    },
    {
      path: '/personalInterests',
      name: 'PersonalInterests',
      component: PersonalInterests
  }
  ]
})