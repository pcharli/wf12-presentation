import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../components/Intro.vue'
import GroupDisplay from '../components/GroupDisplay.vue'
import Conclusion from '../components/Conclusion.vue'
import Remerciements  from '../components/Remerciements.vue'
import Splash from '../components/Splash.vue'

const routes = [
  { path: '/', component: Splash },
  { path: '/intro', component: Intro },
  {
    path: '/groupe/:index',
    component: GroupDisplay,
    props: route => ({ index: Number(route.params.index) })
  },
  { path: '/conclusion', component: Conclusion },
   { path: '/remerciements', component: Remerciements }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
