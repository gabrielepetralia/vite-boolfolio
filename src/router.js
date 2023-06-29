import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/Home.vue'
import Projects from './components/pages/Projects.vue'
import About from './components/pages/About.vue'
import Services from './components/pages/Services.vue'
import Contacts from './components/pages/Contacts.vue'
import Error404 from './components/pages/Error404.vue'

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    
    {
      path: '/:pathMatch(.*)*',
      component: Error404
    }
  ]
})

export { router }