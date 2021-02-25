import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

import welcome from '@/components/welcome'
import game from '@/components/game'


import { getQandA } from './utills/fetchApi.js'

Vue.config.productionTip = false
Vue.use(Router)



const router = new Router({
  routes: [
    { path: '/', component: welcome, props: { msg: 'THE AWESOME TRIVIA GAME' } },
    {path: '/game',name: 'game',component: game,props:{apidata:getQandA()} },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')