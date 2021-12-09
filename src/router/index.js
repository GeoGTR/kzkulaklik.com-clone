import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import Cart from '../views/cart.vue'
import Contact from '../views/contact.vue'
import Kulakliklar from '../views/kulakliklar.vue'
import LoginPage from '../views/loginPage.vue'
import Product from '../views/product.vue'
import DistanceSalesAgreement from '../views/distanceSalesAgreementPage'
import Kablolar from '../views/kablolar.vue'
import PaymentAndDelivery from '../views/paymentAndDeliveryPage.vue'
import PrivacyAndSecurity from '../views/privacyAndSecurityPage.vue'
import WarrantyAndReturn from '../views/warrantyAndReturnPage.vue'

const routes = [
  {
    path: '/a',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/',
    name: 'IndexPage',
    component: Index
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: Cart
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: Contact
  },
  {
    path: '/kulakliklar',
    name: 'KulakliklarPage',
    component: Kulakliklar
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/product',
    name: 'ProductPage',
    component: Product
  },
  {
    path: '/distanceSalesAgreement',
    name: 'DistanceSalesAgreementPage',
    component: DistanceSalesAgreement
  },
  {
    path: '/kablolar',
    name: 'KablolarPage',
    component: Kablolar
  },
  {
    path: '/paymentAndDelivery',
    name: 'PaymentAndDeliveryPage',
    component: PaymentAndDelivery
  },
  {
    path: '/privacyAndSecurity',
    name: 'PrivacyAndSecurityPage',
    component: PrivacyAndSecurity
  },
  {
    path: '/warrantyAndReturn',
    name: 'WarrantyAndReturnPage',
    component: WarrantyAndReturn
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
