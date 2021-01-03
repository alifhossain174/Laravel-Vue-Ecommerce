require('./bootstrap');

window.Vue = require('vue');

Vue.component('public-master', require('./components/public/PublicMaster.vue').default);

import router from './public/router';

const app = new Vue({
    el: '#app',
    router,
    data: {
        test: 'Testing For Frontend'
    }
});
