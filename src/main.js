import { createApp } from 'vue'
import router from './router/index.js'
import axios from 'axios';
import Toaster from '@meforma/vue-toaster';
window.axios = axios;
import App from './App.vue'
import * as jqueryExports from "jquery";
window.$ = jqueryExports.default;
// import 'bootstrap/dist/css/bootstrap.css';
// import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faInfoCircle, faPlus, faPlusSquare, faSearch, faSquare, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret,faUser,faCartShopping,faSearch,faSquare,faPlus,faPlusSquare,faInfoCircle)
const app =  createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app');
app.use(Toaster);

// app.use(bootstrap);



