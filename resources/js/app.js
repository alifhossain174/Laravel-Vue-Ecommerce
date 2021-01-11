require('./bootstrap');

window.Vue = require('vue');

Vue.component('public-master', require('./components/public/PublicMaster.vue').default);

import router from './public/router';
import {store} from './store/store';


import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { locale })


const app = new Vue({
    el: '#app',
    router,
    store,
    data: {
        test: 'Testing For Frontend'
    }
});
