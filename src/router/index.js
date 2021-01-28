import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pessoa from '../views/Pessoa.vue'
import notFound from '../views/notFound.vue'
import About from '../views/About.vue'
import CriarPessoa from '../views/CriarPessoa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'notFound',
    component: notFound
  },
  {
    path: '/criar-pessoa',
    name: 'CriarPessoa',
    component: CriarPessoa
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:id',
    name: 'Pessoa',
    component: Pessoa,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
