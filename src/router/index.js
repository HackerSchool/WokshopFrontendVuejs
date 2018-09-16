import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import Stream from '@/components/Stream'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [{
    path: '',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/torrents',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/stream/:infoHash',
        name: 'Stream',
        component: Stream,
        props: (route) => {
          const infoHash = route.params.infoHash ? route.params.infoHash: undefined
          return {
            infoHash
          }
        }
      }
    ]
  }]
})
