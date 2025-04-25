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
  },
  {
    path: '/submit',
    name: 'submit',
    component: () => import('../views/SubmitView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // if the route has a hash, scroll to the element
    if (to.hash) {
      return { selector: to.hash }
    }
    // if using browser back/forward, restore position
    if (savedPosition) {
      return savedPosition
    }
    // otherwise scroll to top
    return { left: 0, top: 0 }
  }
})

export default router
