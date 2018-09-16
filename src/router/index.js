import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import Stream from '@/components/Stream'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [{
    path: '',
    component: MainPage,
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
        //fixme, já não me lembro pq é que isto aqui é preciso
        props: (route) => {
          const infoHash = route.params.infoHash ? route.params.infoHash: undefined
          const fileIndex = route.params.fileIndex ? route.params.fileIndex: undefined
          return {
            infoHash,
            fileIndex
          }
        }
      }
    ]
  }]
})
