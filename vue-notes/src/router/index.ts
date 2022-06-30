import type {RouteRecordRaw} from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router'
import NotesView from '../views/NotesView.vue'
import StatsView from '../views/StatsView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'notes',
        component: NotesView
    },
    {
        path: '/stats',
        name: 'stats',
        component: StatsView
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,

})

export default router
