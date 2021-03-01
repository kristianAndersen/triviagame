import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

import welcome from '@/components/welcome'
import game from '@/components/game'


import { getQandA } from './utills/fetchApi.js'

Vue.config.productionTip = false
Vue.use(Router)

/*
* Routing to components
* Loading api call with shuffled answers into game component
*/

const router = new Router({
  routes: [
    { path: '/', component: welcome, props: { msg: 'THE AWESOME TRIVIA GAME' } },
    {path: '/game',name: 'game',component: game,props:{apidata:getQandA()} },
  ]
})
/*
* Inject router to mount instance
*/
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
