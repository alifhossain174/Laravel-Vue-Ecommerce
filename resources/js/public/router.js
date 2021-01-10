import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/public/Home'
import UserLogin from '../components/public/auth/UserLogin'
import UserRegister from '../components/public/auth/UserRegister'
import UserDashboard from '../components/public/UserDashboard'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/user-login', component: UserLogin, name: 'UserLogin' },
        { path: '/user-register', component: UserRegister, name: 'UserRegister' },
        { path: '/user/user-dashboard', component: UserDashboard, name: 'User-Dashboard' },
    ]
})

export default router;
