import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AdminDashboard from '../components/admin/AdminDashboard'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/admin', component: AdminDashboard },
    ]
})

export default router;
