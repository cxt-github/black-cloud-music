import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//导入子组件
import Results from './components/results.vue'
import Comment from './components/comment.vue'
import Player from './components/player.vue'
import Video from './components/video.vue'

//导入样式
import './assets/css/index.css'
import './assets/css/iconfont.css'
import './assets/css/results.css'
import './assets/css/player.css'
import './assets/css/video.css'
import './assets/css/comment.css'

Vue.config.productionTip = false
//用包
Vue.use(VueRouter)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/results', component: Results },
  { path: '/comment', component: Comment },
  { path: '/player', component: Player },
  { path: '/video', component: Video },
  
]

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  linkActiveClass: 'active', //添加高亮样式
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
