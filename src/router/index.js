import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../components/homeView.vue'
// import Detail from '../views/Detail.vue'
// import User from '../views/User.vue'

const blankView = () => import('../components/blankView')
const detailView = () => import('../components/detailView')
const userView = () => import('../components/userView')
const routes = [
    { path: '/', name: 'home', component: homeView },
    { path: '/blank/:id', name: 'blank', component: blankView },
    { path: '/detail/:id', name: 'detail', component: detailView },
    { path: '/user/:id', name: 'user', component: userView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router