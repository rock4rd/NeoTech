import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from './router'; // Import the router configuration
//import 'bootstrap/dsit/css/bootstrap.css'
//import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app');
//use(bootstrap)