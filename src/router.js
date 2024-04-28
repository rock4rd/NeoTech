import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import History from './components/History.vue';
import Profile from './components/Profile.vue';
import Login from './components/Login.vue';
import Booking from './components/Booking.vue';
import Bookreq from './components/Bookreq.vue';
import UserView from './components/UserView.vue';


const routes = [
    { path: '/', component: Login },
    { path: '/history', component: History },
    { path: '/profile', component: Profile },
    { path: '/booking', component: Booking },
    { path: '/bookreq', component: Bookreq },
    { path: '/userview', component: UserView },
    { path: '/home', component: Home, name: "home" },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;