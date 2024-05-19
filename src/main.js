// Import the necessary functions and components
import { createApp } from 'vue';
import App from './App.vue'; // Import the root component of your Vue app
import 'mdb-vue-ui-kit/css/mdb.min.css'; // Import the MDB Vue UI Kit CSS
import Datepicker from 'vue3-datepicker'; // Import the Datepicker component
import router from './router'; // Import the router configuration
import PrimeVue from 'primevue/config'; // Import PrimeVue configuration
import ToastService from 'primevue/toastservice'; // Import ToastService
import Toast from 'primevue/toast'; // Import Toast component



// Create the Vue app instance
const app = createApp(App);

// Use the router configuration
app.use(router);

// Use PrimeVue configuration
app.use(PrimeVue);

// Use ToastService
app.use(ToastService);

// Register the Datepicker component globally
app.component('Datepicker', Datepicker);

// Register the Toast component globally
app.component('Toast', Toast);

// Mount the app to the DOM, targeting the element with id="app"
app.mount('#app');
