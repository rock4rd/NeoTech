// Import the necessary functions and components
import { createApp } from 'vue';
import App from './App.vue'; // Import the root component of your Vue app
import 'mdb-vue-ui-kit/css/mdb.min.css'; // Import the MDB Vue UI Kit CSS
import Datepicker from 'vue3-datepicker'; // Import the Datepicker component
import router from './router'; // Import the router configuration

// Create the Vue app instance, use the router, and mount the app to the DOM
createApp(App)
  .use(router) // Use the router configuration
  .component('Datepicker', Datepicker) // Register the Datepicker component globally
  .mount('#app'); // Mount the app to the DOM, targeting the element with id="app"
