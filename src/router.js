import Vue from 'vue'
import VueRouter from 'vue-router'

// 避免重複觸發相同路由(route)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@V/Home.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('@V/Dashboard.vue'),
      },
      {
        path: '/attendance',
        name: 'Attendance',
        component: () => import('@V/Attendance.vue')
      },
      {
        path: '/patients',
        name: 'Patients',
        component: () => import('@V/Patients/List.vue')
      },
      {
        path: '/patients/create',
        name: 'PatientsCreate',
        component: () => import('@V/Patients/Detail.vue')
      },
      {
        path: '/patients/:id',
        name: 'PatientsDetail',
        component: () => import('@V/Patients/Detail.vue')
      },
      {
        path: '/cases',
        name: 'Cases',
        component: () => import('@V/Cases.vue')
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
