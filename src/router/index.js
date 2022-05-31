import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path: '/Contact',    name: 'ContactView',      component: ContactView },
    { path: '/Festival',    name: 'FestivalView',      component: FestivalView },
    { path: '/Artistes',    name: 'ArtistesView',      component: ArtistesView },
    { path: '/Programme',    name: 'ProgrammeView',      component: ProgrammeView },
   
  ]
})

export default router
