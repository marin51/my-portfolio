import Vue from 'vue'
import Router, {RouteConfig} from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router);
const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    }
];
const router = new Router({
    mode: 'history',
    routes
});
router.beforeEach((to, from, next) => {
    const found = routes.find(route => route.name === to.name);
    if (found) {
        next();
    } else {
        next({name: 'Home'});
    }
});
export default router

