import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import System from '@/components/Metrics/System/System'
import Schedule from '@/components/Metrics/Schedule/Schedule'
import Operation from '@/components/Metrics/Operation/Operation'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/system', name: 'System', component: System },
    { path: '/operation', name: 'Operation', component: Operation },
    { path: '/schedule', name: 'Schedule', component: Schedule }
  ],
  mode: 'history'
})
