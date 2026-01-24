import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/submit-request',
        name: 'submit-request',
        component: () => import(/* webpackChunkName: "submit-request" */ '../views/SubmitRequestView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/EmployeeDashboard.vue')
    },
    {
        path: '/hr-dashboard',
        name: 'hr-dashboard',
        component: () => import(/* webpackChunkName: "hr-dashboard" */ '../views/HRDashboard.vue')
    },
    {
        path: '/hr/account',
        name: 'hr-account',
        component: () => import(/* webpackChunkName: "hr-account" */ '../views/hr/HRAccount.vue')
    },
    {
        path: '/hr/payslips',
        name: 'hr-payslips',
        component: () => import(/* webpackChunkName: "hr-payslips" */ '../views/hr/HRPayslips.vue')
    },
    {
        path: '/om-dashboard',
        name: 'om-dashboard',
        component: () => import(/* webpackChunkName: "om-dashboard" */ '../views/OMDashboard.vue')
    },
    {
        path: '/dept-head-dashboard',
        name: 'dept-head-dashboard',
        component: () => import(/* webpackChunkName: "dept-head-dashboard" */ '../views/DeptHeadDashboard.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
