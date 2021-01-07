require('./bootstrap');

window.Vue = require('vue');

Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);

import router from './admin/router';
import {store} from './store/store';

const admin = new Vue({
    el: '#admin',
    router,
    store
});
