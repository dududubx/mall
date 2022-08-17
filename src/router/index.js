import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const home = () => import('../views/Home/home');
const cart = () => import('../views/cart/Cart');
const category = () => import('../views/Category/category');
const profile = () => import('../views/Profile/profile');

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    component: home
  },
  {
    path:'/cart',
    component: cart
  },
  {
    path:'/category',
    component: category
  },
  {
    path:'/profile',
    component: profile
  }
]

const router = new VueRouter({
  routes
})

export default router