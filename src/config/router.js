import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../components/Home/Home'
import AboutView from '../components/About/About'
import AuthView from '../components/Auth/Auth'
import ProductsView from '../components/Products/Products'
import OffersView from '../components/Products/Offers'
import UpdateView from '../components/Products/UpdateProducts'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "*",
    redirect: "/",
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: AuthView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/offers',
    name: 'offers',
    component: OffersView
  },
  {
    path: '/update',
    name: 'update',
    component: UpdateView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
