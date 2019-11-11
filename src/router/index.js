import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '',
        name: 'main',
        component: () => import('@/views/main.vue')
      }
    ]
  },
  {
    path: '/data/index',
    name: 'DataIndex',
    component: () => import('@/views/data/index.vue')
  },
  {
    path: '/log/index',
    name: 'LogIndex',
    component: () => import('@/views/log/index.vue')
  },
  {
    path: '/log/platform-log',
    name: 'PlatformLog',
    component: () => import('@/views/log/platform-log.vue')
  },
  {
    path: '/log/operation-log',
    name: 'OperationLog',
    component: () => import('@/views/log/operation-log.vue')
  },
  {
    path: '/device/index',
    name: 'DeviceIndex',
    component: () => import('@/views/device/index.vue')
  },
  {
    path: '/device/add-device',
    name: 'AddDevice',
    component: () => import('@/views/device/add-device.vue')
  },
  {
    path: '/setup/index',
    name: 'SetupIndex',
    component: () => import('@/views/setup/index.vue')
  },
  {
    path: '/setup/com-list',
    name: 'ComList',
    component: () => import('@/views/setup/com-list.vue')
  },
  {
    path: '/setup/device-list',
    name: 'DeviceList',
    component: () => import('@/views/setup/device-list.vue')
  },
  {
    path: '/setup/company-list',
    name: 'CompanyList',
    component: () => import('@/views/setup/company-list.vue')
  },
  {
    path: '/setup/com-setup',
    name: 'ComSetup',
    component: () => import('@/views/setup/com-setup.vue')
  },
  {
    path: '/setup/ipc-list',
    name: 'IpcList',
    component: () => import('@/views/setup/ipc-list.vue')
  },
  {
    path: '/setup/ipc-setup',
    name: 'IpcSetup',
    component: () => import('@/views/setup/ipc-setup.vue')
  },
  {
    path: '/setup/rs485-list',
    name: 'Rs485List',
    component: () => import('@/views/setup/rs485-list.vue')
  },
  {
    path: '/setup/rs485-setup',
    name: 'Rs485Setup',
    component: () => import('@/views/setup/rs485-setup.vue')
  }
]

VueRouter.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

const router = new VueRouter({
  routes
})


export default router
