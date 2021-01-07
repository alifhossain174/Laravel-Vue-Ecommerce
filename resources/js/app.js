require('./bootstrap');

window.Vue = require('vue');

Vue.component('public-master', require('./components/public/PublicMaster.vue').default);

import router from './public/router';
import {store} from './store/store';

const app = new Vue({
    el: '#app',
    router,
    store,
    data: {
        test: 'Testing For Frontend'
    }
});
