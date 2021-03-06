import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'
import MentionsView from '../views/MentionsView.vue'
import ConcertView from '../views/ConcertView.vue'
import Page404 from '../views/Page404.vue'
import CreateArtiste from '../views/CreateArtiste.vue'
import async from '../views/asyncview.vue'

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
    { path: '/Mentions',    name: 'MentionsView',      component: MentionsView },
    { path: '/Concert',    name: 'ConcertView',      component: ConcertView },
    { path: '/:pathMatch(.*)*',   name: 'page404',    component: Page404 },
    { path: '/Create_artiste',   name: 'CreateArtiste',    component: CreateArtiste },
    { path: '/async',   name: 'asyncview',    component: async },
      
   
   
  ]
})

export default router
