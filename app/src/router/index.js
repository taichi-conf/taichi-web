import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MembersView from '../views/MembersView.vue'
import VenuesView from '../views/VenuesView.vue'
import CompetitionsView from '../views/CompetitionsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/members',
    name: 'members',
    component: MembersView
  },
  {
    path: '/venues',
    name: 'venues',
    component: VenuesView
  },
  {
    path: '/competitions',
    name: 'competitions',
    component: CompetitionsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
