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
        {
            path: '/user-login', component: UserLogin, name: 'UserLogin',
            beforeEnter: (to, from, next) => {
                const isAuthenticated = localStorage.getItem('userLoggedIn') ? true : false;
                if (to.name == 'UserLogin' && isAuthenticated) next({ name: 'User-Dashboard' })
                else next();
            }
        },
        { path: '/user-register', component: UserRegister, name: 'UserRegister' },

        {
            path: '/user/user-dashboard', component: UserDashboard, name: 'User-Dashboard',
            beforeEnter: (to, from, next) => {
                const isAuthenticated = localStorage.getItem('userLoggedIn') ? true : false;
                if (to.name !== 'UserLogin' && !isAuthenticated) next({ name: 'UserLogin' })
                else next()
            }
        },
    ]
})

export default router;
