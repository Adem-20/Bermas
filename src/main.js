import './assets/style/base.css'
import './assets/style/animation.css'
import './assets/style/font.css'
import './assets/style/color.css'
import { createRouter, createWebHistory } from "vue-router"
import { createApp } from 'vue'
import App from './App.vue'
import HomeView from './view/HomeView.vue'
import CoffeView from './view/CoffeView.vue'
import CoffeDetailView from './view/CoffeDetailView.vue'
import CakeView from './view/CakeView.vue'
import AboutView from './view/AboutView.vue'
import CommunationView from './view/CommunationView.vue'

const routes = [
  {
    path: "/",
    name:"home",
    component: HomeView,
    meta: { breadcrumb: "ANASAYFA" }
  },
  {
    path: "/coffe",
    name:"coffe",
    component: CoffeView,
    meta: { breadcrumb: "KAHVE" }
  },
  {
    path: "/coffeDetail",
    name:"coffeDetail",
    component: CoffeDetailView,
    meta: { breadcrumb: "KAHVE ÇEŞİTLERİ & DEMLEME REHBERİ" }
  },
  {
    path: "/cake",
    name:"cake",
    component: CakeView,
    meta: { breadcrumb: "PASTA" }
  },
  {
    path: "/about",
    name:"about",
    component: AboutView,
    meta: { breadcrumb: "HAKKIMIZDA" }
  },
  {
    path: "/communation",
    name:"communation",
    component: CommunationView,
    meta: { breadcrumb: "İLETİŞİM" }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')