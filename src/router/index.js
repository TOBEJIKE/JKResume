import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Welcome = resolve => require(['../components/Welcome.vue'], resolve);
const Intro = resolve => require(['../components/Intro.vue'], resolve);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: Welcome
        },
        {
            path: '/intro',
            name: 'intro',
            component: Intro
        }
    ],
    beforeEach (to, from, savedPosition) {

    }
});
router.beforeEach((to, from, next) => {
    next()
});

export default router;