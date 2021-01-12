import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AdminDashboard from '../components/admin/AdminDashboard'
import AdminLogin from '../components/admin/auth/AdminLogin'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/admin', component: AdminDashboard, name: 'AdminDashboard'},
        { path: '/admin/login', component: AdminLogin, name: 'AdminLogin'},
    ]
})

export default router;
