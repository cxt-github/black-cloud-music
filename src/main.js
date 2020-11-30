import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import { Carousel, CarouselItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//导入子组件
import Slider from './components/slider.vue'
import Results from './components/results.vue'
import Comment from './components/comment.vue'
import Player from './components/player.vue'
import Video from './components/video.vue'

// 把$axios属性设置给Vue原型
Vue.prototype.$axios = axios
// 设置基地址
axios.defaults.baseURL = 'https://autumnfish.cn'

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
Vue.component(Carousel.name,Carousel);
Vue.component(CarouselItem.name,CarouselItem);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', redirect: '/slider'}, //重定向
  { path: '/slider', component: Slider },
  { path: '/results/:keywords', component: Results },
  { path: '/comment/:id', component: Comment },
  { path: '/player/:id', component: Player },
  { path: '/video/:mvid', component: Video },

]

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
