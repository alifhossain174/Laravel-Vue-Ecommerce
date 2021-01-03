import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>Bar</div>' }

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/admin', component: Foo },
        { path: '/bar', component: Bar }
    ]
})

export default router;
